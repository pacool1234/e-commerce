const { Category } = require('../models/index')

const CategoryController = {
    async insert(req, res) {
        try {
            console.log(req.body);
           const category = await Category.create(req.body)
            res.status(201).send({message: 'Category created',category})
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