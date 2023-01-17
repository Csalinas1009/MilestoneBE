const express = require('express')
const cors = require('cors');
require('./db/mongoose')
const imageRouter = require('./routers/images')

const app = express()

const port = process.env.PORT || 4001

app.use(express.json())
app.use(cors())
app.use(imageRouter)

app.listen(port, () => {
    console.log("server is up on port 4001")
})