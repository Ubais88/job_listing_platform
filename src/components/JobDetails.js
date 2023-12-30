import React, { useEffect, useState } from "react";
import "../Styles/JobDetails.css";
import Navbar from "./Navbar";
import { BiMoney } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../store/auth";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { isLoggedIn, setJobDetail } = useAuth();
  const [jobData, setJobData] = useState([]);
  const [skills, setSkills] = useState([]);

  const getJobDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/jobdetails/${id}`);
      console.log("response: ", response.data);
      const { success, jobDetail } = response.data;
      if (success) {
        console.log("Jobs Details: ", jobDetail);
        setJobData(jobDetail);
        setSkills(jobDetail.skills);
        console.log("Jobs Data: ", jobData);
        // console.log(jobData.skills)
      } else {
        setJobData({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobDetails();
  }, []);

  const editHandler = () => {
    navigate(`/addjob/${jobData._id}`);
  }
 
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>

      {jobData && (
        <div className="jobDetailContainer">
          <div className="jobhead">
            <p className="jobheading">
              WordPress Development work from home job/internship at Adyaka
              Infosec Private Limited
            </p>
          </div>
          <div className="detailsContainer">
            <div className="deatailsmain">
              <div className="jobtime">
                <p className="time">1w ago</p>
                <p className="time">.</p>
                <p className="time">{jobData.jobType}</p>
                {isLoggedIn && (
                  <div className="comp_Logo_grp">
                    <img
                      src={jobData.logoUrl}
                      alt="logo"
                      className="comp_Logo"
                    />
                    <p className="comp_Name">{jobData.name}</p>
                  </div>
                )}
              </div>
              <div className="pos_editjob">
                <div className="rolecontainer">
                  <p className="jobrole">{jobData.position}</p>
                  <p className="roleLocation">{jobData.location}</p>
                </div>
                {
                  isLoggedIn && <button className="editjob_btn" onClick={editHandler}>Edit Job</button>
                }
              </div>
              <div className="rolepay">
                <div className="payiconContainer">
                  <div className="payiconmain">
                    <BiMoney className="moneyIcon" />
                    <p className="stipend">Stipend</p>
                  </div>
                  <p className="stipendnum">{jobData.salary}</p>
                </div>
                <div className="calendericonContainer">
                  <div className="payiconmain">
                    <FaCalendar className="calenderIcon" />
                    <p className="duratn">Duration</p>
                  </div>
                  <p className="durationMonth">6 months</p>
                </div>
              </div>

              {/* about company */}
              <div className="aboutCompany">
                <p className="AboutcompHeading">About company</p>
                <p className="aboutCompDetail">
                  We provide technology-based services to help businesses and
                  organizations achieve their goals. We offer a wide range of
                  services, including software development, system integration,
                  network and security services, cloud computing, and data
                  analytics. Our primary focus is on leveraging technology to
                  streamline business processes, improve productivity, and
                  enhance overall efficiency.
                </p>
              </div>

              {/* about job */}
              <div className="aboutJob">
                <p className="aboutJobHeading">About the job/internship</p>
                <p className="aboutJobDetails">{jobData.about}</p>
              </div>

              {/* skills required */}
              <div className="aboutskills">
                <p className="skillsHeading">Skill(s) required</p>
                <div className="skillsContainer">
                  {skills.map((skill, index) => (
                    <p className="skillTag" key={index}>
                      {skill}
                    </p>
                  ))}
                </div>
              </div>

              {/* Additional Information */}
              <div className="additionalContainer">
                <p className="addiHeading">Additional Information</p>
                <p className="addiContent">{jobData.information}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
