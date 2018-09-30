const nodemailer = require('nodemailer');
const _ = require('lodash');
var sendMail = function (email, temp_password) {
console.log('email'+email);
nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, 
        auth: {
            user: 's530742@nwmissouri.edu', 
            pass: 'DhanaLakshmi9$'
        }
    });

    let mailOptions = {
        from: "CodeWord App<s530742@nwmissouri.edu>",
        to: email,
        subject: 'CodeWord Temporary Password',
        text: 'Hello, '+ email,
        html: '<b>Your new temporary Password: </b>'+ temp_password // html body
    };
    transporter.sendMail(mailOptions, (error, info) => {
        console.log("sent mail");
    });
});
}

module.exports.sendMail = sendMail;
