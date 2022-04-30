const mongoose = require('mongoose');

const reviewShema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true }
}, { timestamps: { createdAt: 'created_date' } })

module.exports = mongoose.model('reviews', reviewShema)