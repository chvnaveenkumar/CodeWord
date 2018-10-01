var mongoose = require('mongoose');
var validator = require('validator');

var Instructor = mongoose.model('Instructor', {
   
    InstructorEmailKey: {
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

module.exports = {Instructor}