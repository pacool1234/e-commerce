const express = require('express')
const ProductController = require('../controllers/ProductController')
const router = express.Router()

router.post('/create', ProductController.insert)
router.get('/getAll', ProductController.getAll)
router.get('/getById/:id', ProductController.getById)
router.get('/getByName/:name', ProductController.getByName)
router.get('/getByPrice', ProductController.getByPrice)
router.get('/orderByPrice', ProductController.orderByPice)

module.exports = router