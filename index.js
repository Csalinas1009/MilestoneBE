const express = require('express')
require('./db/mongoose')
const imageRouter = require('./routers/images')

const app = express()

const port = process.env.PORT || 4001

app.use(express.json())
app.use(imageRouter)

app.listen(port, () => {
    console.log("server is up on port 4001")
})