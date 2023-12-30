const Job = require("../models/job");

exports.createJob = async (req, res) => {
  try {
    const {
      name,
      logoUrl,
      position,
      salary,
      jobType,
      remote,
      location,
      description,
      about,
      skills,
      information,
    } = req.body;
    console.log(req.body);
    let skillsArray = skills;
    console.log("type of skills", typeof skills);
    if (typeof skills === "string") {
      skillsArray = skills.split(",").map((skill) => skill.trim());
    }
    console.log("SkillsArray :-", skillsArray);
    console.log("Skills Array length :" + skillsArray.length);
    console.log("T/F", skillsArray.length === 0);
    if (
      !name ||
      !logoUrl ||
      !position ||
      !salary ||
      !jobType ||
      !remote ||
      !location ||
      !description ||
      !about ||
      skillsArray.length === 0 ||
      !information
    ) {
      console.log("problem in data");
      return res.status(401).json({
        success: false,
        message: "all fields are required",
      });
    }
    console.log("Data is fine");
    if (!["Full Time", "Part Time", "Internship"].includes(jobType)) {
      return res.status(401).json({
        success: false,
        message: "Enter Valid Job Type",
      });
    }
    console.log("JobType: " + jobType);
    if (!["Remote", "Office", "Hybrid"].includes(remote)) {
      return res.status(401).json({
        success: false,
        message: "Enter Valid value Remote/Office/Hybrid",
      });
    }
    console.log("remote: " + remote);

    const savedjob = await Job.create({
      name,
      logoUrl,
      position,
      salary,
      jobType,
      remote,
      location,
      description,
      about,
      skills: skillsArray,
      information,
    });
    console.log("saved job:- ", savedjob);
    res.status(200).json({
      success: true,
      job: savedjob,
      message: "Job saved in DB successfully",
    });
  } catch (error) {
    console.log("Error in Catch", error);
    res.status(404).json({
      success: false,
      error: error.message,
      message: "something went wrong in job creation",
    });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const {
      name,
      logoUrl,
      position,
      salary,
      jobType,
      remote,
      location,
      description,
      about,
      skills,
      information,
    } = req.body;

    const {id} = req.params;
    const recruitername = req.user.name;
    let skillsArray = skills;
    if (typeof skills === "string") {
      skillsArray = skills.split(",").map((skill) => skill.trim());
    }

    const updatedjob = await Job.findByIdAndUpdate(
      id,
      {
        name,
        logoUrl,
        position,
        salary,
        jobType,
        remote,
        location,
        description,
        about,
        information,
        $push: { skills: skillsArray },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      recruitername,
      updatedjob: updatedjob,
      message: "Job Updated in DB successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "something went wrong in job update",
      error: error.message,
    });
  }
};


exports.filterJob = async (req, res) => {
  try {
    const { newSkills, jobTitle } = req.query;
    let filterQuery = {};

    if (jobTitle) {
      filterQuery.position = { $regex: jobTitle, $options: 'i' };
    }

    if (newSkills) {
      filterQuery.skills = { $in: newSkills.split('&') };
    }

    console.log("newSkills from user: ", newSkills);
    console.log("received from user: ", filterQuery);

    const filterJob = await Job.find(filterQuery).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      filterJob: filterJob,
      message: "Job filtered based on title and newSkills successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong in job filter",
      error: error.message,
    });
  }
};

exports.detailJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    console.log(jobId);
    const jobDetail = await Job.findById({ _id: jobId });
    res.status(200).json({
      success: true,
      jobDetail: jobDetail,
      message: "job details fetched succesffuly",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "something went wrong in fetching job details",
      error: error.message,
    });
  }
};

exports.getAllJobs = async (req, res) => {
  try {
    const allJobs = await Job.find();
    res.status(200).json({
      success: true,
      allJobs: allJobs,
      message: "all jobs fetched succesffuly",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "something went wrong in fetching jobs",
      error: error.message,
    });
  }
};
