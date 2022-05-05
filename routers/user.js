const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');
const authMiddleware = require('../middlewares/auth.js');

router.use(authMiddleware.verifyToken);

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);

module.exports = router;
