const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async(req , res) => {
    try{
        const { name , email , mobile , password } = req.body;
        if(!name || !email || !mobile || !password){
            return res.status(403).json({
                success:false,
                message:"All fields are required"
            })
        }
        const prevUser = await User.findOne({email: email});

        if(prevUser){
            return res.status(403).json({
                success:false,
                user: prevUser,
                message:"User already exists with this same email"
            })
        }

        const hashedPassword = await bcrypt.hash(password , 10);

        const savedUser = await User.create({name , email , mobile , password:hashedPassword})

        res.status(200).json({
            success:true,
            user:savedUser,
            message: "User Registered successfully"
        })

    }
    catch(error){
        console.log(error)
        res.status(404).json({
            success:false,
            error:error.message,
            message:"something went wrong in registration"
        })
    }
}


exports.login = async(req , res) => {
    try{

        const { email , password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const savedUser = await User.findOne({email});

        if(!savedUser){
            return res.status(403).json({
                success: false,
                message: "User does not exist with this email"
            })
        }

        if(await bcrypt.compare(password, savedUser.password)){

            const token = await jwt.sign(savedUser.toObject() , process.env.JWT_SECRET, { expiresIn: '2h'})

            return res.status(200).json({
                success: true,
                user: savedUser,
                token:token,
                message: "Login successful"
            })
        }


        res.status(402).json({
            success:false,
            message: "enter correct password"
        })

    } catch(error){
        console.log(error)
        res.status(404).json({
            success:false,
            error:error.message,
            message:"something went wrong during login"
        })
    }
}