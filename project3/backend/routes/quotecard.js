var express = require('express');
var quotecardController = require('../controllers/quotecard')

var router = express.Router();

router.get("/", quotecardController.getQuoteCard);

module.exports = router;