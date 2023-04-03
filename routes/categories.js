const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const router = express.Router()

router.post('/create', CategoryController.insert)
router.get('/getAll', CategoryController.getAll)


module.exports = router