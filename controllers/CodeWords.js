     var mongoose = require('mongoose');
var validator = require('validator');

var CodeWords = mongoose.model('CodeWords', {
  CodeWordSetName: {
       type: String,
       require: true,
       length : 25

   },

   Codeword:{
    type: String,
    require: true,
   }
});

module.exports = {CodeWords}