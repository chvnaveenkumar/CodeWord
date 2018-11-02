/**
 * @author Sravya Kancharla <S531500@nwmissouri.edu>
 */
const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CourseModel } = require('../model/model.course');
var { mongoose } = require('./../config/database')
var mailController = require('../config/user.mail.js')
let XLSX = require('xlsx')

let addCourse = (req,res) => {
    console.log("Add Course");
    var body = _.pick(req.body,['courseNameKey','email',
    'codeWordSetName','startDate','endDate','preSurveyURL','postSurveyURL']);
    console.log(body.courseNameKey+"course name key");
    console.log(body.email+"req.session.id"+ req.session.id);

    var courseModel = new CourseModel({
courseNameKey : body.courseNameKey,
emailKey: req.session.id,
codeWordSetName: 'Large Codeword Set',
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