const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,

}, { timestamps: { createdAt: 'created_at' } })

module.exports = mongoose.model('cart', cartSchema)