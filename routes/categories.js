const express = require('express')
const CategoryController = require('../controllers/CategoryController')
const router = express.Router()

router.post('/create', CategoryController.insert)
router.get('/getAll', CategoryController.getAll)
router.get('/getById/:id', CategoryController.getById)
router.get('/getByName/:name', CategoryController.getByName)


module.exports = router