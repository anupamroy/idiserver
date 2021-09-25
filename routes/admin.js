const express = require('express');
const router = express.Router()
const adminController  = require('../controllers/admin.controller');

router.get('/',adminController.listAdmin);
router.post('/create',adminController.saveAdmin);
router.get('/:id',adminController.getAdminById);
router.put('/modify/:id',adminController.updateAdmin);
router.delete('/remove/:id',adminController.deleteAdmin);

module.exports = router
