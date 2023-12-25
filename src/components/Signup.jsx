import React, { useState } from "react";
import Template from "./Template";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import image from "../Assets/register.png";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    checkbox: false,
  });

  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(formData);
    try{
      const response = await axios.post(`${BASE_URL}/register`,formData)
      const { success, message } = response.data;

        if (success) {
          console.log("Signup Successfully");
          storeTokenInLS(response.data.token)
          navigate('/') 
        } else {
          console.log(message);
        }
    }
    catch(error){
      console.log(error)
      console.log("something went wrong in user registration")
    }
  };

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className="container">
      <div className="main">
        <div className="leftSide">
          <p className="para1">Create an account</p>
          <p className="para2">Your personal job finder is here</p>
        </div>

        <div className="formmain">
          <form className="form" onSubmit={submitHandler}>
            <input
              type="text"
              className="Input"
              placeholder="Name"
              name="name"
              onChange={changeHandler}
            />
            <input
              type="email"
              className="Input"
              placeholder="Email"
              name="email"
              onChange={changeHandler}
            />
            <input
              type="tel"
              className="Input"
              placeholder="Number"
              name="mobile"
              onChange={changeHandler}
            />
            <input
              type="password"
              className="Input"
              placeholder="Password"
              name="password"
              onChange={changeHandler}
            />
            <div className="checkboxContainer">
              <input type="checkbox" name="checkbox" onChange={changeHandler} />
              <p>
                By creating an account, I agree to our terms of use and privacy
                policy
              </p>
            </div>
            <button className="formbtn">Create Account</button>
          </form>
          {/* <button className="formbtn">Create Account</button> */}
          <p className="nextRoute">
            Don’t have an account? <Link to={"/login"}>Sign In</Link>
          </p>
        </div>
      </div>

      <div>
        <Template heading={"Your Personal Job Finder"} img={image} />
      </div>
    </div>
  );
};

export default Signup;
