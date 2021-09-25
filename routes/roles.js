const express = require('express');
const router = express.Router()
const roleController  = require('../controllers/roles.controller');

router.get('/',roleController.listRole);
router.post('/create',roleController.saveRole);
router.get('/:id',roleController.getRoleById);
router.put('/modify/:id',roleController.updateRole);
router.delete('/remove/:id',roleController.deleteRole);

module.exports = router
