const mongoose = require("mongoose")

const imageSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    publicId : {
        type: String
    },
    
}, {timestamps: true})


const Image = mongoose.model('image', imageSchema)

module.exports = Image