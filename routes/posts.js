const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all post
router.get('/', async (req, res) => {
    try {
        let post = await Post.find();
        console.log('post');
        res.json(post);
    } catch(err) {
        res.json({...err, message:res.statusCode});
    }
})

//get specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch(err) {
        res.json({...err, message: res.statusCode});
    }

})

//add a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json({savedPost, message: res.sendStatus});
    } catch(err) {
        res.json({...err, message:res.statusCode})
    }    
})

//delete post
router.delete('/:postId', async (req, res) => {
    try {
        const deletePost = await Post.remove({_id: req.params.postId}); 
        res.json(deletePost);
    } catch(err) {
        res.json({...err, message:res.statusCode});
    }
})

//update a post 
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({_id:req.params.postId}, {$set: {
            title: req.body.title, description: req.body.description
        }});
        res.json(updatedPost);
    } catch(err) {
        res.json(err);
    }
})
module.exports = router;