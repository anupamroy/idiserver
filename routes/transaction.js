const express = require('express')
const router = express.Router()
const transaction = require('../controllers/frontend/transaction.controller');
router.post("/create",transaction.create)

module.exports = router