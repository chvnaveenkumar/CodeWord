/**
 * @author Sravya Kancharla <S531500@nwmissouri.edu>
 */

let instructordashboard = (req,res) => {
    var body = _.pick(req.body,['email','password','instructor']);
    var gen_token = jwt.sign({email: body.email },'codewordnwmsu',{expiresIn:  1* 300 }).toString();
    body.token = gen_token;
    console.log("controller signup"+ body.email+" "+body.password);
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(body.password,salt,(err,hash) => {
            body.password = hash;
            var userModel = new UserModel({
                emailKey: body.email,
                password: body.password,
                isInstructor: body.instructor
            });
            userModel.save().then((user) => {
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
    courseModel.findOne({emailKey: body.email}, function (err, course) {
        if(err){
            return res.json({ code: 200, message: 'Email id not registered!!'});
        }
        console.log(User.isInstructor+"Instructor status signIn controller user");
        return bcrypt.compare(body.password,User.password,(err,result) => {
            if(result){
                var newToken = jwt.sign({email: body.email, id: User.id },'codewordnwmsu',{expiresIn:  10000 * 3000 }).toString();
                UserModel.updateOne({emailKey: body.email},{$set: {token: newToken}}, (err) =>{
                    if(err){
                        return res.json({ code: 200, message: 'Unable to generate and update Token'});
                    }
                    return res.json({ code: 200, message: 'Signed in successfully. Redirecting.', token: newToken, isInstructor: User.isInstructor });
                })
            }else{
                return res.json({ code: 200, message: "Invalid User!!"})
            }
        })
    })
}
module.exports.signIn = signIn;