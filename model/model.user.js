/**
 * @author Naveen Kumar Chandaluri <S530742@nwmissouri.edu>
 */

var mongoose = require('mongoose');
var validator = require('validator');

var UserModel = mongoose.model('UserModel', {
   emailKey: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 5,
    validate:{
        validator: (value) =>{
            return validator.isEmail(value);
        }
    }
   },
   fullName: {
    type: String,
    minlength: 4
   },
   password:{
    type: String,
    require: true,
    minlength: 6
   },
   isInstructor: {
       type:Boolean   
   }
});
module.exports.UserModel = UserModel