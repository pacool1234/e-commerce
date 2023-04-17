const { Product, Category, Review, Sequelize } = require('../models/index')
const { Op } = Sequelize

const ProductController = {
  async insert(req, res) {
    try {
      await Product.create(req.body)
      res.status(201).send({ message: 'Product created' })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async getAll(req, res) {
    try {
      const products = await Product.findAll({
        include: [
            { model: Category, attributes: ['name'] },
            { model: Review, attributes: ['title', 'content'] }
        ]
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
        include: [
            { model: Category, attributes: ['name'] },
            { model: Review, attributes: ['title', 'content'] }
        ]
      })
      if (product) {
        res.send(product)
      } else {
        res.status(404).send({ message: `No product with Id: ${req.params.id}` })
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
        include: [{ model: Category, attributes: ['name'] }]
      })
      if (product) {
        res.send(product)
      } else {
        res.status(404).send({ message: `No product with name: ${req.params.name}` })
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
            [Op.between]: [req.query.min, req.query.max]
          }
        },
        include: [{ model: Category, attributes: ['name'] }]
      })
      if (product) {
        res.send(product)
      } else {
        res.status(404).send({
          message: `No product with price between ${req.query.min} and ${req.query.max}` })
      }
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async orderByPriceDesc(req, res) {
    try {
      const products = await Product.findAll({
        include: [{ model: Category, attributes: ['name'] }],
        order: [['price', 'DESC']]
      })
      res.send(products)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async orderByPriceAsc(req, res) {
    try {
      const products = await Product.findAll({
        include: [{ model: Category, attributes: ['name'] }],
        order: [['price', 'ASC']]
      })
      res.send(products)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async update(req, res) {
    try {
      await Product.update(req.body,
        {
          where: {
            id: req.params.id
        }
      })
      res.send({ message: 'Product updated' })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async delete(req, res) {
    try {
      await Product.destroy({
        where: {
          id: req.params.id
        }
      })
      res.send({ message: 'Product deleted' })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }

  }
}

module.exports = ProductController