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
    var body = _.pick(req.body,['courseNameKey',
    'codeWordSetName','startDate','endDate','preSurveyURL','postSurveyURL']);
    var courseModel = new CourseModel({
courseNameKey : body.courseNameKey,
emailKey: req.session.email,
codeWordSetName: 'Large Codeword Set',
Startdate: body.startDate,
Enddate: body.endDate,
PreSurveyURL: body.preSurveyURL,
PostSurveyURL: body.postSurveyURL 
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