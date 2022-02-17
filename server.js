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
    res.send('Welcome to Hell')
})

// CONTROLLERS 
const usersController = require('./controllers/users-controller')
app.use('/users', usersController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: 3000`)
})