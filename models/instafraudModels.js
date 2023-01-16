const mongoose = require('mongoose')

const instafraudSchema = new mongoose.Schema({
    
    imageUrl: {
        type: String,
        require: false
    }       
})

module.exports = mongoose.model('instafraud', instafraudSchema)