var express = require('express');
var journalController = require('../controllers/journalentry')

var router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", journalController.getJournalEntry);
router.post("/create-journal-entry", journalController.createJournalEntry); // add this route


module.exports = router;

//to test on postman
// {
//     "user_id": "65a22ea8faff54dc30fd9da1",
//     "card_id": "65a2098afaff54dc30fd9d9b",
//     "entry_text": "Today I learned about testing APIs.",
//     "date": "2024-01-14"
// }

// {
//     "user_id": "65a233c9725b5023bdc4eed3",
//     "card_id": "65a2342a725b5023bdc4eed6",
//     "entry_text": "Today I finished doing daycard and journalentry",
//     "date": "2024-01-14"
// }