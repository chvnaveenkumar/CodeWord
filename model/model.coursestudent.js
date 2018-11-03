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
   EmailKey: {
    type: String,
    required: true,
    trim: true,
    minlength:4,
    validate:{
        validator: (value) =>{
            return validator.isEmail(value);
        }
    }
   },
   Name:{
    type: String,
    require: true,
   },
   Codeword:{
    type: String,
    require: true,
    minlength: 3
   },
   Acknowledged: {
    type: Boolean,
    require: true,
    default: false,
    minlength:1
   }
});
module.exports.CoursestudentModel = CoursestudentModel