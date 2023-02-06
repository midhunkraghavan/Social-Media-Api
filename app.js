const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const indexRouter = require('./routes/index')

mongoose.set("strictQuery", false)
mongoose.connect('mongodb://127.0.0.1:27017/socialmedia', {
  useUnifiedTopology: true,
  useNewUrlParser: true
},
  (error) => {
    if (!error) console.log("Database Conencted Successfully");
    else console.log(error)
  })

// Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(cors({ credentials: true, origin: true }))
app.use(express.static(path.join(__dirname, '/public')))



app.use('/', indexRouter)

console.log("NODE_ENV : " + process.env.NODE_ENV)
app.listen(3000, () => { console.log("Server is running at PORT : 3000") })

module.exports = app