var express = require('express');
var router = express.Router();
var clothesController = require('../controllers/clothesController');
const usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/', clothesController.index);
router.get('/about', clothesController.about);
router.get('/contact', clothesController.contact);

/* GET users listing. */
router.get('/signup', usersController.signup);
router.get('/login', usersController.login);
module.exports = router;
