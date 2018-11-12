/**
 * @author Sreelekha Vijaya <S531382@nwmissouri.edu>
 */

const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { CodeWord } = require('../model/model.codeword');
var { mongoose } = require('./../config/database')
var mailController = require('../config/user.mail.js')
let XLSX = require('xlsx')


let addcodewords = (req, res) => {

    let workbook = XLSX.read(req.file.buffer, {type:"buffer"})
    codewords = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    _.each(codewords, function(ele){
        ele.CodeWordSetName = req.body.CodeWordSetName
    })
    CodeWord.insertMany(codewords).then((user) => {
        if (user)
            return res.json({ code: 200, message: true });
    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message: e });
    })
}
module.exports.addcodewords = addcodewords;

let getCodewords = (req,res) => {
    var body = _.pick(req.body, ['CodeWordSetKey']);
    CodeWord.find({CodeWordSetName : body.CodeWordSetKey}, function (err, codewords) {
        console.log(codewords)
        if(err){
            return res.json({ code: 200, message: 'No codewordset is created!!'});
        }
        if (codewords)
            return res.json({ code: 200, data: codewords });
        }).catch((e) => {
            return res.json({ code: 400, message: e });
        })
}
module.exports.getCodewords = getCodewords;

// let addcodewords = (req,res) => {
//     var workbook = XLSX.read(req.file.buffer, {type:"buffer"})
//     codewords = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
//     console.log(codewords)
//     res.send("success")
// }

// module.exports.addcodewords = addcodewords
