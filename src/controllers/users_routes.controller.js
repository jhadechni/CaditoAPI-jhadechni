const controller = {};
const userModel = require('../models/userModel.ts');

//get User
controller.getUser = async (req, res) => {
    console.log("enter in this endpoint")
    try {
        const user = await userModel.findById(req.query.user_id)
        if (!user) {
            res.status(404).json({ data: "User not found" })
        } else {
            res.status(200).json({ data: user })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}
//Register
controller.register = async (req, res) => {
    const user = await userModel.findOne({ username: req.body.username })
    try {
        if (!user) {
            const newUser = await userModel.create(req.body)
            res.status(201).json({ data: newUser })
        } else {
            res.status(208).json({ data: "User already exist" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }


}

//Login
controller.login = async (req, res) => {
    try {
        const user = await userModel.findOne({ username: req.body.username, password: req.body.password})
        if (!user) {
            res.status(404).json({ data: "Username or password incorrect" })
        } else {
            res.status(200).json({ data: user })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

//prev login
controller.prevLogin = async (req, res) => {
    try {
        const user = await userModel.findById(req.query.user_id)
        if (!user) {
            res.status(404).json({ data: "User not found" })
        } else {
            console.log("prevlogin",user)
            res.status(200).json({ data: user })
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

module.exports = controller;