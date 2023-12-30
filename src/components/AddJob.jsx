import React, { useEffect, useState } from "react";
import "../Styles/AddJob.css";
import Template from "./Template";
import image from "../Assets/addjob.png";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;
import { useAuth } from "../store/auth";

const AddJob = () => {
  const { isLoggedIn } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
  }

  const [jobData, setJobData] = useState({
    name: "",
    logoUrl: "",
    position: "",
    salary: "",
    jobType: "",
    remote: "",
    location: "",
    description: "",
    about: "",
    skills: "",
    information: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(jobData);
    if (
      !jobData.name ||
      !jobData.logoUrl ||
      !jobData.position ||
      !jobData.salary ||
      !jobData.jobType ||
      !jobData.remote ||
      !jobData.location ||
      !jobData.description ||
      !jobData.about ||
      !jobData.skills ||
      !jobData.information
    ) {
      toast.error("All Fields are Required");
    }
    try {
      console.log("JobData :-", jobData);
      if (id) {
        const response = await axios.put(
          `${BASE_URL}/updatejob/${id}`,
          jobData, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log("response: ", response.data);
        const { updatedjob } = response.data;
        console.log("Jobs Details: ", updatedjob);
        toast.success(response.data.message);
        setJobData({
          name: "",
          logoUrl: "",
          position: "",
          salary: "",
          jobType: "",
          remote: "",
          location: "",
          description: "",
          about: "",
          skills: "",
          information: "",
        });
        return;
      }
      if (!id) {
        const response = await axios.post(`${BASE_URL}/createjob`, jobData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log("create response Data:- ", response.data);
        toast.success(response.data.message);
        setJobData({
          name: "",
          logoUrl: "",
          position: "",
          salary: "",
          jobType: "",
          remote: "",
          location: "",
          description: "",
          about: "",
          skills: "",
          information: "",
        });
      }
    } catch (error) {
      console.log("error occured");
      console.log(error.message);
    }
  };

  const getDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/jobdetails/${id}`);
      const { success, jobDetail } = response.data;
      console.log("saved job: ", jobDetail);
      if (success) {
        setJobData({
          name: jobDetail.name,
          logoUrl: jobDetail.logoUrl,
          position: jobDetail.position,
          salary: jobDetail.salary,
          jobType: jobDetail.jobType,
          remote: jobDetail.remote,
          location: jobDetail.location,
          description: jobDetail.description,
          about: jobDetail.about,
          skills: jobDetail.skills,
          information: jobDetail.information,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="addJobContainer">
      <form className="addJobMain" onSubmit={submitHandler}>
        <p className="addPara">Add job descriptionription</p>
        <div className="add_job">
          <p className="addJobText">Company Name </p>
          <input
            type="text"
            name="name"
            value={jobData.name}
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
            value={jobData.logoUrl}
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
            value={jobData.position}
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
            value={jobData.salary}
            className="addJobInput"
            placeholder="Enter Amount in rupees"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Job Type</p>
          <div className="addJobSelect">
            <select
              name="jobType"
              value={jobData.jobType}
              className="select"
              onChange={handleChange}
            >
              <option value="Select">Select</option>
              <option value="Full Time">Full Time</option>
              <option value="Internship">Internship</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>
        </div>

        <div className="add_job">
          <p className="addJobText">Remote/office</p>
          <div className="addJobSelect">
            <select
              name="remote"
              value={jobData.remote}
              className="select"
              onChange={handleChange}
            >
              <option value="Select">Select</option>
              <option value="Office">Office</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        <div className="add_job">
          <p className="addJobText">Location</p>
          <input
            type="text"
            name="location"
            value={jobData.location}
            className="addJobInput"
            placeholder="Enter Location"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Job descriptionription</p>
          <input
            type="text"
            name="description"
            value={jobData.description}
            className="addJobInput"
            placeholder="Type the job descriptionription"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">About Company</p>
          <input
            type="text"
            name="about"
            value={jobData.about}
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
            value={jobData.skills}
            className="addJobInput"
            placeholder="Enter the must have skills"
            onChange={handleChange}
          />
        </div>

        <div className="add_job">
          <p className="addJobText">Information</p>
          <input
            type="text"
            name="information"
            value={jobData.information}
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
