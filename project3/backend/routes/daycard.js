var express = require('express');
var cardController = require('../controllers/daycard')

var router = express.Router();

router.get("/", cardController.getCardID);
router.post("/create-card", cardController.createCardID); // add this route


module.exports = router;

//to test on postman
// {
//     "date": "2024-01-15"
// }