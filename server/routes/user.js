const express = require('express');


const router = express.Router();

const { auth } = require('../middleware/auth')
const { register  , login } = require('../controllers/Auth');


router.post("/register" , register);
router.get("/login" , login);

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