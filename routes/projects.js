const express = require('express')
const router = express.Router()
const project = require('../controllers/project.controller');
router.get('/list',project.listProjects);
router.get('/getprojectbyid/:id',project.getprojectById);
router.post('/create',project.saveProject);
router.put('/update',project.updateProject);
router.delete('/delete/:id',project.deleteProject);

module.exports = router