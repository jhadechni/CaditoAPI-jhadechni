const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    product_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId,

})

module.exports = mongoose.model('history', historySchema)