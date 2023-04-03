const { Product } = require('../models/index')

const ProductController = {
    async insert(req, res) {
        try {
            await Product.create(req.body)
            res.status(201).send({message: 'Product created'})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = ProductController