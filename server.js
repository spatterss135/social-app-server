// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// ROOT
app.get('/', (req, res) => {
    res.send('Welcome to Hello Kitties')
})

// CONTROLLERS 
const usersController = require('./controllers/users-controller')
app.use('/users', usersController)
const postsController = require('./controllers/posts-controller')
app.use('/posts', postsController)
const friendsController = require('./controllers/friends-controller')
app.use('/friends', friendsController)
const likesController = require('./controllers/likes-controller')
app.use('/likes', likesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}!`)
})