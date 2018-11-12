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
    console.log("Add Codewords");
    var body = _.pick(req.body, ['CodeWordSetName', 'codeword']);
    console.log(body.CodeWordSetName);
    console.log(body.codeword);

    var codeword = new CodeWord({
        CodeWordSetName: body.CodeWordSetName,
        codeword: body.codeword,
    });
    codeword.save().then((user) => {
        if (user)
            return res.json({ code: 200, message: true });
    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message: e });
    })
}
module.exports.addcodewords = addcodewords;

let getCodewords = (req,res) => {
    var body = _.pick(req.body, ['CodeWordSetName']);
    CodeWord.find({CodeWordSetName: body.CodeWordSetName}, function (err, codewords) {
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