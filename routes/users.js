var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
/* GET users listing. */
router.get('/signup', usersController.signup);
router.get('/login', usersController.login);

module.exports = router;
