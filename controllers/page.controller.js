const Pages = require('../models/Pages');
const joi = require('joi')
exports.savePage = async(req,res)=>{
    try{
        const pageSchema = joi.object({
            pageName:joi.string().required(),
            pageHeaderImage:joi.string().allow('')
        })

        const pageFields = await pageSchema.validateAsync(req.body);

        let page = await Pages.findOne({pageName:pageFields.pageName});

        if(!page){
            page = new Pages(pageFields)
            await page.save();
            res.status(200).json({
                message:"Page Saved Successfully"
            })
        }else{
            res.status(400).json({
                message:"Page already exist"
            })
        }
       
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}


exports.listPages = async (req,res)=>{
    try{
        const pages = await Pages.find()
        if(pages){
            res.status(200).json({
                message:"Data Fetched",
                pages:pages
            })
        }else{
            res.status(200).json({
                message:"Data Fetched",
                pages:[]
            })
        }
        
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
            
        })
    }
}

exports.getpageById = async (req,res)=>{
    try{
        const id = req.params.id;

        const page = await Pages.findById(id);

        if(page){
            res.status(200).json({
                message:"Page Fetched",
                page
            })
        }else{
            res.status(400).json({
                message:"Page doesn't exist"
            })
        }

    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

exports.updatePage=async (req,res)=>{
    try{
        const pageSchema = joi.object({
          pageId:joi.string().required(),
          pageName:joi.string().required(),
          pageHeaderImage:joi.string().allow('')
        })

        const pageFields = await pageSchema.validateAsync(req.body);

        let page = await Pages.findById(pageFields.pageId);

        if(!page){
            
            res.status(400).json({
                message:"Page doesn't exist "
            })
        }else{
            await Pages.findByIdAndUpdate(pageFields.pageId,{$set:pageFields});
            res.status(200).json({
                message:"Page updated successfully"
            })
        }
       
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

exports.deletePage = async (req,res)=>{
    try{
        const id = req.params.id;
        await Pages.findByIdAndDelete(id);
        res.status(200).json({
            message:"Deleted Successfully"
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}