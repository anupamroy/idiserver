const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    adminName:{
        type:String,
        required:true
    },
    adminEmail:{
        type:String,
        required:true
    },
    adminPass:{
        type:String,
        required:true
    },
    adminRole:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'roles'
    },
    isActive:{
        type:String,
        enum:['Y','N']
    }
})

module.exports = mongoose.model('admin',AdminSchema);