const controller = {}
const reviewModel = require('../models/reviewModel.js')


controller.postAReview = async (req, res) => {
    try {
        const newReview = await reviewModel.create(req.body)
        console.log(newReview)
        res.status(201).json(newReview)
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

controller.getReviews = async (req, res) => {
    try {
        const reviews = await reviewModel.find({  product_id: req.query.product_id })
                                         .sort({ rating: 1 })
        res.status(200).json(reviews)
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

module.exports = controller