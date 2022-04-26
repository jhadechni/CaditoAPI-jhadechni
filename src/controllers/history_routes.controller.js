const controller = {}
const historyModel = require('../models/historyModel')
const postModel = require('../models/postModel')

controller.getHistory = async (req,res) => {
    
    try {
        const products = await historyModel.find({ user_id: req.params.user_id })
        console.log(products)
        res.status(200).json(products)
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

module.exports = controller