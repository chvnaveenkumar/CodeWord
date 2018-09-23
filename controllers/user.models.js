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

module.exports = {SignUpModel}

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

module.exports = {CodeWords}

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

var mongoose = require('mongoose');
var validator = require('validator');

var CodeWordSetModel = mongoose.model('CodeWordSetModel', {
   CodeWordSetName: {
    type: String,
    required: true,
    minlength:4
        },
   CalculatedCount:{
   type: String,
   reduired: true
}
});

module.exports = {CodeWordSetModel}

var mongoose = require('mongoose');
var validator = require('validator');
var eventModel = mongoose.model('eventModel', {
   EventNameKey: {
       type: String,
       require: true
   },
   InstructorEmail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 4,
    validate:{
        validator: (value) =>{
            return validator.isEmail(value);
        }
    }
   },
 CodeWordSet:{
       type: String,
       require: true,
       minlength: 5
},
Startdate:{
       type: String,
       require: true
},
Startdate:{
       type: String,
       require: true
},
Enddate:{
       type: String,
       require: true
},
SurveyURL:{
       type: String,
       require: true
}
});

module.exports = {eventModel}

var mongoose = require('mongoose');
var validator = require('validator');

var LoginTable = mongoose.model('Login Table', {
   UserName: {
       type: String,
       require: true
   },
 
   password:{
    type: String,
    require: true,
    minlength: 6
   },
Status:{
    type: String,
    require: true
}
});

module.exports = { LoginTable}

var mongoose = require('mongoose');
var validator = require('validator');

var StudentTable = mongoose.model('Student Table', {
   StudentID: {
       type: String,
       require: true
   },
 
   CourseID:{
    type: String,
    require: true
   },
   Studentname: {
    type: String,
    require: true
},
Codeword:{
    type: String,
    require: true,
    minlength: 3
}
});

module.exports = {StudentTable}

