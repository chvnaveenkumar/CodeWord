const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { SignUpModel } = require('./../controllers/user.models');
var { mongoose } = require('./../config/database')

let signUp = (req,res) => {
    var body = _.pick(req.body,['fullname','email','password']);
    var gen_token = jwt.sign({email: body.email },'codewordnwmsu',{expiresIn:  200 * 300 }).toString();
    body.token = gen_token;
    console.log("test");
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(body.password,salt,(err,hash) => {
            body.password = hash;
            var signUpModel = new SignUpModel(body);
            signUpModel.save().then((user) => {
                if(user)
                return res.json({ code: 200, message: true});           
            }).catch((e) => {
                console.log(e);
                return res.json({ code: 400, message: e});        
            })
        })
    })
}
module.exports.signUp = signUp;