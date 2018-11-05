const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CourseStudentModel } = require('../model/model.coursestudent');
var { mongoose } = require('./../config/database')
var { CodeWord } = require('../model/model.codeword')
let XLSX = require('xlsx')
module.exports.addCourseStudent = addCourseStudent;
let addCourseStudent = (req,res) => {
    var codewordslist = [];
    var studentIDList = [];
    var studentNameList = [];
    var studentData = [];
    var workbook = XLSX.read(req.file.buffer, {type:"buffer"})
    _.each(XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]), function(ele,index,list){
    var status = true;
    for(firstKey in ele) {
    //studentData.push(ele[firstKey])
    if( status == true ) {
    studentIDList.push(ele[firstKey]);
    status = false
    }else {
    studentNameList.push(ele[firstKey]);
    }
    }
  })
    var body = _.pick(req.body,['CourseNameKey','CodeWordSetName']);    
    //console.log(body.CourseNameKey);
    //console.log(body.CodeWordSetName);

    CodeWord.findOne({CodeWordSetName: body.CodeWordSetName}, function (err, CodeWords) {
        if(err){
            return res.json({ code: 200, message: 'Email id not registered!!'});
        }
        codewordslist.push(CodeWords.codeword)
        //console.log(CodeWords.codeword)
    })
    //console.log("studentID"+studentIDList);
    //console.log("studentName"+studentNameList);
    //console.log(codewordslist);

    var shuffleCodeWords = shuffle(codewordslist);

    // convert xlsx to json
        var server = http.createServer(function(request, response) {
        var XLSX = require('xlsx');
        var workbook = XLSX.readFile('file.xlsx');
        var sheet_name_list = workbook.SheetNames;
        var testList = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
        console.log(typeof testList)
        for (var i in testList){
            testList[i].fileName = "file.xlsx"
        }  
        console.log(testList)
    })

    // var courseStudentModel = new CourseStudentModel({
    //     CourseNameKey: body.CourseNameKey,
    //     EmailKey:body.EmailKey,
    //     Codeword:body.Codeword,
    //     StudentName: body.name,
    //     Acknowledged:body.Acknowledged
    // });
    // courseStudentModel.save().then((user) => {
    //     if(user)
    //     return res.json({ code: 200, message: true});

    // }).catch((e) => {
    //     console.log(e);
    //     return res.json({ code: 400, message : e});
    // })
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


  