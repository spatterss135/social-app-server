const router = require('express').Router()
const db = require('../models')
const { Op } = require('sequelize')
const { users, posts, friends } = db;


//function to rearrange friend JSON string
function rearrange(body){
    const parsed = JSON.parse(body)
    let arrange = {
      user_id: parsed.friend_id,
      friend_id: parsed.user_id
    }
    return JSON.stringify(arrange)
}

//get all friendships
router.get('/', async (req, res)=>{
    try{
        const foundFriends = await friends.findAll()
        res.status(200).json(foundFriends)
    }
    catch(err){

    }
})

//get a single user's friends
router.get('/:user_id', async (req, res)=>{
    try{
        const foundFriends = await friends.findAll({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(foundFriends)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//create a friendship
router.post('/', async (req, res)=> {
    try{
        friends.create(req.body) //need to try more things to get the parity to work
        res.status(200).json('Friendship created')
    }
    catch(err){
        res.status(500).json(err)
    }
})

//delete a friendship
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