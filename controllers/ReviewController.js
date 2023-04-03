const { Review } = require('../models/index')

const ReviewController = {
    async insert(req, res) {
        try {
            await Review.create(req.body)
            res.status(201).send({message: 'Review created'})
        } catch (error) {
            console.error(error)
            res.status(500).send(error)
        }
    }
}

module.exports = ReviewController