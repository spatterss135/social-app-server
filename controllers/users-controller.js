const usersRouter = require('express').Router()
const db = require('../models')
const {users, friends} = db;


usersRouter.get('/', async (req, res)=> {
    let usersInDatabase = await users.findAll()
    res.send(usersInDatabase)
})

usersRouter.get('/:id', async (req, res)=> {
    let userAndFriends = await users.findOne({
        where: {user_id: req.params.id},
        include: {model: friends, as: "friends"}}
        )
        res.send(userAndFriends)
    })
    

module.exports = usersRouter;