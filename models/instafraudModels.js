const mongoose = require('mongoose')

const instaFraudSchema = new mongoose.Schema({

    imageUrl: {
        type: String,
        required: false
    }
    
},{timestamps: true})

const Post = mongoose.model('instafraud', instaFraudSchema)

module.exports = Post