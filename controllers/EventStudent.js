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

module.exports = {EventStudent}