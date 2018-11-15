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
     var codewords = [];
    var body = _.pick(req.body,['CodeWordSetName','Codeword']);
    codewords = body.Codewords;
    codewords = _.map(codewords, function(codeword){
        return {
            CodeWordSetName: req.body.CodeWordSetName,
            Codeword: codeword
        }
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
            return res.json({ code: 200, data: codewords, count: codewords.length });
        }).catch((e) => {
            return res.json({ code: 400, message: e });
        })
}
module.exports.getCodewords = getCodewords;

let updatecodeword=(req,res) =>{
    var body = _.pick(req.body,['CodeWordSetName','Codeword']);  
    CodeWord.updateOne({CodeWordSetName: body.CodeWordSetName}, { $set: { "Codeword" : body.Codeword } }, function(err, updatecodeword){
        if(err){
            return res.json({ code:200, message:'StudentName is updated'});
        }
        return res.json({ code: 400, message:true})
    })
}

module.exports.updatecodeword=updatecodeword;

