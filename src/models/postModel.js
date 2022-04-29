const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    owner_id: mongoose.Schema.Types.ObjectId,
    img_url: String,
    display_name: String,
    description: String,
    price: String,
}, { timestamps: { createdAt: 'created_date' } })

module.exports = mongoose.model('posts', postsSchema)
