var express = require('express');
var helloController = require('../controllers/hello')
var router = express.Router();

router.get('/show', helloController.getHello); 