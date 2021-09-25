const Module = require('../models/Modules');
const joi = require('joi');

exports.saveModule = async(req,res)=>{
    try{
        const ModuleSchema = joi.object({
            moduleName:joi.string().required()
        })
        const moduleFields = await ModuleSchema.validateAsync(req.body);

        let module = await Module.findOne({moduleName:moduleFields.moduleName});
       
        if(!module){
            try{
                module = new Module(moduleFields);
                await module.save();
                res.status(200).json({
                    message:"Module saved",
                    module
                })
            }catch(err){
                res.status(500).json({
                    message:"Something went wrong",
                    error:err
                })
            }
            
        }else{
            res.status(400).json({
                message:"Module already exists",
               
            })
        }
        
    }catch(err){
        res.status(400).json({
            message:"Bad Request",
            err:err.message
        })
    }
}

exports.listModule = async (req,res)=>{
    console.log('aa')
    try{
        let modules = await Module.find();
        if(modules.length>0){
            return res.status(200).json({
                message:"Modules Fetched",
                modules
            })
        }else{
            modules=[];
            return res.status(200).json({
                message:"Modules Fetched",
                modules
            })
        }
        
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            err
        })
    }
}

exports.getModuleById  = async(req,res)=>{
    const id = req.params.id;
    try{
        const module = await Module.findById(id);
        if(module){
            return res.status(200).json({
                message:"Module Fetched",
                module
            })
        }else{
            return res.status(400).json({
                message:"ID doesn't exist",
                
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err
        })
    }
    
}

exports.updateModule = async (req,res)=>{
    try{
        const id= req.params.id;
        let moduleSchema = joi.object({
            moduleName:joi.string().required()
        })
        const moduleFields = await moduleSchema.validateAsync(req.body);
        const module= await Module.findById(id);
        if(!module){
            return res.status(400).json({
                message:"Moduule doesn't exist"
            })
        }else{
            try{
                await Module.findByIdAndUpdate(id,{$set:moduleFields});
                return res.status(200).json({
                    message:"Module updated successfully"
                })
            }catch(err){
                res.status(400).json({
                    message:"Something went wrong",
                    err
                })
            }
           
        }
    }catch(err){
        res.status(400).json({
            message:"Bad Request",
            err
        })
    }
}

exports.deleteModule = async(req,res)=>{
    try{
        const id = req.params.id;
        const module = await Module.findById(id);
        if(module){
            await Module.findByIdAndDelete(id)
            res.status(200).json({
                message:"Module deleted successfully"
            })
        }else{
            res.status(400).json({
                message:"Module not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err
        })
    }
}
