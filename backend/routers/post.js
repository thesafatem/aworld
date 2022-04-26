const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const postController = require('../controllers/post.js');
const authMiddleware = require('../middlewares/auth.js');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.use(authMiddleware.verifyToken);

router.post('/', postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);
router.delete('/:id', postController.deletePost);

module.exports = router;
