const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize');
const { likes, posts, users } = db




//get all likes
router.get('/', async (req, res)=>{
    try{
        let allLikes = await likes.findAll()
        res.status(200).json(allLikes)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Like a post
router.post('/', async (req, res)=>{
    try{
        await likes.create(req.body)
        res.status(200).json('Post liked')
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get posts you've liked
router.get('/:user_id', async (req, res)=>{
    try{
        const foundLikedPosts = await likes.findAll({
            where: {
                user_id: req.params.user_id
            },
            include: [
                {
                    model: users,
                    as: 'user',
                    attributes: {
                        exclude: ["user_id", "profile_pic"]
                    }
                },
                {
                    model: posts,
                    as: 'post',
                    attributes:{
                        exclude: ["post_id", "user_id"]
                    }
                }
            ]
        })
        res.status(200).json(foundLikedPosts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get likes on a given post
router.get('/post/:post_id', async (req, res)=>{
    try{
        const foundLikes = await likes.findAll({
            where: {
                post_id: req.params.post_id
            },
            include: [
                {
                    model: users,
                    as: 'user',
                    attributes: {
                        exclude: ["user_id", "profile_pic"]
                    }
                },
                {
                    model: posts,
                    as: 'post',
                    attributes:{
                        exclude: ["post_id", "user_id"]
                    }
                }
            ]
        })
        res.status(200).json(foundLikes)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Unlike a post
router.delete('/:post_id', async (req, res)=>{
    try{
        await likes.destroy({
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



module.exports = router