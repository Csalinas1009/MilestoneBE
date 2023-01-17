const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://csalinas:n4XikY7MTDf0RaE5@instafraud.gjadi.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("connected to DB")
})