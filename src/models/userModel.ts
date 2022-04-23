const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    display_name: String,
    username : String,
    password : String
    }
  );


module.exports = mongoose.model('users',userSchema);