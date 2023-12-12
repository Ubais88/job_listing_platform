import React from "react";
import "../Styles/JobDetails.css";
import Navbar from "./Navbar";
import { BiMoney } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";

const JobDetails = () => {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
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
              <p className="time">Full Time</p>
            </div>
            <div className="rolecontainer">
              <p className="jobrole">WordPress Development </p>
              <p className="roleLocation">Bangalore | India</p>
            </div>
            <div className="rolepay">
              <div className="payiconContainer">
                <div className="payiconmain">
                  <BiMoney className="moneyIcon" />
                  <p className="stipend">Stipend</p>
                </div>
                <p className="stipendnum">Rs 25000/month</p>
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
                streamline business processes, improve productivity, and enhance
                overall efficiency.
              </p>
            </div>

            {/* about job */}
            <div className="aboutJob">
              <p className="aboutJobHeading">About the job/internship</p>
              <p className="aboutJobDetails">
                We are looking for a responsible PHP/WordPress/Laravel/Shopify
                Developer. He/She will be liable for managing services and
                therefore the interchange of knowledge between the server and
                the users. The candidate's primary focus is going to be the
                event of all server-side logic, definition, and maintenance of
                the central database and ensuring high performance and
                responsiveness to requests from the front end. Selected intern's
                day-to-day responsibilities include: 1. Work on the development
                of theme customization, liquid programming language, and
                corresponding apps 2. Implement system integrations that are
                crucial to our success 3. Contribute to the development of
                HTML5/CSS/JavaScript and standard web technologies integral to
                building seamless multi-channel experiences 4. Work on speed
                optimization and making a mobile-friendly website
              </p>
            </div>

            {/* skills required */}
            <div className="aboutskills">
              <p className="skillsHeading">Skill(s) required</p>
              <div className="skillsContainer">
                <p className="skillTag">HTML</p>
                <p className="skillTag">CSS</p>
                <p className="skillTag">JAVASCRIPT</p>
              </div>
            </div>

            {/* Additional Information */}
            <div className="additionalContainer">
              <p className="addiHeading">Additional Information</p>
              <p className="addiContent">Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (₹ 2500 per design).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
