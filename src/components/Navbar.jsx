import React from "react";
import Header from "../Assets/header.png";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import img from '../Assets/dporg.jpg'
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn , LogoutUser} = useAuth();
console.log(isLoggedIn)
  return (
    <div className="navbarContainer">
      <div className="mainImage">
        <img src={Header} alt="image" className="navImg1" />
      </div>

      <div className="finderContainer">
        <p className="platformtitle">Jobfinder</p>

        {isLoggedIn ? (
          <div className="authbtncontainer1">
            <button className="afterlogin" onClick={LogoutUser}>Logout</button>
            <p className="welcome">Hello , Recurtor</p>
            <img src={img} alt="Img" className="userImage"/>
          </div>
        ) : (
          <div className="authbtncontainer2">
            <button className="loginbtn">
              <Link to="/login" className="loginlink">
                Login
              </Link>
            </button>
            <button className="registerbtn">
              <Link to="/register" className="registerlink">
                Register
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
