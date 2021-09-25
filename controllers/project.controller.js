const Project = require('../models/Projects');
const joi = require('joi')
exports.saveProject = async(req,res)=>{
    try{
        const projectSchema = joi.object({
            projectName:joi.string().required(),
            categoryId:joi.string().required(),
            projectDesc:joi.string().required(),
            projectImages:joi.string().required(),
            authNumber:joi.string().allow(''),
            dateStarted:joi.string().allow(''),
            expectedDeliveryDate:joi.string().allow(''),
            projectLead:joi.string().allow(''),
            committeName:joi.string().allow(''),
            projectLocation:joi.string().allow(''),
            address:joi.string().allow(''),
            localContactPerson:joi.string().allow(''),
            localContactPhone:joi.string().allow(''),
            localContactEmail:joi.string().allow(''),
            budgetDoc:joi.string().allow(''),
            projectPlan:joi.string().allow(''),
            otherDocs:joi.string().allow(''),
            projectImags:joi.string().allow('')
        })

        const projectFields = await projectSchema.validateAsync(req.body);

        let project = await Project.findOne({projectName:projectFields.projectName});

        if(!project){
            project = new Project(projectFields)
            await project.save();
            res.status(200).json({
                message:"Project Saved Successfully"
            })
        }else{
            res.status(400).json({
                message:"Project already exist"
            })
        }
       
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}


exports.listProjects = async (req,res)=>{
    try{
        const projects = await Project.find()
        if(projects){
            res.status(200).json({
                message:"Data Fetched",
                projects:projects
            })
        }else{
            res.status(200).json({
                message:"Data Fetched",
                projects:[]
            })
        }
        
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
            
        })
    }
}

exports.getprojectById = async (req,res)=>{
    try{
        const id = req.params.id;

        const project = await Project.findById(id).populate('categoryId');

        if(project){
            res.status(200).json({
                message:"Project Fetched",
                project
            })
        }else{
            res.status(400).json({
                message:"Project doesn't exist"
            })
        }

    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

exports.updateProject=async (req,res)=>{
    try{
        const projectSchema = joi.object({
            projectId:joi.string().required(),
            projectName:joi.string().required(),
            categoryId:joi.string().required(),
            projectDesc:joi.string().required(),
            projectImages:joi.string().required(),
            authNumber:joi.string().allow(''),
            dateStarted:joi.string().allow(''),
            expectedDeliveryDate:joi.string().allow(''),
            projectLead:joi.string().allow(''),
            committeName:joi.string().allow(''),
            projectLocation:joi.string().allow(''),
            adderess:joi.string().allow(''),
            localContactPerson:joi.string().allow(''),
            localContactPhone:joi.string().allow(''),
            localContactEmail:joi.string().allow(''),
            budgetDoc:joi.string().allow(''),
            projectPlan:joi.string().allow(''),
            otherDocs:joi.string().allow(''),
            projectImags:joi.string().allow('')
        })

        const projectFields = await projectSchema.validateAsync(req.body);

        let project = await Project.findById(projectFields.projectId);

        if(!project){
            
            res.status(400).json({
                message:"Project doesn't exist "
            })
        }else{
            await Project.findByIdAndUpdate(projectFields.projectId,{$set:projectFields});
            res.status(200).json({
                message:"Project updated successfully"
            })
        }
       
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

exports.deleteProject = async (req,res)=>{
    try{
        const id = req.params.id;
        await Project.findByIdAndDelete(id);
        res.status(200).json({
            message:"Deleted Successfully"
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}