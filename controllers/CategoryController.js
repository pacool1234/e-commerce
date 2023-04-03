const { Category } = require('../models/index')

const CategoryController = {
    async insert(req, res) {
        try {
            await Category.create(req.body)
            res.status(201).send({message: 'Category created'})
        } catch (error) {
        console.error(error)
        res.status(500).send(error)
        }
    }, 
    async getAll(req,res) {
        const categories = await Category.findAll()
        res.send(categories)
}
}


module.exports = CategoryController