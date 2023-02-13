const express = require('express')
const router = express.Router()

const todoRouter = require('./todo')
const authRouter = require('./auth')
const postRouter = require('./post')
const userRouter = require('./user')

router.get('/', (req, res) => [
    res.render('index')
])


router.use('/api/auth', authRouter)
module.exports = router