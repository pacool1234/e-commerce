const express = require('express')
const OrderController = require('../controllers/OrderController')
const router = express.Router()

router.post('/create', OrderController.insert)

module.exports = router