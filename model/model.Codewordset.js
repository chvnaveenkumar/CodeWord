//Srimai is responsibe for this course model.


var mongoose = require('mongoose');
var validator = require('validator');

var CourseModel = mongoose.model('Codewordset', {
    
    
CodeWordSetName:{
        type: String,
        require: true,
        minlength: 5,
        unique:true
       }
    }