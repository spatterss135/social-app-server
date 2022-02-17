const users = require('express').Router()
const db = require('../models')
const {User} = db;

//get all users
users.get('/', (req, res)=> {
    res.send('User Page')
})

//get a specific user

//get 

module.exports = users;