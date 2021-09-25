const Admin = require('../models/Admin');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
exports.login=async (req,res)=>{
    const loginSchema = joi.object({
        email:joi.string().required(),
        password:joi.string().required()
    })

    try{
        const loginFields = await loginSchema.validateAsync(req.body);

        let admin = await Admin.findOne({adminEmail:loginFields.email});
        if(admin){
            const isMatch = await bcrypt.compare(loginFields.password,admin.adminPass);
            if(isMatch){
                const payload={
                    admin:{
                        id:admin._id,
                        name:admin.adminName
                    }
                }

                const token = await jwt.sign(payload,config.get('secretKey'),{expiresIn:7200});

                res.status(200).json({
                    message:"Logged In",
                    admin:payload,
                    token:token
                })
            }else{
                res.status(400).json({
                    message:"Wrong Username/Password"
                })
            }
        }else{
            res.status(400).json({
                message:"Wrong Username/Password"
            })
        }
        
    }catch(err){
        
            res.status(500).json({
                message:"Something went wrong",
                error:err.message
            })
    
    }
}