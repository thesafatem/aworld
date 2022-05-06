const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const testController = require('../controllers/test.js');

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/hello', testController.getHello);

module.exports = router;
