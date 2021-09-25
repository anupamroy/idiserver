const mongoose= require('mongoose');

const RoleSchema = mongoose.Schema({
    roleName:{
        type:String,
        required:true
    },
    modules:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'modules'
        }
    ]
})

module.exports = mongoose.model('roles',RoleSchema);