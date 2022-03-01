const router = require('express').Router()
const db = require('../models')
const { posts, likes } = db;
const { Op } = require("sequelize");
// const multer  = require('multer')
// const aws  = require('aws-sdk')
// const fs = require('fs');
// aws.config.update({accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
// })
// const s3 = new aws.S3()


//get all posts
router.get('/', async (req, res)=> {
    try{
        let postsInDatabase = await posts.findAll({
            include:
                [{
                    model: likes,
                    as: "likes",
                    attributes:{
                        exclude: ["like_id", "post_id"]
                    }
                }]
        })
        res.status(200).json(postsInDatabase)
    }
    catch(err){
        res.status(500).json(err)
    }
    
})

// //create a post
// router.post('/', async (req, res, next)=>{
    
//     const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//           cb(null, './uploads')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.originalname)

//         }
//       })
      
//       const upload = multer({ storage: storage })
//     //   upload(req, res, error => {if (error) throw error}
//     //   )
//     //   next()
//     return upload.single('photo')(req, res, next)
// }, 

// async (req, res)=>{
    
//     let photoKey = `https://socialappphotosbucket.s3.us-east-2.amazonaws.com/${req.file.originalname}_${Date.now().toString()}`
//     try{
//         // 
//         fs.readFile(`./uploads/${req.file.originalname}`,
//         (err, data) => {
//             if (err) throw err
//             s3.upload({Bucket: 'socialappphotosbucket', Key: photoKey, 
//         Body: data}, (err) => {if (err) throw err})
//         })

//         await posts.create({user_id: req.body.user_id, content: req.body.content, image: photoKey})
//     }
//     catch(err){
//         res.status(500).json(err)
//     }
//     res.end()
// })

router.post('/', async (req, res) => {
    await posts.create(req.body)
    res.status(200).json('Friendship created')
})

//edit a post
router.put('/:post_id', async (req, res)=>{
    try{
        await posts.update(req.body, {
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
router.delete('/:post_id', async (req, res)=>{
    try{
        await posts.destroy({
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