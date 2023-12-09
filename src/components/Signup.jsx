import React from "react";
import Template from "./Template";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="leftSide">
          <p className="para1">Create an account</p>
          <p className="para2">Your personal job finder is here</p>
        </div>

        <div className="formmain">
          <form className="form">
            <input type="text" className="Input" placeholder="Name" />
            <input type="email" className="Input" placeholder="Email" />
            <input type="tel" className="Input" placeholder="Number" />
            <input type="password" className="Input" placeholder="Password" />
            <div className="checkboxContainer">
              <input type="checkbox" name="" id="" className="Input" />
              <p>
                By creating an account, I agree to our terms of use and privacy
                policy
              </p>
            </div>
          </form>
          <button className="formbtn">Create Account</button>
          <p className="nextRoute">
            Don’t have an account? <Link to={"/login"}>Sign In</Link>
          </p>
        </div>
      </div>

      <div>
        <Template />
      </div>
    </div>
  );
};

export default Signup;
