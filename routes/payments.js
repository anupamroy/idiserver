const express = require('express')
const router = express.Router()
const payment = require('../controllers/payment.controller');

router.get("/paymenttypes",payment.getPaymentTypes);
router.post("/createtype",payment.createPaymentTypes);
router.post("/create",payment.createPayment);
router.get("/getpaymenttype/:id",payment.getPaymentType)
router.get("/pendingpayments/:memberID",payment.listPaymentsByMemberID)
router.post("/updatepaymentWithtransactionid",payment.updatePaymentWithTransactionID)
module.exports = router