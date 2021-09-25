const express = require('express')
const router = express.Router()
const paypal = require('../controllers/frontend/paypal.controller');

router.post("/checkout",paypal.checkoutwithapi);

module.exports = router
