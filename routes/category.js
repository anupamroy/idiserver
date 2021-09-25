const express = require('express');
const router = express.Router();
const category = require('../controllers/categories.controller');

router.post('/create',category.saveCategory);
router.get('/list',category.listCategory);
router.get('/getbyid/:id',category.getCategoryById);
router.put('/update',category.updateCategory);
router.delete('/delete/:id',category.deleteCategory);

module.exports = router