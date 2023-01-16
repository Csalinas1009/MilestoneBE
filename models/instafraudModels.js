const mongoose = require('mongoose')

const instaFraudSchema = new mongoose.Schema({

    imageUrl: {
        type: String,
        required: false
    }
},{timestamps: true})

const User = mongoose.model('instafraud', instaFraudSchema)

module.exports = User