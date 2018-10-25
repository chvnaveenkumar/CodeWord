/**
 * @author Naveen Kumar Chandaluri <S530742@nwmissouri.edu>
 */
const nodemailer = require('nodemailer');
const _ = require('lodash');
var sendMail = function (email, temp_password) {
    var jwt = require('jsonwebtoken');

nodemailer.createTestAccount((err, account) => {

    var decodedvalue = "";
    var decodeJson="";
    //var newToken = jwt.sign({email: "S530742@nwmissouri.edu" , password: "Suvarna2$" },'donttry',{expiresIn:  100000000000 * 3000 }).toString();
    var newToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlM1MzA3NDJAbndtaXNzb3VyaS5lZHUiLCJwYXNzd29yZCI6IlN1dmFybmEyJCIsImlhdCI6MTU0MDQ5ODAzNywiZXhwIjozMDAwMDE1NDA0OTgwMzd9.Hg_KAaryme6youc8SCnQFtNdzn2dV-x97BJuQhKJkLw";
    console.log(newToken);
    jwt.verify(newToken, 'donttry', (err, decoded) =>{
        if(err)
        {
          return res.status(400).json({message: 'Unauthorized User.' });
        }
        decodedvalue = JSON.stringify(decoded);
        decodeJson = JSON.parse(decodedvalue);
        console.log("decoded"+ decodedvalue);
        console.log("email"+decodeJson.email);

        console.log("email"+decodeJson.password);
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false, 
            auth: {
                user: 'S530742@nwmissouri.edu', 
                pass: 'Suvarna9$'
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
