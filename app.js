const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const helemt = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

mongoose.set("strictQuery", false)
mongoose.connect('mongodb://127.0.0.1:27017/socialmedia',
  { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (!error) console.log("Database Conencted Successfully");
    else console.log(error)

  })


app.listen(3000, () => { console.log("Server is running at: 3000") })