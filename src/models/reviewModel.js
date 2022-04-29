const mongoose = require('mongoose');

const reviewShema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    product_id: mongoose.Schema.Types.ObjectId,
    rating: Number,
    description: String
}, { timestamps: { createdAt: 'created_date' } })

module.exports = mongoose.model('reviews', reviewShema)