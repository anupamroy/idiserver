const Content = require('../models/Content');
const joi = require('joi')
const mongoose = require('mongoose')
exports.saveContent = async(req,res)=>{
    try{
        const contentSchema = joi.object({
            contentType:joi.string().required(),
            pageId:joi.string().required(),
            sectionName:joi.string().allow(''),
            usercontentID:joi.string().required(),
            contentHeading:joi.string().required(''),
            contentSubHeading:joi.string().allow(''),
            contentDescription:joi.string().allow(''),
            contentImage:joi.string().allow('')

        })

        const contentFields = await contentSchema.validateAsync(req.body);

        let content = await Content.findOne({contentHeading:contentFields.contentHeading});

        if(!content){
            content = new Content(contentFields)
            await content.save();
            res.status(200).json({
                message:"Content Saved Successfully"
            })
        }else{
            res.status(400).json({
                message:"Content already exist"
            })
        }
       
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}


exports.listContents = async (req,res)=>{
    try{
        const contents = await Content.find().populate('pageId')
        if(contents){
            res.status(200).json({
                message:"Data Fetched",
                contents:contents
            })
        }else{
            res.status(200).json({
                message:"Data Fetched",
                contents:[]
            })
        }
        
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
            
        })
    }
}

exports.getcontentById = async (req,res)=>{
    try{
        const id = req.params.id;

        const content = await Content.findById(id);

        if(content){
            res.status(200).json({
                message:"Content Fetched",
                content
            })
        }else{
            res.status(400).json({
                message:"Content doesn't exist"
            })
        }

    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

exports.updateContent=async (req,res)=>{
    try{
        const contentSchema = joi.object({
            contentId:joi.string().required(),
            contentType:joi.string().required(),
            pageId:joi.string().required(),
            sectionName:joi.string().allow(''),
            usercontentID:joi.string().required(),
            contentHeading:joi.string().required(''),
            contentSubHeading:joi.string().allow(''),
            contentDescription:joi.string().allow(''),
            contentImage:joi.string().allow('')
        })

        const contentFields = await contentSchema.validateAsync(req.body);

        let content = await Content.findById(contentFields.contentId);

        if(!content){
            
            res.status(400).json({
                message:"Content doesn't exist "
            })
        }else{
            await Content.findByIdAndUpdate(contentFields.contentId,{$set:contentFields});
            res.status(200).json({
                message:"Content updated successfully"
            })
        }
       
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

exports.deleteContent = async (req,res)=>{
    try{
        const id = req.params.id;
        await Content.findByIdAndDelete(id);
        res.status(200).json({
            message:"Deleted Successfully"
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

exports.getContentByPageId=async (req,res)=>{
    const pageId = req.params.pageid
    try{
        const pageContent = await Content.find({pageId:pageId});
        res.status(200).json({
            message:"Data Fetched",
            pageContent
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
    
    
    
}