var express = require('express');
var cardController = require('../controllers/carddisplay')
var securityMiddleware = require('../middlewares/security')


var router = express.Router();

// Get cards for current month 
// router.get("/get-cards", cardController.getCards);

// Get cards for specific month (mm-yyyy)
router.get("/get-cards/:month/:year", cardController.getCards);

module.exports = router;

