const Job = require('../models/job');

exports.job = async(req , res) => {
    try{
        const { name , logoUrl  , position  , salary , jobType , remote , location , description , about , skills , information } = req.body;

        if( !name || !logoUrl || !position || !salary || !jobType || !remote || !location || !description || !about || !skills || !information ) {
            return res.status(401).json({
                success:false,
                message:'all fields are required'
            })
        }

        if(!['Full Time' , 'Part Time' , 'Intership' ].includes(jobType)){
            return res.status(401).json({
                success:false,
                message:'Enter Valid Job Type'
            })
        }

        if(!['Remote' , 'Office' , 'Hybrid'].includes(remote)){
            return res.status(401).json({
                success:false,
                message:'Enter Valid value Remote/Office/Hybrid'
            })
        }
        

        const savedjob = await Job.create({
            name , logoUrl , position , salary , jobType , remote , location , description , about , skills , information
        })
        res.status(200).json({
            success: true,
            job : savedjob,
            message : "Job saved in DB successfully"
        })

    }
    catch(error){
        console.log(error)
        res.status(404).json({
            success:false,
            error:error.message,
            message:"something went wrong in job creation"
        })
    }
}