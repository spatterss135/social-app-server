const users = require('express').Router()
const db = require('../models')
const {User} = db;


users.get('/', (req, res)=> {
    res.send('User Page')
})

module.exports = recipes;