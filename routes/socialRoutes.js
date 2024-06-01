const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');

router.post('/posts', socialController.createPost);
router.get('/posts/:postId', socialController.getPostById);
router.put('/posts/:postId', socialController.updatePost);
router.delete('/posts/:postId', socialController.deletePost);
router.post('/posts/:postId/comments', socialController.createComment);
router.post('/posts/:postId/likes', socialController.likePost);

module.exports = router;
