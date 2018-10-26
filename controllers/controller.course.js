
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CourseModel } = require('../model/model.course');
var { mongoose } = require('./../config/database')
var mailController = require('../config/user.mail.js')
let XLSX = require('xlsx')


let addCourse = (req,res) => {
    var body = _.pick(req.body,['courseNameKey','email',
    'codeWordSet','Startdate','Enddate','PreSurveyURL','PostSurveyURL']);
    console.log(body.courseNameKey);
    //console.log(req.body.courseName);
    console.log(body.email);
    console.log(body.codeWordSet);
    console.log(req.body.Startdate);
    console.log(req.body.Enddate);
    console.log(req.body.PreSurveyURL);
    console.log(req.body.PostSurveyURL);

    var courseModel = new CourseModel({
courseNameKey : body.courseNameKey,
email: body.email,
codeWordSet: body.codeWordSet,
Startdate: body.Startdate,
Enddate: body.Enddate,
PreSurveyURL: body.PreSurveyURL,
PostSurveyURL: body.PostSurveyURL
    });
    courseModel.save().then((user) => {
        if(user)
        return res.json({ code: 200, message: true});

    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message : e});
    })
}
module.exports.addCourse = addCourse;