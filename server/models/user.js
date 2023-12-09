const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required:true,
        unique:true
    },
    mobile:{
        type:'String',
        required:true
    },
    password:{
        type:'String',
        required:true
    },
})


module.exports = mongoose.model("User" , userSchema)