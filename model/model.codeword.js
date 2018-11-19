var mongoose = require('mongoose');
var validator = require('validator');

var CodeWord = mongoose.model('codeword', {
    CodeWordSetName: {
        type: String,
        require: true,
        minlength: 5
    },
    Codeword: {
        type: String,
        require: true,
        minlength: 5
    }

});
module.exports.CodeWord = CodeWord