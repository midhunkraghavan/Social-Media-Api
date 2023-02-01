const express = require('express')
const app = express()

const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const helemt = require('helmet')
const cors = require('cors')
const morgan = require('morgan')


// mongoose.connect('mongodb://127.0.0.1:27017/socialmedia', (error) => {
//     if (error) {
//         console.log("err");
//         console.log(error)
//     }
//     else {
//         console.log("No error");
//         console.log("Database Conencted Successfully");
//     }

// })
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(3000, () => { console.log("Server is running at: 3000") })