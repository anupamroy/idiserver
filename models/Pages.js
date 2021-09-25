const mongoose = require('mongoose');

const PageSchema = mongoose.Schema({
    pageName:{
        type:String,
        required:true,
    },
    pageHeaderImage:{
        type:String,
        required:false
    }

})

module.exports = mongoose.model("pages",PageSchema);