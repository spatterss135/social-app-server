const postsRouter = require('express').Router()
const db = require('../models')
const {posts} = db;
const { Op } = require("sequelize");


postsRouter.get('/', async (req, res)=> {
    let postsInDatabase = await posts.findAll()
    res.send(postsInDatabase)
})

postsRouter.get('/:friends', async (req, res)=> {
    let friends = req.params.friends.split(',').map(num => Number(num))
    let postsInDatabaseMadeByFriends = await posts.findAll({
        where: {
            user_id: {
                [Op.or]: [...friends]
            }
        }
    })
    res.send(postsInDatabaseMadeByFriends)
})

module.exports = postsRouter;