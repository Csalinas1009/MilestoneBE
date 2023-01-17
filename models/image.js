const mongoose = require('mongoose');
const { Schema } = mongoose;

const fileSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    creation_date: {
      type: String
    }
})

module.exports = mongoose.model('File', fileSchema);