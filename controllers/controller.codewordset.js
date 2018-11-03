const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { codewordset } = require('../model/model.codewordset');
var { mongoose } = require('./../config/database')
var mailController = require('../config/user.mail.js')
let xlsx2json = require('xlsx2json');

let getDataFromXLS = (req, res) => {
    if (req && (!req.files || !req.files.file || req.files.file.size == 0)) {
        return res.status(500).json( { message: "Please provide proper file." });
    }
    xlsx2json(req.files.file.path,
        {
            // dataStartingRow: 2,
            //A, B , C , E is from the input sheet row numbers
            mapping: {
                'codeword': 'A',
            }
        }).then(jsonArray => {
            return res.status(200).json({ data: jsonArray[0], count: jsonArray[0].length })
        })

}
module.exports.getDataFromXLS = getDataFromXLS;

let addcodewordset = (res, req) => {

    var body = _.pick(req.body, ['CodeWordSetName', 'emailKey']);
    var codewordset = new codewordset({
        CodeWordSetName: body.CodeWordSetName,
        emailKey: body.emailKey
    });
    codewordset.save().then((user) => {
        if (user)
            return res.json({ code: 200, message: true });

    }).catch((e) => {
        console.log(e);
        return res.json({ code: 400, message: e });
    })
}
module.exports.addcodewordset = addcodewordset;
