const { User } = require('../models/index')

const UserController = {
    async insert(req, res) {
        try {
            await User.create(req.body)
            res.status(201).send({message: 'User created'})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = UserController