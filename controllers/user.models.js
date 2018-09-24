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

module.exports.SignUpModel = SignUpModel

var mongoose = require('mongoose');
var validator = require('validator');

var CodeWords = mongoose.model('CodeWords', {
  CodeWordSetName: {
       type: String,
       require: true,
       length: 25

   },

   Codeword:{
    type: String,
    require: true,
   }
});

module.exports.Codewords = CodeWords

var mongoose = require('mongoose');
var validator = require('validator');

var EventStudent = mongoose.model('EventStudent', {
  EventNameKey1: {
       type: String,
       require: true
   },
   studentEmail: {
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
   CodeWord:{
    type: String,
    require: true,
    minlength: 3
   },
   
   Acknowledged: {
     type:Number,
     require: true
}
});

module.exports.EventStudent = EventStudent