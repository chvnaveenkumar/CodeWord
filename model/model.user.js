var mongoose = require('mongoose');
var validator = require('validator');

var UserModel = mongoose.model('UserModel', {
   email: {
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
   password:{
    type: String,
    require: true,
    minlength: 6
   },
   instructor: {
       type:Boolean,
       default: false
   }
});
module.exports.UserModel = UserModel