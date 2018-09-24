var express = require('express');
var path = require('path');
require('./config/database');
var userRouter = require('./routes/user.route');
var app = express();
const bodyParser = require('body-parser');
var tokencheck = require('./middleware/tokencheck');

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// view engine setup
app.set('views', path.join(__dirname, './Client/dist'));
app.use(express.static(path.join(__dirname, './Client/dist')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(tokencheck.tokencheck);

app.use('/codeword', userRouter);


module.exports = app;
