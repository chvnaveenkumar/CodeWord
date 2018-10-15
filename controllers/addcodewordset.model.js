var mongoose = require('mongoose');
var validator = require('validator');

var AddCodeWordSetModal = mongoose.model('AddCodeWordSetModal', {
   codewordsetname:{
    type: String,
    require: true,
    minlength: 5  
   },
   
codewords:[]



});
module.exports.AddCodeWordSetModal = AddCodeWordSetModal