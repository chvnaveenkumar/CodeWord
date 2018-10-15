var mongoose = require('mongoose');
var validator = require('validator');

var AddCourseModal = mongoose.model('AddCourseModal', {
   coursename:{
    type: String,
    require: true,
    minlength: 5  
   },
   sectionnumber:{
    type: String,
    require: true,
    minlength: 2
   },
   startdate: {
       type:Date,
       require: true,
    defult:"08/15/2018"
   },
   enddate: {
    type:Date,
    require: true,
 defult:"12/15/2018"
},
student:[],
codewordset:{
    type: String,
    require: true,
    minlength: 2

},surveystarturl:{
    type: String,
    require: true,
    minlength: 5  
   },surveyendurl:{
    type: String,
    require: true,
    minlength: 5  
   },


});
module.exports.AddCourseModal = AddCourseModal