const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const authController = require('../controllers/auth.js');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
