const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.post('/create', UserController.insert)

module.exports = router