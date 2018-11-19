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
codeWordSetName: body.codeWordSetName,
Startdate: body.startDate,
Enddate: body.endDate,
PreSurveyURL: body.preSurveyURL,
PostSurveyURL: body.postSurveyURL 
});
    courseModel.save().then((user) => {
        if(user)
        return res.status(200).json({ message: "Course created successfully."});
    }).catch((error) => {
        if (error.name === 'MongoError' && error.code === 11000) {
            return res.status(403).json({message:'There was a duplicate course error'});
        }
        return res.status(403).json({ message:error.message});
    })
}
module.exports.addCourse = addCourse;

let getCourses = (req,res) => {
    CourseModel.find({emailKey: req.session.email}, function (err, courses) {
        if (courses)
            return res.json({ code: 200, data: courses });
        }).catch((e) => {
        return res.json({ code: 400, message: e });
        })
}
module.exports.getCourses = getCourses;

let deleteCourse=(req,res) =>{
    var body = _.pick(req.body,['CourseNameKey']);  
    CourseModel.deleteOne({courseNameKey: body.CourseNameKey,emailKey: req.session.email }, function(err,deletecourse){
        if(err){
            return res.json({ code:200, message:'Deletion of course'});
        }
        return res.json({ code: 400, message:true})
    })
}

module.exports.deleteCourse=deleteCourse;

let updateCourse=(req,res) =>{
    var body = _.pick(req.body,['id']);  
        CourseModel.updateOne({_id: body.id}, { $set: { "Startdate" : body.Startdate,"Enddate":body.Enddate , "PreSurveyURL":body.PreSurveyURL, "PostSurveyURL": body.PostSurveyURL } }, function(err,updatecoursestudent){
        if(err){
            return res.json({ code:200, message:err});
        }
        return res.json({ code: 400, message:true})
    })
}
module.exports.updateCourse = updateCourse;