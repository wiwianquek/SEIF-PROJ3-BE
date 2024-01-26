var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var securityMiddleware = require('./middlewares/security');

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var daycardRouter = require('./routes/daycard');
var journalentryRouter = require('./routes/journalentry');
var carddisplayRouter = require('./routes/carddisplay');

// Load environment variables
require("dotenv").config();

// Connect to MongoDB or any database you use
require("./client/mongo");

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS Middleware setup
app.use(cors({ origin: 'https://elysio.vercel.app' })); // Enable CORS for the frontend app

// Enable preflight requests for all routes
app.options('*', cors({ origin: 'https://elysio.vercel.app' })); // This handles preflight requests

// Security middleware, if it's used for checking JWT it should be after CORS setup
app.use(securityMiddleware.checkJWT);

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/daycard', daycardRouter);
app.use('/journal', journalentryRouter);
app.use('/carddisplay', carddisplayRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
