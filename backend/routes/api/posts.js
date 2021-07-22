// create router and asyncHandler
const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// middleware
const { Post } = require('../../db/models');
const { validateCreate } = require('../../validations/posts');

// Get Posts
router.get('/', asyncHandler(async (req, res) => {
    const posts = await Post.findAll();
    return res.json(posts);
}));

// Get a Post
router.get('/:id', asyncHandler(async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    return res.json(post);
}));

// Create a Post
router.post('', validateCreate, asyncHandler(async (req, res) => {
    const post = await Post.create(req.body);
    return res.json(post);
}))

// Delete a Post
router.delete('/:id', asyncHandler(async (req, res) => {
    const postId = req.params.id;
    await Post.destroy({ where: { id: postId } });
    return postId;
    // const post = await Post.destroy({ where: { id: req.params.id } });
    // return res.json(post);
}))

// Edit a Post
// ! fix this
// router.put('/:id', asyncHandler(async (req, res) => {
//     const id = req.params.id;
//     const { title, content } = req.body;
//     console.log({ title, content });
//     await Post.update({ title, content },
//         {
//             where: { id },
//             returning: true,
//             plain: true
//         }
//     )
//     const post = await Post.findByPk(id);
//     return res.json(song)
// }))


// export the router
module.exports = router;
