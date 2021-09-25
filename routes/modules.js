const express = require('express');
const router = express.Router()
const moduleController  = require('../controllers/module.controller');

router.get('/',moduleController.listModule);
router.post('/create',moduleController.saveModule);
router.get('/:id',moduleController.getModuleById);
router.put('/modify/:id',moduleController.updateModule);
router.delete('/remove/:id',moduleController.deleteModule);

module.exports = router
