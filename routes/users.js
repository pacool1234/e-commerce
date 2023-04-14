const express = require('express')
const UserController = require('../controllers/UserController')
const router = express.Router()

router.post('/create', UserController.insert)
router.post('/login', UserController.login)
router.post('/logout', UserController.logout) //add middleware authentication

module.exports = router