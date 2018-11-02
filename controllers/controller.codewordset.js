

const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { codewordset } = require('../model/model.codewordset');
var { mongoose } = require('./../config/database')
var mailController = require('../config/user.mail.js')
let XLSX = require('xlsx')


let addcodewordset = (res,req) => {

    var body = _.pick(req.body,['CodeWordSetName','emailKey']); 
    var codewordset = new codewordset({
        CodeWordSetName:body.CodeWordSetName,
        emailKey:body.emailKey
    });
    codewordset.save().then((user) => {
        if (user)
        return res.json({code: 200,message: true});

    }).catch((e) => {
        console.log(e);
        return res.json({code: 400,message : e});
    })
}
module.exports.addcodewordset = addcodewordset;
