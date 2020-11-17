var express = require('express');
var router = express.Router();
var clothesController = require('../controllers/clothesController');
/* GET users listing. */
router.get('/:detail', clothesController.detail);
router.get('/',clothesController.product);

module.exports = router;