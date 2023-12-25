import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../Styles/Home.css";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import logo from "../Assets/companyLogo.png";
import flag from "../Assets/Flag.png";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const { isLoggedIn, LogoutUser } = useAuth();
  const [allJobs , setAllJobs] = useState([]);

  const clickHandler = (e) => {
    console.log(e.target.value);
    const value = skills.filter((item) => item == e.target.value)
    if(value.length){
      console.log("value: " + value);
      return
    }
    setSkills([...skills, e.target.value]);
  };

  const clearSkills = () => {
    setSkills([]);
  };
  const removeSkill = (index) => {
    console.log(index);
    const newArray = skills.slice(0, index).concat(skills.slice(index + 1));
    setSkills(newArray);
  };

  const loadJobs = async() => {
    try{
      console.log("Base URL: " ,BASE_URL)
      const response = await axios.get(`${BASE_URL}/getalljobs`);
      // const { success, message } = response.data;
      const alldbJobs = response.data.allJobs;
      setAllJobs(alldbJobs)
      console.log(allJobs)
    }
    catch(error){
      console.log(error.message)
    }
  }

  useEffect(() => {
    loadJobs()
  }, [])


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
              <select className="select" onChange={clickHandler}>
                <option value="default" selected>
                  Skills
                </option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JAVASCRIPT">JAVASCRIPT</option>
                <option value="REACT">REACT</option>
              </select>
              <div className="selected">
                {skills.map((skills, index) => (
                  <div className="skills" key={index}>
                    <p className="skillP">{skills}</p>
                    <RxCross2
                      size={34}
                      className="crossIcon"
                      onClick={() => removeSkill(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {!isLoggedIn ? (
              <div className="clearContainer">
                <p
                  className="clear"
                  onClick={clearSkills}
                  style={{ display: skills.length < 1 ? "none" : "block" }}
                >
                  Clear
                </p>
              </div>
            ) : (
              <div className="addmain">
                <button className="addbtn" onClick={() => navigate("/addjob")}>
                  + Add Job
                </button>
              </div>
            )}
          </div>
          {isLoggedIn && (
            <div className="clearContainer">
              <p
                className="clear clearm"
                onClick={clearSkills}
                style={{ display: skills.length < 1 ? "none" : "block" }}
              >
                Clear
              </p>
            </div>
          )}
        </div>

        {/* job ads details */}
        <div className="jobslist">
          {/* <div className="joblist">
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
                <button
                  className="jobviewdetails"
                  onClick={() => navigate("/jobdetail")}
                >
                  View details
                </button>
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
          </div> */}

          {
            allJobs.length > 0 && (
              allJobs.map((job) => (
                <div className="joblist" key={job._id}>
            <div className="logoside">
              <div className="Company_Logo_Cont">
                <img src={job.logoUrl} alt="Company_Logo" className="Company_Logo" />
              </div>
              <div className="jobdetails">
                <p className="jobRole">{job.position}</p>
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
                    <p className="employee">{job.location}</p>
                  </div>
                </div>
                <div className="typeJob">
                  <p className="type">{job.jobType}</p>
                  {/* <p className="type">Full Time</p> */}
                </div>
              </div>
            </div>
            <div className="skillSide">
              <div className="jobSkills">
              {
                job.skills.map((skill, index) => (
                <p className="jobskillreq" key={index}>{skill}</p>
                ))
              }
              </div>

              <div className="jobview">
                <button
                  className="jobviewdetails"
                  onClick={() => navigate("/jobdetail")}
                >
                  View details
                </button>
              </div>
            </div>
          </div>
              ))
            )
          }


        </div>

      </div>

    </div>
  );
};

export default Home;
