var mongoose = require('mongoose');
var validator = require('validator');

var CodeWord = mongoose.model('codeword', {
    CodeWordSetName: {
        type: String,
        require: true,
        minlength: 5,
        unique: true
    },
    codeword: {
        type: String,
        require: true,
        minlength: 5,
        unique: true
    }

});
module.exports.CodeWord = CodeWord