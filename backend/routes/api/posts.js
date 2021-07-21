// create router and asyncHandler
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// middleware
const { Post } = require('../../db/models');

// API route
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll();
    return res.json(posts);
}));

// API route individual posts
router.get('/:id', asyncHandler(async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    return res.json(post);
}));

// export the router
module.exports = router;
