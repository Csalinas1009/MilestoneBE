const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({

    publicId: {
        type: String,
        required: false
    
    },

    imageUrl: {
        type: String,
        required: false
    }

},{timestamps: true})

const Image = mongoose.model('image', imageSchema)

module.exports = Image