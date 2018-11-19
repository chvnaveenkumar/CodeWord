/**
 * @author Sravya Kancharla <S531500@nwmissouri.edu>
 */

let getcourse = (req,res) => {
    var body = _.pick(req.body,['courseNameKey','email','codeWordSet','Startdate','Enddate','PreSurveyURL','PostSurveyURL']);

    courseModel.findOne({courseName: body.courseNameKey}, function (err, course) {
        if(err){
            return res.json({ code: 200, message: 'Course Doesnt Exist'});
        }
        return course;
    })
}
module.exports.getcourse = getcourse;