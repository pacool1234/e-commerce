const express = require('express')
const ProductController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middleware/authentication')
const router = express.Router()

router.post('/create', authentication, isAdmin, ProductController.insert)
router.get('/getAll', ProductController.getAll)
router.get('/getById/:id', ProductController.getById)
router.get('/getByName/:name', ProductController.getByName)
router.get('/getByPrice', ProductController.getByPrice)
router.get('/orderByPriceDesc', ProductController.orderByPriceDesc)
router.get('/orderByPriceAsc', ProductController.orderByPriceAsc)
router.put('/update/:id', authentication, isAdmin, ProductController.update)
router.delete('/delete/:id', authentication, isAdmin, ProductController.delete)

module.exports = router