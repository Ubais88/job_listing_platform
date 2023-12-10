import React from "react";
import Header from "../Assets/header.png";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="mainImage">
        <img src={Header} alt="image" className="navImg1" />
      </div>

      <div className="finderContainer">
        <p className="platformtitle">Jobfinder</p>
        <div className="authbtncontainer">
          <button className="loginbtn">Login</button>
          <button className="registerbtn">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
