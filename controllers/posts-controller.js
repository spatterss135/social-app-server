const router = require('express').Router()
const db = require('../models')
const { posts } = db;
const { Op } = require("sequelize");
const res = require('express/lib/response');

//get all posts
router.get('/', async (req, res)=> {
    let postsInDatabase = await posts.findAll()
    res.send(postsInDatabase)
})

//create a post
router.post('/', async (req, res)=>{
    try{
        posts.create(req.body)
        res.status(200).json('Post created.')
    }
    catch(err){
        res.status(500).json(err)
    }
})

//edit a post
router.put('/:post_id', async (req, res)=>{
    try{
        posts.update(req.body, {
            where:{
                post_id: req.params.post_id
            }
        })
        res.status(200).json('Post edited')
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete a post
router.delete('/post_id', async (req, res)=>{
    try{
        posts.destroy({
            where:{
                post_id: req.params.post_id
            }
        })
        res.status(200).json('Post deleted.')
    }
    catch(err){
        res.status(500).json(err)
    }
})

//get posts made by friends
router.get('/:friends', async (req, res)=> {
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

module.exports = router;