

const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CourseStudentModel } = require('../model/model.coursestudent');
var { mongoose } = require('./../config/database')

let getCourseStudent = (req,res) => {
    var body = _.pick(req.body,['CourseNameKey','EmailKey',
    'Acknowledged']); 
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