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
    await friends.destroy(
        {
            where: {
                user_id: req.body.user_id,
                friend_id: req.body.friend_id
            }
        }
    )
    res.end()
})

module.exports = router;