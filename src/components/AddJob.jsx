import React, { useState } from "react";
import "../Styles/AddJob.css";
import Template from "./Template";
import image from "../Assets/addjob.png";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const AddJob = () => {
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    CompName: "",
    logoUrl: "",
    position: "",
    salary: "",
    jobType: "",
    remoteorOffice: "",
    location: "",
    desc: "",
    about: "",
    skills: "",
    addiInfo: "",
  });

  console.log(jobData);
  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      !jobData.name           ||
      !jobData.logoUrl        ||
      !jobData.position       ||
      !jobData.salary         ||
      !jobData.jobType        ||   
      !jobData.remoteorOffice ||
      !jobData.location       ||
      !jobData.desc           ||
      !jobData.about          ||
      !jobData.skills         ||
      !jobData.addiInfo
    ) {
      toast.error("All Fields are Required");
    }
    try {
      const response = await axios.post(`${BASE_URL}/createjob`, jobData);
      console.log(response.data)

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="addJobContainer">
      <form className="addJobMain" onSubmit={submitHandler}>
        <p className="addPara">Add job description</p>
        <div className="add_job">
          <p className="addJobText">Company Name </p>
          <input
            type="text"
            name="name"
            className="addJobInput"
            placeholder="Enter your company name here"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Add logo URL </p>
          <input
            type="text"
            name="logoUrl"
            className="addJobInput"
            placeholder="Enter the link"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Job position </p>
          <input
            type="text"
            name="position"
            className="addJobInput"
            placeholder="Enter job position"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Monthly salary </p>
          <input
            type="text"
            name="salary"
            className="addJobInput"
            placeholder="Enter Amount in rupees"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Job Type</p>
          <div className="addJobSelect">
            <select name="jobType" className="select" onChange={handleChange}>
              <option value="Full Time">Full Time</option>
              <option value="Internship">Internship</option>
              <option value="Part Time">Part-Time</option>
            </select>
          </div>
        </div>

        <div className="add_job">
          <p className="addJobText">Remote/office</p>
          <div className="addJobSelect">
            <select
              name="remoteorOffice"
              className="select"
              onChange={handleChange}
            >
              <option value="Office">Office</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
        </div>

        <div className="add_job">
          <p className="addJobText">Location</p>
          <input
            type="text"
            name="location"
            className="addJobInput"
            placeholder="Enter Location"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Job Description</p>
          <input
            type="text"
            name="desc"
            className="addJobInput"
            placeholder="Type the job description"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">About Company</p>
          <input
            type="text"
            name="about"
            className="addJobInput"
            placeholder="Type about your company"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Skills Required</p>
          <input
            type="text"
            name="skills"
            className="addJobInput"
            placeholder="Enter the must have skills"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Information</p>
          <input
            type="text"
            name="addInfo"
            className="addJobInput"
            placeholder="Enter the additional information"
            onChange={handleChange}
          />
        </div>

        <div className="btnHolder">
          <button className="cancelbtn" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="addJobBtn">+ Add Job</button>
        </div>
      </form>

      <div className="Template">
        <Template heading={"Recruiter add job details here"} img={image} />
      </div>
    </div>
  );
};

export default AddJob;
