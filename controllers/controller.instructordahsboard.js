/**
 * @author Sravya Kancharla <S531500@nwmissouri.edu>
 */

let addedcourse = (req,res) => {
    var body = _.pick(req.body,['courseNameKey','email','codeWordSet','Startdate','Enddate','PreSurveyURL','PostSurveyURL']);

    courseModel.findOne({courseName: body.courseNameKey}, function (err, course) {
        if(err){
            return res.json({ code: 200, message: 'Course Doesnt Exist'});
        }
        
        return bcrypt.compare(body.courseNameKey,course.courseNameKey,(err,result) => {
            if(result){
                var newToken = jwt.course({courseName: body.courseNameKey, codeWordSet: course.codeWordSet,  Startdate: course.Startdate, Enddate: course.Enddate, PreSurveyURL : course.PreSurveyURL, PostSurveyURL: course.PostSurveyURL },'codewordnwmsu',{expiresIn:  10000 * 3000 }).toString();

                courseModel.updateOne({courseName: body.courseNameKey, codeWordSet: course.codeWordSet,  Startdate: course.Startdate, Enddate: course.Enddate, PreSurveyURL : course.PreSurveyURL, PostSurveyURL: course.PostSurveyURL},{$set: {token: newToken}}, (err) =>{
                    if(err){
                        return res.json({ code: 200, message: 'Unable to generate and update Token'});
                    }
                    return res.json({ code: 200, message: 'Course Added Successfully. Redirecting.', token: newToken, email : course.email });
                })
            }else{
                return res.json({ code: 200, message: "Invalid User!!"})
            }
        })
    })
}
module.exports.addedcourse = addedcourse;