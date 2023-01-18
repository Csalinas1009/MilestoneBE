const express = require('express')
const cors = require('cors');
require('./db/mongoose')
require('dotenv').config
const router = require('./routers/images')

const app = express()

const port = process.env.PORT || 4001

app.use(express.json())
app.use(cors())
app.use('/upload', router)

app.listen(port, () => {
    console.log("server is up on port 4001")
})