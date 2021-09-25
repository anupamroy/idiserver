var express = require("express");
const router = express.Router()
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, '/uploads');
    },
    filename: function (req, file, callback) {
        console.log(file.fieldname + '-' + Date.now());
      callback(null, file.fieldname + '-' + Date.now());
    }
  });
  
  var upload = multer({ storage : storage }).array('uploaded_file',10);
  router.post('/',function(req,res){
    upload(req,res,function(err) {
        console.log(req.body.uploaded_file);
        console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

module.exports = router


