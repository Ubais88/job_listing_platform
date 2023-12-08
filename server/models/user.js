const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required:true
    },
    mobile:{
        type:'Number',
        required:true
    },
    password:{
        type:'String',
        minlength:6,
        required:true
    },
})


module.exports = mongoose.model("User" , userSchema)