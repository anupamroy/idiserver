const Role = require('../models/Roles');
const joi = require('joi');

exports.saveRole = async(req,res)=>{
    try{
        const RoleSchema = joi.object({
            roleName:joi.string().required(),
            modules:joi.array().items(joi.string()).required()
        })
        const roleFields = await RoleSchema.validateAsync(req.body);

        let role = await Role.findOne({roleName:roleFields.roleName});
        if(!role){
            try{
                role = new Role(roleFields);
                await role.save();
                res.status(200).json({
                    message:"Role saved successfully",
                    role
                })
            }catch(err){
                res.status(500).json({
                    message:"Something went wrong",
                    error:err
                })
            }
            
        }else{
            res.status(400).json({
                message:"Role already exists",
               
            })
        }
        
    }catch(err){
        res.status(400).json({
            message:"Bad Request",
            err
        })
    }
}

exports.listRole = async (req,res)=>{
    try{
        let roles = await Role.find();
        if(roles.length>0){
            return res.status(200).json({
                message:"Roles Fetched",
                roles
            })
        }else{
            roles=[];
            return res.status(200).json({
                message:"Roles Fetched",
                roles
            })
        }
        
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            err
        })
    }
}

exports.getRoleById  = async(req,res)=>{
    const id = req.params.id;
    try{
        const role = await Role.findById(id);
        if(role){
            return res.status(200).json({
                message:"Role Fetched",
                role
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

exports.updateRole = async (req,res)=>{
    try{
        const id= req.params.id;
        const RoleSchema = joi.object({
            roleName:joi.string().required(),
            modules:joi.array().items(joi.string()).required()
        })
        const roleFields = await RoleSchema.validateAsync(req.body);
        const role= await roleFields.findById(id);
        if(!role){
            return res.status(400).json({
                message:"Role doesn't exist"
            })
        }else{
            try{
                await Role.findByIdAndUpdate(id,{$set:roleFields});
                return res.status(200).json({
                    message:"Role updated successfully"
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

exports.deleteRole = async(req,res)=>{
    try{
        const id = req.params.id;
        const role = await Role.findById(id);
        if(role){
            await Role.findByIdAndDelete(id)
            res.status(200).json({
                message:"Role deleted successfully"
            })
        }else{
            res.status(400).json({
                message:"Role not found"
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err
        })
    }
}
