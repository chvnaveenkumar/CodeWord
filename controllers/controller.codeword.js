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

let getcodewords = (req, res) => {
    // console.log("Get Codewords");
    var body = _.pick(req.body,['CodeWordSetName','codeword']);
    codeword.findOne({CodeWordSetName: body.CodeWordSetName}, function (err, codeword) {
        if(err){
            return res.json({ code: 200, message: 'No codeword Set'});
        }
        return bcrypt.compare(body.codeword,CodeWordSetName.codeword,(err,result) => {
            if(result){
                var newToken = jwt.sign({CodeWordSetName: body.CodeWordSetName, codeword : CodeWordSetName.codeword });
                codeword.updateOne({CodeWordSetName: body.CodeWordSetName},{$set: {token: newToken}}, (err) =>{
                    if(err){
                        return res.json({ code: 200, message: 'Unable to generate and update Token'});
                    }
                    return res.json({ code: 200, message: 'Codewords are initialized. Redirecting..'});
                })
            }
            else{
                return res.json({ code: 200, message: "Invalid User!!"})
            }
        })
    })
}
module.exports.getcodewords = getcodewords;
