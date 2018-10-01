var mongoose = require('mongoose');
var validator = require('validator');

var Student = mongoose.model('Student', {
   
   StudentEmailKey: {
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
   Fullname: {
    type: String,
    require: true
},
   password:{
    type: String,
    require: true,
    minlength: 6
   }
});

module.exports = {Student}