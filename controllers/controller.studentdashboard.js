/**
 * @author Sravya Kancharla <S531500@nwmissouri.edu>
 */

 let studentDetails = (req,res) => {
    var body = _.pick(req.body,['Acknowledged','CourseNameKey','EmailKey','StudentName']);
    courseStudentModel.findOne({Acknowledged: body.Acknowledged})
    
 }
module.exports.studentDetails = studentDetails;