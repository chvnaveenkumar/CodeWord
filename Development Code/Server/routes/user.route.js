var express = require('express');
var router = express.Router();
var usersController = require('../controllers/user.controller')
const bodyParser = require('body-parser');

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/singup', usersController.signUp);

module.exports = router;
