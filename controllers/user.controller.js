const _ = require('lodash');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var { SignUpModel } = require('./../controllers/user.models');
var { mongoose } = require('./../config/database')
var mailController = require('../controllers/mail.controller')

let signUp = (req,res) => {
    console.log("SignUp");
    var body = _.pick(req.body,['email','password','instructor']);
    var gen_token = jwt.sign({email: body.email },'codewordnwmsu',{expiresIn:  1* 300 }).toString();
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

let signIn = (req,res) => {
    var body = _.pick(req.body,['email','password']);
    SignUpModel.findOne({email: body.email}, function (err, User) {
        if(err){
            return res.json({ code: 200, message: 'Email id not registered!!'});
        }
        return bcrypt.compare(body.password,User.password,(err,result) => {
            if(result){
                var newToken = jwt.sign({email: body.email, id: User.id },'codewordnwmsu',{expiresIn:  10000 * 3000 }).toString();
                SignUpModel.updateOne({email: body.email},{$set: {token: newToken}}, (err) =>{
                    if(err){
                        return res.json({ code: 200, message: 'Unable to generate and update Token'});
                    }
                    return res.json({ code: 200, message: "User signin successful", token: newToken });
                })
            }else{
                return res.json({ code: 200, message: "Password Wrong!!"})
            }
        })
    })
}
module.exports.signIn = signIn;
let details = (req,res) => {    
    console.log('email');
    SignUpModel.findOne({_id: req.session.id}).then((user) => {
    if(!user){
        return  res.status(400).send("User details not found!!");
    }        
    return res.send(user);
    });
}
module.exports.details = details;

let validateEmail = (req, res) => {
    var body = _.pick(req.body,['email']);
    SignUpModel.findOne({ email: body.email}).then((user) => {
        if(!user){
            return res.json({ code: 400, message: false});
        }        
        return new Promise((resolve, reject) =>{
                if(resolve){
                    return res.json({ code: 200, message: true});
                }
            });
        });
}
module.exports.validateEmail = validateEmail;

let tempPassword = (req, res ) => {
    var body = _.pick(req.body,['email']);
    console.log('Tempa'+ body.email);
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var temporaryPassword = "";
    for (var x = 0; x < 5; x++) {
        var i = Math.floor(Math.random() * chars.length);
        temporaryPassword += chars.charAt(i);
    }
    SignUpModel.updateOne({email: body.email },{$set: {password: temporaryPassword}}, (err,result) =>{
        if(!res){
            return  res.status(400).send("Error");
        }
        mailController.sendMail(body.email,temporaryPassword);
        return res.json({ code: 200, message: true});
     });
}
module.exports.tempPassword = tempPassword;
