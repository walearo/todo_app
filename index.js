require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const bodyParser = require('body-parser')
const displayRoutes = require('express-routemap')

app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Todo_App Server is listing on port: ${port}`)
})

displayRoutes(app)