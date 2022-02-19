const PaymentTypes = require('../models/PaymentTypes');
const Payment = require('../models/Payment');
const Members = require('../models/Membership')
const mongoose = require('mongoose')
exports.getPaymentTypes = async (req,res)=>{
    const paymentTypesList = await PaymentTypes.find({});
    const members = await Members.find({})
    console.log(members)
    console.log(paymentTypesList)
    res.status(200).json({
        message:"Fetched",
        paymentTypes:paymentTypesList
    })
}
exports.createPaymentTypes = async(req,res)=>{
    const paymentTypes = new PaymentTypes(req.body)
    const newtype = await paymentTypes.save()
    res.status(200).json({
        success:1,
        newtype
    })
}
exports.getPaymentType = async (req,res)=>{
    const paymentType = await PaymentTypes.findById(req.params.id);
    res.status(200).json({
        message:"Fetched",
        paymentType
    })
}

exports.createPayment= async(req,res)=>{
    try{
        const newpayment =new Payment(req.body);
        const savedPayment = await newpayment.save();
        res.status(200).json({
            success:1,
            payment:savedPayment
        })
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
    
    

}

exports.listPaymentsByMemberID=async (req,res)=>{
    try{
        const payments= await Payment.find({memberID:req.params.memberID});
        let pendingPayments=[];
        if(payments.length!=0){
            pendingPayments = payments.filter(item=>item.transactionID=='')
        }
        res.status(200).json({
            message:"Fetched",
            pendingPayments,
            payments
        })
    }catch(err){
        console.log(err)
    }
}

exports.updatePaymentWithTransactionID = async (req,res)=>{
    try{
        const tranactionID = req.body.transactionID;
            const paymentID = req.body.paymentID;
            const paymentData= await Payment.findById(paymentID);
            console.log(paymentData);
            console.log(tranactionID);
            await Payment.updateOne({_id:paymentData._id},{transactionID:tranactionID})
    
            res.status(200).json({
                message:"Update successfully",
                result:1
            })
            }catch(err){
                console.log(err);
                res.status(200).json({
                    message:"Something went wrong",
                    err:err,
                    result:-1
                })
            }
    
}