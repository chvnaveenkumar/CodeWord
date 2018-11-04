
var express = require('express');
var router = express.Router();
var usersController = require('../controllers/controller.user')
var courseController = require('../controllers/controller.course')
var codewordsetController = require('../controllers/controller.codewordset')
var codewordController = require('../controllers/controller.codeword')
<<<<<<< HEAD
=======
var courseStudentController = require('../controllers/controller.coursestudent')
>>>>>>> 06ac4e3cf4bd57e9d0dc7a28ef188da09dd6565d
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
<<<<<<< HEAD
router.post('/addcodewordset',codewordsetController.addcodewordset);
router.post('/addcodeword',codewordController.addcodeword);
=======
router.post('/addcodewordset',codewordsetController.addcodewordset)
router.post('/getdataxlsx',codewordsetController.getDataFromXLS)
router.post('/addnewcodewords', codewordController.addcodewords)
router.get('/getcodewordset', codewordsetController.getcodewordset)
// router.post('/addcodewordset',codewordsetController.addcodewordset);
// router.post('/getdataxlsx',codewordsetController.getDataFromXLS);
// router.post('/addnewcodewords', codewordController.addcodewords);
router.post('/addcoursestudent',multer().single('file'), courseStudentController.addCourseStudent);
// router.post('/getcodewords', codewordController.getcodewords)

>>>>>>> 06ac4e3cf4bd57e9d0dc7a28ef188da09dd6565d
module.exports = router;
