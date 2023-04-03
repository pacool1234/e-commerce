const express = require('express')
const ProductController = require('../controllers/ProductController')
const router = express.Router()

router.post('/create', ProductController.insert)

module.exports = router