// create router and asyncHandler
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// middleware
const { Post } = require('../../db/models');

// API route
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll();
    console.log(res.json(posts))
    return res.json(posts)
    // console.log(posts)
}))

// export the router
module.exports = router;
