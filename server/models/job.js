const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    name:{
        type:"String",
        required: true
    },
    logoUrl:{
        type:"String",
        required: true
    },
    position:{
        type:String,
        required: true
    },
    salary:{
        type:"String",
        required: true
    },
    jobType:{
        type:"String",
        required: true,
        enum:['Full Time' , 'Part Time' , 'Intership' ] 
    },
    remote:{
        type:"String",
        required: true,
        enum:['Remote' , 'Office' , 'Hybrid']
    },
    location:{
        type:"String",
        required: true,
    },
    description:{
        type:"String",
        required: true
    },
    about:{
        type:"String",
        required: true
    },
    skills:[{
        type:"String",
        required: true
    }],
    information:{
        type:"String",
        required: true
    }

})

module.exports = mongoose.model("Job" , jobSchema)