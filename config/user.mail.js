/**
 * @author Naveen Kumar Chandaluri <S530742@nwmissouri.edu>
 */
const nodemailer = require('nodemailer');
const _ = require('lodash');
var sendMail = function (email, temp_password) {
    var jwt = require('jsonwebtoken');
    var decodedvalue = "";
    var decodeJson="";
    nodemailer.createTestAccount((err, account) => {
    var newToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlM1MzA3NDJAbndtaXNzb3VyaS5lZHUiLCJwYXNzd29yZCI6IlN1dmFybmE5JCIsImlhdCI6MTU0MDUwMTAxOSwiZXhwIjoxNTcyMDM3MDE5fQ.Z1RJF2noETqetSDvivi004vp27iMnt2uoCARPqS_6yc';

    jwt.verify(newToken, 'donttry', (err, decoded, res) =>{
        if(err)
        {
            console.log(err);
        }
        decodedvalue = JSON.stringify(decoded);
        decodeJson = JSON.parse(decodedvalue);
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, 
            auth: {
                user: decodeJson.email,
                pass: decodeJson.password
            }
        });
    
        let mailOptions = {
            from: "CodeWord App",
            to: email,
            subject: 'CodeWord Temporary Password',
            text: 'Hello, '+ email,
            html: '<b>Your new temporary Password: </b>'+ temp_password // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            console.log("sent mail");
        });
    });
});
}

module.exports.sendMail = sendMail;
