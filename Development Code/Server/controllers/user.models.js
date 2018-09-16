var mongoose = require('mongoose');
var validator = require('validator');

var SignUpModel = mongoose.model('SignUpModel', {
   fullname: {
       type: String,
       require: true
   },
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
   }
});

module.exports = {SignUpModel}