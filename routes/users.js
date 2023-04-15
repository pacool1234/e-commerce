const express = require('express')
const UserController = require('../controllers/UserController')
const { authentication } = require('../middleware/authentication')
const router = express.Router()

router.post('/create', UserController.create)
router.get('/confirm/:email', UserController.confirm)
router.post('/login', UserController.login)
router.delete('/logout', authentication, UserController.logout)
router.get('/getorders', UserController.getAll)

module.exports = router