/**
 * @author Naveen Kumar Chandaluri <S530742@nwmissouri.edu>
 */
var jwt = require('jsonwebtoken');
const _ = require('lodash');

var tokencheck = (req,res,next) => {
    var token = req.header('token') || req.body.token ;
    console.log(token+"token")
    if(token)
    {
     jwt.verify(token, 'codewordnwmsu', (err, decoded) =>{
        if(err)
        {
          return res.status(400).json({message: 'Unauthorized User.' });
        }
        req.session = decoded;
        console.log("_id:"+ req.session.id);
        console.log("email:"+req.session.email);
        next();
     });
    } else{
      next();
      }
  };
        
module.exports = {tokencheck};