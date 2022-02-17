const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { users, posts, friends } = db;

//get all users
router.get('/', async (req, res)=> {
    try{
        const foundUsers = await users.findAll()
        res.status(200).json(foundUsers)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//add a user
router.post('/', (req, res)=>{
    res.send('Add a new user')
})

//edit a user
router.put('/', (req, res)=>{
    res.send('Edit a user')
})

//delete a user
router.delete('/', (req, res)=>{
    res.send('Delete a user')
})

//get a specific user
router.get('/:name', async (req, res)=>{
    try{
        const foundUsers = await users.findOne({
            where: {
                name: req.params.name
            },
            include: [
                {
                    model: posts,
                    as: "posts",
                    attributes:{
                        exclude: "user_id"
                    }
                },
                {
                    model: friends,
                    as: "friends",
                    attributes:{
                        exclude: ['user_id', 'friendship_id']
                    }
                }
            ]
        })
        res.status(200).json(foundUsers)
    }
    catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

//get a user's posts



module.exports = router;