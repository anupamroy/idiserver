const mongoose = require('mongoose');

const Payment = mongoose.Schema({
    paymentType:{
        type:String,
        required:true
    },
    paymentDescription:{
        type:String,
        required:false
    },
    amount:{
        type:Number,
        required:true
    },
    paymentDate:{
        type:Date,
        required:true
    },
    memberID:{
        type:String,
        required:true
    },
    isSuccess:{
        type:String,
        enum:['Y','N'],
        default:'N',
        required:false
    },
    transactionID:{
        type:String,
        required:false
    }

});

module.exports = mongoose.model('payments',Payment)