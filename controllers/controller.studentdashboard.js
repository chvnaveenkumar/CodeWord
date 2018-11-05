/**
 * @author Sravya Kancharla <S531500@nwmissouri.edu>
 */

 let getstudentDetails = (req,res) => {
    var body = _.pick(req.body,['Acknowledged','CourseNameKey','EmailKey','StudentName']);
    courseStudentModel.findOne({Acknowledged: body.Acknowledged}), function (err, course) {
            if(err){
                return res.json({ code: 200, message: 'Course Student not exist'});
            }
            return course;
        }
    } 
module.exports.getstudentDetails = getstudentDetails;