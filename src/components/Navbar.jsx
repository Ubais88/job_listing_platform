import React from "react";
import Header from "../Assets/header.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="mainImage">
        <img src={Header} alt="image" className="navImg1" />
      </div>

      <div className="finderContainer">
        <p className="platformtitle">Jobfinder</p>
        <div className="authbtncontainer">
          <button className="loginbtn">
          <Link to='/login' className="loginlink">Login</Link>
          </button>
          <button className="registerbtn">
            <Link to='/register' className="registerlink">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
