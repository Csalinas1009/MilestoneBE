//dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv').config()
const routes = require('./routes/instafraudRoutes')


//express app
const app = express()

//cors
app.use(cors())

//middleware
app.use(express.json())

app.use((req, res, next) => {
        console.log(req.path, req.method)
        next()
})


//connect to db
mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            //listen f or requests
            app.listen(process.env.PORT, () => {
                console.log('connected to DB and port on 4001')
            })
        })
        .catch((error) => {
            console.log('error')
        })



        
        




