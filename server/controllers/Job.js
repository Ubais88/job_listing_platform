const job = require("../models/job");
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

    let skillsArray = skills;
    if (typeof skills === "string") {
      skillsArray = skills.split(",").map((skill) => skill.trim());
    }

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
      skillsArray.length == 0 ||
      !information
    ) {
      return res.status(401).json({
        success: false,
        message: "all fields are required",
      });
    }

    if (!["Full Time", "Part Time", "Intership"].includes(jobType)) {
      return res.status(401).json({
        success: false,
        message: "Enter Valid Job Type",
      });
    }

    if (!["Remote", "Office", "Hybrid"].includes(remote)) {
      return res.status(401).json({
        success: false,
        message: "Enter Valid value Remote/Office/Hybrid",
      });
    }

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
    res.status(200).json({
      success: true,
      job: savedjob,
      message: "Job saved in DB successfully",
    });
  } catch (error) {
    console.log(error);
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

    const jobId = req.params.jobId;
    const recruitername = req.user.name;
    let skillsArray = skills;
    if (typeof skills === "string") {
      skillsArray = skills.split(",").map((skill) => skill.trim());
    }

    const updatedjob = await Job.findByIdAndUpdate(
      jobId,
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
      job: updatedjob,
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
    const { skills, jobTitle } = req.body;
    let filterQuery = {};
    if (jobTitle) {
      filterQuery.jobTitle = jobTitle;
    }

    if (skills) {
      filterQuery.skills = { $in: skills.split("&") };
    }
    console.log(filterQuery);
    const filterJob = await Job.find(query).sort({ createdAt: -1 });

    // if (!skills && !jobTitle) {
    //   const jobs = await Job.find();
    //   return res.status(200).json({
    //     success: true,
    //     job: jobs,
    //     message: "All Job fetched successfully",
    //   });
    // }

    // if (jobTitle && !skills) {
    //   const jobs = await Job.find({ position: { $in: jobTitle } });
    //   return res.status(200).json({
    //     success: true,
    //     job: jobs,
    //     message: "Job fetched based on jobtitle successfully",
    //   });
    // }

    // let skillsArray = skills.split(",").map((skill) => skill.trim());
    // console.log(" length of akilled array ", skillsArray.length);

    // console.log(skillsArray);

    // if (!jobTitle && skills) {
    //   const filterJob = await Job.find({ skills: { $all: skillsArray } });
    //   return res.status(200).json({
    //     success: true,
    //     filterJob: filterJob,
    //     message: "Job filtered based  on skills successfully",
    //   });
    // }

    // const filterJob = await Job.find({
    //   skills: { $all: skillsArray },
    //   position: { $all: jobTitle },
    // });

    return res.status(200).json({
      success: true,
      filterJob: filterJob,
      message: "Job filtered based on title and skills successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: "something went wrong in job filter",
      error: error.message,
    });
  }
};

exports.detailJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    console.log(jobId);
    const jobDetails = await Job.findById({ _id: jobId });
    res.status(200).json({
      success: true,
      jobDetails: jobDetails,
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
