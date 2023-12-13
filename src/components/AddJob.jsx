import React from "react";
import "../Styles/AddJob.css";
import Template from "./Template";
import image from "../Assets/addjob.png"

const AddJob = () => {
  return (
    <div className="addJobContainer">
      <div className="addJobMain">
        <p className="addPara">Add job description</p>
        <div className="add_job">
            <p className="addJobText">Company Name </p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Enter your company name here" />
        </div>

        <div className="add_job">
            <p className="addJobText">Add logo URL </p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Enter the link" />
        </div>

        <div className="add_job">
            <p className="addJobText">Job position </p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Enter job position"/>
        </div>

        <div className="add_job">
            <p className="addJobText">Monthly salary </p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Enter Amount in rupees" />
        </div>

        <div className="add_job">
            <p className="addJobText">Job Type</p>
            <select name="" id="" className="select">
                <option value="option1">Full Time</option>
                <option value="option2">Remote</option>
              </select>
        </div>

        <div className="add_job">
            <p className="addJobText">Remote/office</p>
            <select name="" id="" className="select">
                <option value="option1">Office</option>
                <option value="option2">Remote</option>
              </select>
        </div>

        <div className="add_job">
            <p className="addJobText">Location</p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Enter Location"/>
        </div>

        <div className="add_job">
            <p className="addJobText">Job Description</p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Type the job description" />
        </div>

        <div className="add_job">
            <p className="addJobText">About Company</p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Type about your company"/>
        </div>

        <div className="add_job">
            <p className="addJobText">Skills Required</p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Enter the must have skills"/>
        </div>
        
        <div className="add_job">
            <p className="addJobText">Information</p>
            <input type="text" name="" id="" className="addJobInput" placeholder="Enter the additional information"/>
        </div>

        <div className="btnHolder">
          <button className="cancelbtn">Cancel</button>
          <button className="addJobBtn">+ Add Job</button>
        </div>
      </div>
      <div className="Template">
        <Template heading={'Recruiter add job details here'} img={image}/>
      </div>
    </div>
  );
};

export default AddJob;
