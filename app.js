const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//Middlewares
app.use(cors())
app.use(bodyParser.json())

//Import routes
const postRoute = require('./routes/posts')

app.use('/posts', postRoute)

//Routes
app.get('/', (req, res) => {
    res.send("We are on home")
})

//DB connect
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    () => console.log('Connected to DB!'))

//Listen
app.listen(3000)