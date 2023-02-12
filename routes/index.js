const express = require('express')
const router = express.Router()

const todoRouter = require('./todo')
const authenticationRouter = require('./authentication')
const postRouter = require('./post')
const userRouter = require('./user')

router.get('/', (req, res) => [
    res.render('index')
])



module.exports = router