const express = require('express');
const router = express.Router();
const page = require('../controllers/page.controller');

router.post('/create',page.savePage);
router.get('/list',page.listPages);
router.get('/getbyid/:id',page.getpageById);
router.put('/update',page.updatePage);
router.delete('/delete/:id',page.deletePage);

module.exports = router