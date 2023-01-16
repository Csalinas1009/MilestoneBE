//dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const Routes = require('./routes/instafraudRoutes')
require('dotenv').config()


//express app
const app = express()


//middleware
app.use(express.json())
//cors
app.use(cors())



app.use(('/instafraud', Routes))


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



        
        




