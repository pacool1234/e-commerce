const { Category, Product, Sequelize } = require('../models/index')
const { Op } = Sequelize

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

    async getAll(req, res) {
        try {
            const categories = await Category.findAll({
                include:[{model: Product, attributes: ['name', 'price']}]
            })
            res.send(categories)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async getById(req, res) {
        try {
            const category = await Category.findByPk(req.params.id)
            if (category) {
                res.send(category)
            } else {
                res.status(404).send({message: `No category with Id: ${req.params.id}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async getByName(req, res) {
        try {
            const category = await Category.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            if (category) {
                res.send(category)
            } else {
                res.status(404).send({message: `No category with name: ${req.params.name}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}


module.exports = CategoryController