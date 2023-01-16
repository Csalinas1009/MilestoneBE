const mongoose = require('mongoose')

const instafraudSchema = new mongoose.Schema({
    
    publicId: {
        type: String
    },

    imageUrl: {
        type: String,
        required: false
    }       
})

module.exports = mongoose.model('instafraud', instafraudSchema)