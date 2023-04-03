const express = require('express')
const ReviewController = require('../controllers/ReviewController')
const router = express.Router()

router.post('/create', ReviewController.insert)

module.exports = router