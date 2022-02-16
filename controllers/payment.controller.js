const PaymentTypes = require('../models/PaymentTypes');
const Payment = require('../models/Payment');
const Members = require('../models/Membership')
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