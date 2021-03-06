const Transaction = require('../../models/Transactions');
const Member = require('../../models/Membership');
const sendgrid = require('@sendgrid/mail')
exports.create = async (req,res) =>{
    try{
        const member = await Member.findById(req.body.memberID);
        const transaction = new Transaction(req.body);
        await transaction.save();
        console.log("Transaction "+transaction._id)
        res.status(200).json({
            message:"Transaction saved successfully",
            result:1,
            transaction:transaction
        })
    }catch(err){
        res.status(500).json({
            message:"Somthing went wrong",
            err:err.message
        })
    }
}