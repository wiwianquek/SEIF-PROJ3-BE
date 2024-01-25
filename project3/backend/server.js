var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var securityMiddleware = require('./middlewares/security');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var daycardRouter = require('./routes/daycard');
var journalentryRouter = require('./routes/journalentry');
var carddisplayRouter = require('./routes/carddisplay');

require("dotenv").config();
require("./client/mongo");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// app.use(securityMiddleware.checkJWT);

app.use('/daycard', daycardRouter);
app.use('/journal', journalentryRouter);
app.use('/carddisplay', carddisplayRouter);


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error'; // Define the title for the error page

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;

