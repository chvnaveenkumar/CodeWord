var express = require('express');
var router = express.Router();
var usersController = require('../controllers/controller.user')
var courseController = require('../controllers/controller.course')
var codewordsetController = require('../controllers/controller.codewordset')

const bodyParser = require('body-parser');
let multer = require('multer')

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/signup', usersController.signUp);
router.post('/signin', usersController.signIn);
router.post('/details', usersController.details);
router.post('/validateEmail', usersController.validateEmail);
router.post('/sendmail', usersController.tempPassword);
router.post('/changepassword', usersController.changePassword);
router.post('/addnewCourse', courseController.addCourse);
router.post('/addcodewordset',codewordsetController.addcodewordset)
router.post('/getdataxlsx',codewordsetController.getDataFromXLS)
module.exports = router;
