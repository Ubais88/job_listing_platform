const express = require('express');
const router = express.Router();


const { auth } = require('../middleware/auth')
const { register  , login } = require('../controllers/Auth');
const { createJob , updateJob, filterJob } = require('../controllers/Job');


router.post("/register" , register);
router.get("/login" , login);
router.post("/createjob" , auth , createJob);
router.put("/updatejob/:jobId" , auth , updateJob);
router.get("/filterjob" , filterJob);



router.get('/test' , auth , (req , res) => {
    res.status(200).json({
        message:"Jwt test successful",
        data: req.user
    })
})
router.use('/*' , (req , res) => {
    res.status(404).json({
        message:"Something went wrong! Please try after some time."
    })
})


module.exports = router 