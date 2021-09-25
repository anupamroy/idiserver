const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    paypalTransactionID:{
        type:String,
        required:true
    },
    memberID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'members',
        required:true
    },
    payerName:{
        type:String,
        required:true
    },
    payerEmail:{
        type:String,
        required:true
    },
    transactionAmount:{
        type:String,
        required:true
    },
    transactionStatus:{
        type:String,
        required:true
    },
    currencyCode:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model('transactions',TransactionSchema)