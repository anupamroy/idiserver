const express = require('express')
const router = express.Router()
const memberController = require('../controllers/members.controller')

router.post('/register',memberController.create);
router.post("/checklogin",memberController.checkLogin)
router.post("/profile",memberController.profile);
router.get("/list",memberController.list);
router.get("/transaction/list",memberController.listoftransactions);
router.post("/change-password",memberController.changePassword);

module.exports = router