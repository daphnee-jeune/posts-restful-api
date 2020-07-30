const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

//@Routes
//@All posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

//@Specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (err) {
        res.json({ message: err })
    }
})

//@Create a single post
router.post('/', async (req, res) => {
    const post = new Post({
        userName: req.body.userName,
        text: req.body.text
    })
    try {
        const savedPost = await post.save()
        res.json(savedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

//@Delete a post
router.delete('/:postId', async (req, res) => {
    try {
       const deletedPost = await Post.remove({ _id: req.params.postId })
        res.json(deletedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

//@Update a post
router.patch('/:postId', async (req, res) => {
    try {
       const updatedPost = await Post.updateOne(
           { _id: req.params.postId }, 
           { $set : { text: req.body.text }}
        )
       res.json(updatedPost)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router