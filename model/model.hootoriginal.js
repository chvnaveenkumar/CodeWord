var mongoose = require('mongoose');
var validator = require('validator');
var CodeWordSet = mongoose.model('hootoriginal', {
    
    
    CodeWordSetName:{
            type: String,
            require: true,
            minlength: 5,
            unique:true
           },
           codeword:{
                type: String,
                require: true,
                minlength: 5,
                unique:true 
           }
    
        });
        module.exports.hootoriginal = hootoriginal