import React, { useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../Assets/companyLogo.png";
import flag from "../Assets/Flag.png";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const Home = () => {
  const [data, setData] = useState(true);
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar />
      </div>

      {/* search and filter stuff */}
      <div className="homeContainer">
        <div className="searchContainer">
          <div className="searchjob">
            <IoSearch size={25} className="searchicon" />
            <input
              type="text"
              name=""
              id=""
              className="search"
              placeholder="Type any job title"
            />
          </div>
          <div className="containerfilter">
            <div className="options">
              <select name="" id="" className="select">
                <option value="default" selected>
                  Skills
                </option>
                <option value="option1">HTML</option>
                <option value="option2">CSS</option>
                <option value="option3">JAVASCRIPT</option>
                <option value="option4">REACT</option>
              </select>
              <div className="selected">
                <div className="skills">
                  <p className="skillP">HTML</p>
                  <RxCross2 size={34} className="crossIcon" />
                </div>

                <div className="skills">
                  <p className="skillP">CSS</p>
                  <RxCross2 size={34} className="crossIcon" />
                </div>
              </div>
            </div>
            {data ? (
              <div className="clearContainer">
                <p className="clear">Clear</p>
              </div>
            ) : (
              <div className="addmain">
                <button className="addbtn">+ Add Job</button>
              </div>
            )}
          </div>
          {!data && (
            <div className="clearContainer">
              <p className="clear clearm">Clear</p>
            </div>
          )}
        </div>

        {/* job ads details */}
        <div className="jobslist">
          <div className="joblist">
            <div className="logoside">
              <div className="Company_Logo_Cont">
                <img src={logo} alt="Company_Logo" className="Company_Logo" />
              </div>
              <div className="jobdetails">
                <p className="jobRole">Frontend Developer</p>
                <div className="jobaccets">
                  <div className="compmain">
                    <FaUserGroup className="grouplogo" />
                    <p className="employee">11-50</p>
                  </div>
                  <div className="compmain">
                    <MdOutlineCurrencyRupee className="currency" />
                    <p className="employee">256789</p>
                  </div>
                  <div className="compmain">
                    <img src={flag} alt="flag" />
                    <p className="employee">Delhi</p>
                  </div>
                </div>
                <div className="typeJob">
                  <p className="type">Remote</p>
                  <p className="type">Full Time</p>
                </div>
              </div>
            </div>
            <div className="skillSide">
              <div className="jobSkills">
                <p className="jobskillreq">HTML</p>
                <p className="jobskillreq">CSS</p>
                <p className="jobskillreq">REACT</p>
                <p className="jobskillreq">JAVASCRIPT</p>
              </div>
              <div className="jobview">
                <button className="jobviewdetails">View details</button>
              </div>
            </div>
          </div>

          <div className="joblist">
            <div className="logoside">
              <div className="Company_Logo_Cont">
                <img src={logo} alt="Company_Logo" className="Company_Logo" />
              </div>
              <div className="jobdetails">
                <p className="jobRole">Frontend Developer</p>
                <div className="jobaccets">
                  <div className="compmain">
                    <FaUserGroup className="grouplogo" />
                    <p className="employee">11-50</p>
                  </div>
                  <div className="compmain">
                    <MdOutlineCurrencyRupee className="currency" />
                    <p className="employee">256789</p>
                  </div>
                  <div className="compmain">
                    <img src={flag} alt="flag" />
                    <p className="employee">Delhi</p>
                  </div>
                </div>
                <div className="typeJob">
                  <p className="type">Remote</p>
                  <p className="type">Full Time</p>
                </div>
              </div>
            </div>
            <div className="skillSide">
              <div className="jobSkills">
                <p className="jobskillreq">HTML</p>
                <p className="jobskillreq">CSS</p>
                <p className="jobskillreq">REACT</p>
                <p className="jobskillreq">JAVASCRIPT</p>
              </div>
              <div className="jobview">
                <button className="jobviewdetails">View details</button>
              </div>
            </div>
          </div>

          <div className="joblist">
            <div className="logoside">
              <div className="Company_Logo_Cont">
                <img src={logo} alt="Company_Logo" className="Company_Logo" />
              </div>
              <div className="jobdetails">
                <p className="jobRole">Frontend Developer</p>
                <div className="jobaccets">
                  <div className="compmain">
                    <FaUserGroup className="grouplogo" />
                    <p className="employee">11-50</p>
                  </div>
                  <div className="compmain">
                    <MdOutlineCurrencyRupee className="currency" />
                    <p className="employee">256789</p>
                  </div>
                  <div className="compmain">
                    <img src={flag} alt="flag" />
                    <p className="employee">Delhi</p>
                  </div>
                </div>
                <div className="typeJob">
                  <p className="type">Remote</p>
                  <p className="type">Full Time</p>
                </div>
              </div>
            </div>
            <div className="skillSide">
              <div className="jobSkills">
                <p className="jobskillreq">HTML</p>
                <p className="jobskillreq">CSS</p>
                <p className="jobskillreq">REACT</p>
                <p className="jobskillreq">JAVASCRIPT</p>
              </div>
              <div className="jobview">
                <button className="jobviewdetails">View details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
