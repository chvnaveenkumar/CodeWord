const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CourseStudentModel } = require('../model/model.coursestudent');
var { mongoose } = require('./../config/database')
var { CodeWord } = require('../model/model.codeword')
let XLSX = require('xlsx')
let addCourseStudent = (req,res) => {
    var codewordslist =[];
    var shuffleCodeWords, studetList;
    var studentidList=[],studentNameList=[];
    var workbook = XLSX.read(req.file.buffer, {type:"buffer"});
    var body = _.pick(req.body,['CourseNameKey','CodeWordSetName']);    
    studetList = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
    
    CodeWord.findOne({CodeWordSetName: body.CodeWordSetName}, function (err, CodeWords) {
        if(err){
            return res.json({ code: 204, message: 'CodeWord Set Not found error'});
        }
        codewordslist.push(CodeWords.codeword)
        if(codewordslist.length > studetList.length )
        {
            return res.json({ code: 200, message: 'Insufficent Codewords'})
        }else {
            shuffleCodeWords = shuffle(codewordslist);
            for(var i=0;i<studetList.length;i++) {
            var studentData = JSON.parse(JSON.stringify(studetList[i]))
            studentidList.push(studentData[Object.keys(studentData)[0]])
            studentNameList.push(studentData[Object.keys(studentData)[1]])
            }
            console.log(studentidList+" "+studentNameList)
            var courseStudents = [];
            for(var i=0;i<studentidList.length;i++){
                var courseStudentModel = CourseStudentModel({
                    CourseNameKey: body.CourseNameKey,
                    EmailKey:studentidList[i],
                    Codeword:'Codewords',
                    StudentName: studentNameList[i],
                    Acknowledged: false 
                });
                courseStudents.push(courseStudentModel);
             }  
             CourseStudentModel.insertMany(courseStudents, (error, students) => {
                 if(error){
                     res.send(400, "Unable to store Course Student details")
                 }
                 res.send("Sucessfully Created course Student")
             });         
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
