const express = require('express');
const router = express.Router();


const { auth } = require('../middleware/auth')
const { register  , login } = require('../controllers/Auth');
const { createJob , updateJob, filterJob, detailJob } = require('../controllers/Job');


router.post("/register" , register);
router.post("/login" , login);
router.post("/createjob" , auth , createJob);
router.put("/updatejob/:jobId" , auth , updateJob);
router.get("/filterjob" , filterJob);
router.get('/jobdetails/:jobId' , detailJob)
// router.post('/me' , verifyAuth)


router.post('/test' , auth , (req , res) => {
    res.status(200).json({
        message:"Jwt test successful",
        user: req.user
    })
})
router.use('/*' , (req , res) => {
    res.status(404).json({
        message:"Something went wrong! Please try after some time."
    })
})


module.exports = router 