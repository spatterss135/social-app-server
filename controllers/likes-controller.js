const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize');
const { likes, posts } = db

//Like a post
router.post('/', async (req, res)=>{
    try{
        likes.create(req.body)
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
            include: {
                model: posts,
                as: 'post',
                attributes:{
                    exclude: ["post_id", "user_id"]
                }
            }
        })
        res.status(200).json(foundLikedPosts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Unlike a post
router.delete('/', async (req, res)=>{
    try{
        likes.destroy({
            where:{
                post_id: req.body.post_id,
                user_id: req.body.user_id 
            },
        })
        res.status(200).json('Post unliked')
    }
    catch(err){
        res.status(500).json(err)
    }
})



module.exports = router