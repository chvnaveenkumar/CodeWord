var path = require("path");
var express = require("express");
var app = express();
var server = require("http").createServer(app);

var logger = require("morgan")
var bodyParser = require("body-parser") // simplifies access to request body
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/contact', function (request, response) {
  response.render('contact')
 })
 
 app.post('/contact', function(request,response) {

  var api_key = 'api:30baa0894e15276a3ecbf8f6c6f677a0-b0aac6d0-3fcff5a1';
var domain = 'sandbox8e01f909af1943fbae6f803c349b47c2.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var data = {
  from: 'Mailgun Sandbox <postmaster@sandbox8e01f909af1943fbae6f803c349b47c2.mailgun.org>',
  to: 'kancharlasravya22@gmail.com',
  subject: "web page visited",
  text: request.body.mail,
};
 
mailgun.messages().send(data, function (error, body) {
  if(!error)
  response.send('Mail sent!!')
  else 
  response.send("Unable to send mail...")
});
 })