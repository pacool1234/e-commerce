const { User } = require('../models/index')
const bcrypt = require('bcryptjs')

const UserController = {
  async insert(req, res) {
    req.body.role = 'user'
    const password = await bcrypt.hash(req.body.password, 10)
    try {
        const user = await User.create({...req.body, password})
        res.status(201).send({message: 'User created', user})
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
  }
}

module.exports = UserController