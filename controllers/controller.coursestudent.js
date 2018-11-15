const _ = require('lodash');
var { CourseStudentModel } = require('../model/model.coursestudent');
var { mongoose } = require('./../config/database')
var { CodeWord } = require('../model/model.codeword')
let XLSX = require('xlsx')
var Course = require('./../controllers/controller.course')
var { CourseModel } = require('../model/model.course');

let addCourseStudent = (req,res) => {
    var codewordslist =[];
    var shuffleCodeWords, studetList;
    var studentidList=[],studentNameList=[];
    var workbook = XLSX.read(req.file.buffer, {type:"buffer"});
    var body = _.pick(req.body,['CourseNameKey','CodeWordSetName']);    
    studetList = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    
    CodeWord.find({CodeWordSetName: body.CodeWordSetName}, function (err, CodeWords) {
        if(err){
            return res.status(200).json({ message: 'CodeWord Set Not found error'});
        }
        for(var i=0;i<CodeWords.length;i++){
        codewordslist.push(CodeWords[i].Codeword)
        }
        if(codewordslist.length < studetList.length )
        {
            CourseModel.deleteOne({courseNameKey: body.CourseNameKey,emailKey: req.session.email }, function(err,deletecourse){
                if(err){
                    return res.status(200).json({ code:200, message:'Deletion of course'});
                }
                return res.status(200).json({ code: 400, message: studetList.length +' students have '+ codewordslist.length + ' Codewords.'})
            })
        }else {
            shuffleCodeWords = shuffle(codewordslist);
            for(var i=0;i<studetList.length;i++) {
            var studentData = JSON.parse(JSON.stringify(studetList[i]))
            studentidList.push(studentData[Object.keys(studentData)[0]])
            studentNameList.push(studentData[Object.keys(studentData)[1]])
            }
            var coursestudent=[];
            for(var i=0;i<studentidList.length;i++){
                var courseStudentModel = CourseStudentModel({
                    CourseNameKey: body.CourseNameKey,
                    EmailKey:studentidList[i],
                    Codeword:shuffleCodeWords[i],
                    StudentName: studentNameList[i],
                    Acknowledged: false 
                });
                coursestudent.push(courseStudentModel);
            }
                CourseStudentModel.insertMany(coursestudent).then((courseStudent) => {
                    return res.status(200).json({message: 'Course student successfully!'})    
                })
                .catch(error => {
                    return res.status(403).json({ message:error.message});
                })                 
        }
    })
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
module.exports.addCourseStudent = addCourseStudent;

let getCourseStudent = (req,res) => {
    var body = _.pick(req.body,['CourseNameValue']);    
    CourseStudentModel.find({CourseNameKey: body.CourseNameValue}, function (err, courseStudents) {
        if(err){
            return res.json({ code: 200, message: 'No courses created!!'});
        }
        if (courseStudents)
            return res.json({ code: 200, data: courseStudents });
        }).catch((e) => {
        return res.json({ code: 400, message: e });
        })
}

module.exports.getCourseStudent = getCourseStudent;

let deletecoursestudent=(req,res) =>{
    var body = _.pick(req.body,['CourseNameKey','EmailKey']);  
    CourseStudentModel.deleteOne({CourseNameKey: body.CourseNameKey,EmailKey: body.EmailKey}, function(err,deletecoursestudent){
        if(err){
            return res.json({ code:200, message:'Deletion of the EmailKey'});
        }
        return res.json({ code: 400, message:true})
    })
}

module.exports.deletecoursestudent=deletecoursestudent;

let updatecoursestudent=(req,res) =>{
    var body = _.pick(req.body,['CourseNameKey','EmailKey','StudentName','NewEmailKey']);  
        CourseStudentModel.updateOne({CourseNameKey: body.CourseNameKey,EmailKey: body.EmailKey}, { $set: { "StudentName" : body.StudentName,"EmailKey":body.NewEmailKey } }, function(err,updatecoursestudent){
        if(err){
            return res.json({ code:200, message:'StudentName is updated'});
        }
        return res.json({ code: 400, message:true})
    })
}

module.exports.updatecoursestudent=updatecoursestudent;

