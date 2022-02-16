const mongoose = require('mongoose');

const PaymentTypes = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amounttobepaid:{
        type:Number,
        required:false
    },
    currency:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('payementTypes',PaymentTypes)