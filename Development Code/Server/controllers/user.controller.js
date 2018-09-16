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

let signIn = (req,res) => {
    var body = _.pick(req.body,['email','password']);
    SignUpModel.findOne({email: body.email}).then((result) => {
        if(!result){
            return res.json({ code: 200, message: 'Email id not registered!!'});
        }
        return bcrypt.compare(body.password,result.password,(err,result) => {
            if(result){
                var newToken = jwt.sign({email: body.email },'codewordnwmsu',{expiresIn:  122 * 10000 }).toString();
                SignUpModel.updateOne({email: body.email},{$set: {token: newToken}}, (err) =>{
                    if(err){
                        return res.json({ code: 200, message: 'Unable to generate and update Token'});
                    }
                    return res.json({ code: 200, message: "User signin successful", token: newToken });
                });
            }else{
                return res.json({ code: 200, message: "Password Wrong!!"});
            }
        });
    });
}
module.exports.signIn = signIn;
