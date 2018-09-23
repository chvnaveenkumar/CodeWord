var jwt = require('jsonwebtoken');
const _ = require('lodash');

var tokencheck = (req,res,next) => {
    var token = req.header('token') || req.body.token ;
    if(token)
    {
     jwt.verify(token, 'codewordnwmsu', (err, decoded) =>{
        if(err)
        {
          return res.status(400).json({message: 'Unauthorized User.' });
        }
        req.session = decoded;
        next();
     });
    } else{
      next();
      }
  };
        
module.exports = {tokencheck};