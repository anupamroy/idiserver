const mongoose = require('mongoose');

const ModuleSchema = mongoose.Schema({
    moduleName:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('modules',ModuleSchema);