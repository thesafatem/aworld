const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const commentController = require('../controllers/comment.js');
const authMiddleware = require('../middlewares/auth.js');

router.use(authMiddleware.verifyToken);

router.get('/', commentController.getComments);
router.delete('/:id', commentController.deleteComment);

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', commentController.createComment);

module.exports = router;
