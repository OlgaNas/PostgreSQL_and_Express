const Router = require('express');
const router = new Router();
const PostController = require('../controllers/post.controller');


router.post('/post', PostController.createPost); // http://localhost:8080/api/user
router.get('/post', PostController.getPostByUser);
router.delete('/post/:id', PostController.deletePost);






module.exports = router;