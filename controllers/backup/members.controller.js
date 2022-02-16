const Membership = require('../models/Membership');
const Transaction = require('../models/Transactions');
const joi = require('joi');
const bcrypt = require('bcryptjs')

exports.create = async (req,res)=>{
    const memberSchema = joi.object({
        firstName:joi.string().required(),
        lastName:joi.string().required(),
        middleName:joi.string().allow(''),
        title:joi.string().required(),
        email:joi.string().email().required(),
        phone:joi.string().required(),
        community:joi.string().required(),
        gender:joi.string().required(),
        address:joi.string().required(),
        village:joi.string().required(),
        state:joi.string().required(),
        country:joi.string().required(),
        membershipType:joi.string().required(),
        corporationName:joi.string().allow('')
    })

    try{
        const membershipFields = await memberSchema.validateAsync(req.body)
        let member = await Membership.findOne({email:membershipFields.email})
        if(!member){
            const members = await Membership.find({});
            let totalMembers = members.length;
           const todaysDate = new Date()
            let memberID = 'IDI'+todaysDate.getMonth()+todaysDate.getFullYear()+Number(totalMembers+1);
            membershipFields.memberID=memberID;
            const salt = bcrypt.genSaltSync(10);
            const hash = await bcrypt.hash('azdeXty213',salt);
            membershipFields.password = hash
            member = new Membership(membershipFields)
            
            
            await member.save()
            res.status(200).json({
                result:1,
                message:"Data Saved",
                member
            })
        }else{
            res.status(400).json({
                result:2,
                message:"You are already an existing member. Please login"
            })
        }

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:err.details[0].message
        })
    }
}

exports.checkLogin = async (req,res)=>{
    const loginSchema = joi.object({
        email:joi.string().required(),
        password:joi.string().required()
    })

    try{
        const loginFields = await loginSchema.validateAsync(req.body)
        const member = await Membership.findOne({email:loginFields.email})
        if(member){
            const is_user = await bcrypt.compare(loginFields.password,member.password);
            if(is_user){
                const user = {
                    userName:member.firstName,
                    userID:member._id
                }
                res.status(200).json({
                    message:"Logged IN",
                    result:1,
                    user
                })
            }else{
                res.status(400).json({
                    message:"Wrong username/password",
                    result:2
                })
            }
        }else{
            res.status(400).json({
                message:"Wrong username/password",
                result:2
            })
        }
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
}

exports.profile = async(req,res)=>{
    try{
        const profile = await Membership.findById(req.body.id)
        res.status(200).json({
            message:"Profile fetched",
            profile
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
    
    
}

exports.list = async(req,res)=>{

    try{
        const members = await Membership.find()
        res.status(200).json({
            message:"Data Fetched",
            members
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
    
}

exports.listoftransactions = async(req,res) =>{
    try{
        const transactions = await Transaction.find().populate('memberID');
        res.status(200).json({
            message:"Data Fetched",
            transactions
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            err:err.message
        })
    }
}