const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CourseStudentModel } = require('../model/model.coursestudent');
var { mongoose } = require('./../config/database')

let addCourseStudent = (req,res) => {
    console.log("Add Course Student");
    var body = _.pick(req.body,['EmailKey','CourseNameKey','CodeWordSetName','StudentsExcelFile']);
    
    console.log(body.EmailKey);
    console.log(body.CourseNameKey);
    console.log(body.CodeWordSetName);
    console.log(body.StudentsExcelFile);
    
    var courseStudentModel = new CourseStudentModel({
        CourseNameKey: body.CourseNameKey,
        EmailKey:body.EmailKey,
        Codeword:body.Codeword,
        StudentName: body.name,
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

