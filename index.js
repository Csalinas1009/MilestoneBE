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
    
app.listen(process.env.PORT, () => {
    console.log('connected to DB and on port 4001')
})
            


        
        




