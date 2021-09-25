const Admin = require('../models/Admin');
const joi = require('joi');
const bcrypt = require('bcryptjs');
exports.saveAdmin = async(req,res)=>{
    try{
        const AdminSchema = joi.object({
            adminName:joi.string().required(),
            adminEmail:joi.string().email().required(),
            adminPass:joi.string().required(),
            adminRole:joi.string().required(),
            isActive:joi.string().allow('')
        })
        const adminFields = await AdminSchema.validateAsync(req.body);
        const salt = await bcrypt.genSalt(10);
        adminFields.adminPass = await bcrypt.hash(adminFields.adminPass,salt);

        let admin = await Admin.findOne({adminEmail:adminFields.adminEmail});
        if(!admin){
            try{
                admin = new Admin(adminFields);
                await admin.save();
                res.status(200).json({
                    message:"Admin saved successfully",
                    admin
                })
            }catch(err){
                res.status(500).json({
                    message:"Something went wrong",
                    error:err
                })
            }
            
        }
        
    }catch(err){
        res.status(400).json({
            message:"Bad Request",
            err:err.message
        })
    }
}

exports.listAdmin = async (req,res)=>{
    try{
        let admins = await Admin.find();
        if(admins.length>0){
            return res.status(200).json({
                message:"Admin Fetched",
                admins
            })
        }else{
            admins=[];
            return res.status(200).json({
                message:"Admins Fetched",
                admins
            })
        }
        
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            err
        })
    }
}

exports.getAdminById  = async(req,res)=>{
    const id = req.params.id;
    try{
        const admin = await Admin.findById(id);
        if(admin){
            return res.status(200).json({
                message:"Admin Fetched",
                admin
            })
        }else{
            return res.status(400).json({
                message:"ID doesn't exist",
                
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
    
}

exports.updateAdmin = async (req,res)=>{
    try{
        const id= req.params.id;
        const AdminSchema = joi.object({
            adminName:joi.string().required(),
            adminEmail:joi.email().required(),
            adminPass:joi.string().required(),
            adminRole:joi.string().required(),
            isActive:joi.string().allow('')
        })
        const adminFields = await AdminSchema.validateAsync(req.body);
        const admin= await adminFields.findById(id);
        if(!role){
            return res.status(400).json({
                message:"Admin doesn't exist"
            })
        }else{
            try{
                await Admin.findByIdAndUpdate(id,{$set:adminFields});
                return res.status(200).json({
                    message:"Admin updated successfully"
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

exports.deleteAdmin = async(req,res)=>{
    try{
        const id = req.params.id;
        const admin = await Role.findById(id);
        if(role){
            await Admin.findByIdAndDelete(id)
            res.status(200).json({
                message:"Admin deleted successfully"
            })
        }else{
            res.status(400).json({
                message:"Admin not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err
        })
    }
}
