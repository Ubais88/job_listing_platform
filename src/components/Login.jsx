import React from "react";
import Template from "./Template";
import "../Styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="leftSide">
          <p className="para1">Already have an account?</p>
          <p className="para2">Your personal job finder is here</p>
        </div>
        <div className="formmain">
          <form className="form">
            <input type="email" className="Input" placeholder="Email" />
            <input type="password" className="Input" placeholder="Password" />
          </form>
          <button className="formbtn">Sign in</button>
          <p className="nextRoute">Don’t have an account?
            {" "}<Link to={'/register'} >Sign Up</Link>
          </p>
        </div>
        
      </div>

      <div className="Template">
        <Template />
      </div>
    </div>
  );
};

export default Login;
