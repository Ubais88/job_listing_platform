import React, { useEffect, useState } from "react";
import Template from "./Template";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import image from "../Assets/register.png";
import axios from "axios";
import { useAuth } from "../store/auth";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Login = () => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { storeTokenInLS } = useAuth()


  const submitHandler = async (e) => {
    e.preventDefault();
    if (isValidForm()) {
      try {
        const response = await axios.post(
          `${BASE_URL}/login`,
          loginData
        );
        const { success, message } = response.data;

        if (success) {
          console.log("Login Successfully");
          storeTokenInLS(response.data.token)
          navigate('/') 
        } else {
          console.log(message);
        }
      } catch (error) {
        console.log("Login Data not matched");
      }
    }
  };

  const changeHandler = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  // validation
  const isValidForm = () => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else return true;
  };

  return (
    <div className="container">
      <div className="main">
        <div className="leftSide">
          <p className="para1">Already have an account?</p>
          <p className="para2">Your personal job finder is here</p>
        </div>
        <div className="formmain">
          <form className="form" onSubmit={submitHandler}>
            <input
              type="email"
              className="Input"
              placeholder="Email"
              name="email"
              onChange={changeHandler}
            />
            <span className="errors">{errors.email}</span>
            <input
              type="password"
              className="Input"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
            />
            <span className="errors">{errors.password}</span>
            <button className="formbtn">Sign in</button>
          </form>

          <p className="nextRoute">
            Don’t have an account? <Link to={"/register"}>Sign Up</Link>
          </p>
        </div>
      </div>

      <div className="Template">
        <Template heading={"Your Personal Job Finder"} img={image} />
      </div>
    </div>
  );
};

export default Login;
