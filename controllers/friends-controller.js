const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { users, posts, friends } = db;


router.post('/', async (req, res)=> {
    await friends.create(req.body)
    res.end()
})

router.delete('/', async (req, res)=> {
    console.log(req.body)
})

module.exports = router;