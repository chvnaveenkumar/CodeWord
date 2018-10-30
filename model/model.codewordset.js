/**
 *  @author Srimai Reddy Yanala <s531384@nwmissouri.edu>
  */ 


var mongoose = require('mongoose');
var validator = require('validator');

var CodeWordSet = mongoose.model('Codewordset', {
    
    
CodeWordSetName:{
        type: String,
        require: true,
        minlength: 5,
        unique:true
       },

emailKey:{
        type: String,
        required: true,
        minlength:4
}
    });
    module.exports.CodeWordSet = CodeWordSet
