const { Product, Category, Sequelize } = require('../models/index')
const { Op } = Sequelize

const ProductController = {
    async insert(req, res) {
        try {
            await Product.create(req.body)
            res.status(201).send({message: 'Product created'})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async getAll(req, res) {
        try {
            const products = await Product.findAll({
                include:[{model: Category, attributes: ['name']}]
            })
            res.send(products)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },
    
    async getById(req, res) {
        try {
            const product = await Product.findByPk(req.params.id, {
                include: [{model: Category, attributes: ['name']}]
            })
            if (product) {
                res.send(product)
            } else {
                res.status(404).send({message: `No product with Id: ${req.params.id}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    async getByName(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },
                include: [{model: Category, attributes: ['name']}]
            })
            if (product) {
                res.send(product)
            } else {
                res.status(404).send({message: `No product with name: ${req.params.name}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    async getByPrice(req, res) {
        try {
            const product = await Product.findOne({
                where: {
                    price: {
                        [Op.eq]: req.params.price
                    }
                },
                include: [{model: Category, attributes: ['name']}]
            })
            console.log(req.params.price) // WHY 1 DECIMAL OK, BUT NOT 2???
            if (product) {
                res.send(product)
            } else {
                res.status(404).send({message: `No product with price: ${req.params.price}`})
            }
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = ProductController