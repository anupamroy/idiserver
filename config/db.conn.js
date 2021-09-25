const mongoose = require('mongoose');
const config = require('config');

const dbConn= async()=>{
    try{
        await mongoose.connect(config.get('dburl'),{useNewUrlParser:true,useUnifiedTopology:true},()=>{
            console.log(`Database Connected`)
        })
    }catch(err){
        console.log(`Some problem occured $(err)`);
    }
}

module.exports = dbConn