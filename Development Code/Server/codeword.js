var express = require('express');
var path = require('path');
require('./config/database');
var userRouter = require('./routes/user.route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/codeword', userRouter);


module.exports = app;
