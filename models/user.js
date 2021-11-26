const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    email: String,
    // password: String,
    googleId: String,
    icon: String,

})

module.exports = mongoose.model('Day', userSchema);