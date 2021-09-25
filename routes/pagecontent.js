const express = require('express');
const router = express.Router();
const content = require('../controllers/content.controller');

router.post('/create',content.saveContent);
router.get('/list',content.listContents);
router.get('/listcontent/:pageid',content.getContentByPageId);
router.get('/getbyid/:id',content.getcontentById);
router.put('/update',content.updateContent);
router.delete('/delete/:id',content.deleteContent);

module.exports = router