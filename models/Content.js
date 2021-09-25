const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
    contentType:{
        type:String,
        required:true
    },
    pageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'pages'
    },
    sectionName:{
        type:String,
        required:true
    },
    usercontentID:{
        type:String,
        required:true
    },

    contentHeading:{
        type:String,
        required:false
    },
    contentSubHeading:{
        type:String,
        required:false
    },
    contentDescription:{
        type:String,
        required:false
    },
    contentImage:{
        type:String,
        required:false
    }
})

module.exports = mongoose.model('pageContents',ContentSchema);