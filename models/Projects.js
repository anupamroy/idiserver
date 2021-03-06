const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    projectName:{
        type:String,
        required:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'categories'
    },
    projectDesc:{
        type:String,
        required:true
    },
    projectImages:{
        type:String,
        required:true
    },
    authNumber:{
        type:String,
        required:false
    },
    dateStarted:{
        type:String,
        required:false
    },
    expectedDeliveryDate:{
        type:String
    },
    projectLead:{
        type:String
    },
    committeName:{
        type:String
    },
    projectLocation:{
        type:String
    },
    adderess:{
        type:String
    },
    localContactPerson:{
        type:String
    },
    localContactPhone:{
        type:String
    },
    localContactEmail:{
        type:String
    },
    budgetDoc:{
        type:String
    },
     projectPlan:{
         type:String
     },
    otherDocs:{
        type:String
    },
    projectImags:{
        type:String
    }
})

module.exports = mongoose.model('projects',ProjectSchema)