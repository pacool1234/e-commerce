const { User, Order, Token, Sequelize } = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwt_secret } = require('../config/config.json')['development']
const { Op } = Sequelize
const transporter = require('../config/nodemailer')

const UserController = {
  async create(req, res, next) {
    req.body.role = 'user'
    req.body.confirmed = false
    try {
      const password = await bcrypt.hash(req.body.password, 10)
      const user = await User.create({ ...req.body, password })
      const emailToken = jwt.sign({ email: req.body.email }, jwt_secret, { expiresIn: '48h' })
      const url = `http://localhost:3000/users/confirm/${emailToken}`
      await transporter.sendMail({
        to: req.body.email,
        subject: 'Confirmation email',
        html: `<h3>Welcome, you are one step away from registering</h3>
        <a href='${url}'>Click to confirm your email</a>
        <p>Confirme su correo en 48 horas</p>`
      })
      res.status(201).send({ message: 'User created', user })
    } catch (error) {
      console.error(error)
      // res.status(500).send(error)
      next(error)
    }
  },

  async confirm(req, res) {
    try {
      const token = req.params.emailToken
      const payload = jwt.verify(token, jwt_secret)
      console.log(payload)
      await User.update({ confirmed: true }, {
        where: {
          email: payload.email
        }
      })
      res.status(201).send({ message: 'User confirmed' })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      })
      if (!user) {
        return res.status(400).send({ message: 'Incorrect user/password' })
      }
      if (!user.confirmed) {
        return res.status(400).send({ message: 'Email must be confirmed' })
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password)
      if (!isMatch) {
        return res.status(400).send({ message: 'Incorrect user/password' })
      }
      const token = jwt.sign({ id: user.id }, jwt_secret)
      await Token.create({ token, UserId: user.id })
      res.send({ token, message: `Bienvenido ${user.name}`, user })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async logout(req, res) {
    try {
      await Token.destroy({
        where: {
          [Op.and]: [
            { UserId: req.user.id },
            { token: req.headers.authorization }
          ]
        }
      })
      res.send({ message: 'Logged out successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).send({ message: 'There was a problem while logging out' })
    }
  },

  async getAll(req, res) {
    try {
      const user = await User.findOne({
        // include: { model: Order, attributes: ['id', 'UserId']}
        include: { all: true, nested: true } //this is the closest
      })

      // const orders = await Order.findAll({
      //   include:[{model: Product, through: {attributes: ['id']}}]
      // })
      res.send(user)
    } catch (error) {
      console.error(error)
      res.status(500).send({ error })
    }
  }
}

module.exports = UserController