const mongoose = require('mongoose')

const instafraudSchema = new mongoose.Schema({
    
    picture: {
        type: String
    }       
})

module.exports = mongoose.model('instafraud', instafraudSchema)