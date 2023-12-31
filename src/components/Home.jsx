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
import toast from "react-hot-toast";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [filterSkills, setFilterskills] = useState([]);
  const newSkills = filterSkills.join(", ");
  const { isLoggedIn } = useAuth();
  const [allJobs, setAllJobs] = useState([]);

  const clickHandler = (e) => {
    if (isLoggedIn) {
      const value = filterSkills.filter((item) => item == e.target.value);
      if (value.length) {
        return;
      }
      setFilterskills([...filterSkills, e.target.value]);
    }
    else{
      toast.error("Please Login First")
    }
  };

  const clearSkills = () => {
    setFilterskills([]);
  };
  const removeSkill = (index) => {
    console.log(index);
    const newArray = filterSkills
      .slice(0, index)
      .concat(filterSkills.slice(index + 1));
    setFilterskills(newArray);
  };

  const handleTitleChange = (e) => {
    setJobTitle(e.target.value);
    filterJobs();
  }; 

  const filterJobs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/filterjob`, {
        params: {
          newSkills: newSkills,
          jobTitle: jobTitle,
        },
      });
      const { success, filterJob } = response.data;
      if (success) {
        setAllJobs(filterJob);
      } else {
        setAllJobs([]);
      }
      console.log("Filter Jobs: ", filterJob);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadJobs = async () => {
    try {
      console.log("Base url: ",BASE_URL)
      const response = await axios.get(`${BASE_URL}/getalljobs`);
      const { success, allJobs } = response.data;
      if (success) {
        setAllJobs(allJobs);
      } else {
        setAllJobs([]);
      }
      console.log("Filter Jobs: ", allJobs);
    } catch (error) {
      
      console.log(error.message);
    }
  };

  useEffect(() => {
    // console.log("skills length: ",skills.length)
    if (filterSkills.length == 0) {
      loadJobs();
    }

    if (filterSkills.length !== 0) {
      console.log("filterSkills : ", filterSkills);
      filterJobs();
    }
  }, [filterSkills]);


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
              value={jobTitle}
              onChange={handleTitleChange}
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
                <option value="JS">JAVASCRIPT</option>
                <option value="React">REACT</option>
              </select>
              <div className="selected">
                {filterSkills.map((skill, index) => (
                  <div className="skills" key={index}>
                    <p className="skillP">{skill}</p>
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
                  style={{
                    display: filterSkills.length < 1 ? "none" : "block",
                  }}
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
                style={{ display: filterSkills.length < 1 ? "none" : "block" }}
              >
                Clear
              </p>
            </div>
          )}
        </div>

        {/* job ads details */}
        <div className="jobslist">
          {allJobs.length > 0 ? (
            allJobs.map((job) => (
              <div className="joblist" key={job._id}>
                <div className="logoside">
                  <div className="Company_Logo_Cont">
                    <img
                      src={job.logoUrl}
                      alt="Company_Logo"
                      className="Company_Logo"
                    />
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
                    {job.skills.slice(0, 4).map((skill, index) => (
                      <p className="jobskillreq" key={index}>
                        {skill}
                      </p>
                    ))}
                  </div>

                  <div className="jobview">
                    <button
                      className="jobviewdetails"
                      onClick={() => {
                        navigate(`/jobdetail/${job._id}`);
                      }}
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 style={{ color: "#ed5353" }}>NO JOB PRESENT WITH THIS SKILL</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
