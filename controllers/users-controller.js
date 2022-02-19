const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize');
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
router.post('/', async (req, res)=>{
    try{
        users.create(req.body)
        res.status(200).json('User created.')
    }
    catch(err){
        res.status(500).json("User creation failed.", err)
    }
})

//edit a user
router.put('/:id', async (req, res)=>{
    try{
        await users.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json(`Successfully edited user's data.`)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete a user
router.delete('/:id', async (req, res)=>{
    try{
        users.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json("User deleted.")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get a specific user's profile
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

module.exports = router;