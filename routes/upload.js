const express = require('express');
const router = express.Router()
const multer = require('multer')

const upload = multer({dest:'uploads/'})

router.post('/',upload.single('uploaded_file'),(req,res)=>{
    try{
        res.status(200).json({
            file:req.file
        })
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})
router.post('/multiple',upload.array('uploaded_file',10),(req,res)=>{
    try{
        //console.log(res)
        console.log(req.files)
        res.status(200).json({
            file:req.file
        })
    }catch(err){
        res.status(500).json({
            error:err.message
        })
    }
})
module.exports = router
