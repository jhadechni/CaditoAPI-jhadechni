const controller = {};
const postsModel = require('../models/postModel.js');
const { post } = require('../routes/post_routes.js');

//Get posts
controller.getPosts = async (req, res) => {
    try {
        if (req.query.post_id) {
            const posts = await postsModel.findById(req.query.post_id)
            res.status(200).json(posts)
        } else {
            const posts = await postsModel.find({owner_id: req.query.user_id})
            res.status(200).json(posts)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

//Recent posts
controller.getRecentPosts = async (req, res) => {
    try {
        const posts = await postsModel.find({},'-created_at -updatedAt').sort({ updatedAt : -1})
        res.status(201).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

//Create a post
controller.createPost = async (req, res) => {
    try {
        const newPost = await postsModel.create(req.body)
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(500).json({ data: "Server internal error" })
    }
}

module.exports = controller