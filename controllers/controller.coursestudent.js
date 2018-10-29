
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CourseModel } = require('../model/model.coursestudent');
var { mongoose } = require('./../config/database')
var mailController = require('../config/user.mail.js')
let XLSX = require('xlsx')
let addCourseStudent = (req,res) => {
    var body = _.pick(req.body,['CourseNameKey','EmailKey',
    'Codeword','Acknowledged']); 
    var courseStudentModel = new CoursestudentModel({
        CourseNameKey: body.CourseNameKey,
        EmailKey:body.EmailKey,
        Codeword:body.Codeword,
        Acknowledged:body.Acknowledged
    });
    courseStudentModel.save().then((user) => {
        if(user)
        return res.json({ code: 200, message: true});

    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message : e});
    })
}
module.exports.addCourseStudent = addCourseStudent;