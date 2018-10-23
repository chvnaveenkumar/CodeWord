//Sravya is responsibe for this course model.

var mongoose = require('mongoose');
var validator = require('validator');

var CourseModel = mongoose.model('CourseModel', {
    courseNameKey: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 5
   },
   email:{
    type: String,
    require: true,
    minlength: 5
   },
   codeWordSet:{
    type: String,
    require: true,
    minlength: 5
   },
   Startdate: {
    type: String,
    require: true,
    minlength: 5
   },
   Enddate: {
    type: String,
    require: true,
    minlength: 5
   },
   PreSurveyURL: {
    type: String
   },
   PostSurveyURL: {
    type: String
   }
});
module.exports.CourseModel = CourseModel