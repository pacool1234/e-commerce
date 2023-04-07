const { Review, User } = require('../models/index')

const ReviewController = {
    async insert(req, res) {
        try {
            await Review.create(req.body)
            res.status(201).send({message: 'Review created'})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    },

    async getAll(req, res) {
        try {
            const reviews = await Review.findAll({
                include: [{ model: User, attributes: ['name', 'surname'] }]
            })
            res.send(reviews)
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = ReviewController