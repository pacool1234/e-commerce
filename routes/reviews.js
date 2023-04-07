const express = require('express')
const ReviewController = require('../controllers/ReviewController')
const router = express.Router()

router.post('/create', ReviewController.insert)
router.get('/getAll', ReviewController.getAll)

module.exports = router