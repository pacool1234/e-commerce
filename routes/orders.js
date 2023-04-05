const express = require('express')
const OrderController = require('../controllers/OrderController')
const router = express.Router()

router.post('/create', OrderController.insert)
router.get('/getAll', OrderController.getAll)

module.exports = router