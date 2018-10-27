/**
 * @author Vyshnavi Yalamareddy <S531383@nwmissouri.edu>
 */
var mongoose = require('mongoose');
var validator = require('validator');
var CoursestudentModel = mongoose.model('CoursestudentModel', {
    CourseNameKey: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
   },
   EmailKey:{
    type: String,
    require: true,
    minlength: 7
   },
   Codeword:{
    type: String,
    require: true,
    minlength: 3
   },
   Acknowledged: {
    type: Number,
    require: true,
    minlength:1
   }
});
module.exports.CoursestudentModel = CoursestudentModel