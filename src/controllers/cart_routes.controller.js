const controller = {}
const cartModel = require('../models/cartModel')


controller.getCart = async (req, res) => {
    try {
        const products = await cartModel.find({ user_id: req.query.user_id })
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

controller.addToCart = async (req, res) => {
    try {
        const newInstance = await cartModel.create(req.body)
        res.status(201).json(newInstance)
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

controller.removeFromCart = async (req, res) => {
    try {
        await cartModel.findByIdAndDelete(req.query.item_id)
        res.status(200).json({ data: "Deleted sucefully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

controller.buyCart = async (req, res) => {
    try {
        res.status(201).json({ data: "Buyed!" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}


module.exports = controller