var express = require('express');
var journalController = require('../controllers/journalentry')
var securityMiddleware = require('../middlewares/security')

var router = express.Router();

//TODO: Remember to add middleware to check JWT permission
router.get("/:entryId",securityMiddleware.checkPermission, journalController.getJournalEntry); // Specific entry by ID
router.get("/", securityMiddleware.checkPermission, journalController.getJournalEntry); // General search or get all entries
router.post("/create-journal-entry", securityMiddleware.checkPermission, journalController.createJournalEntry);


module.exports = router;

//to test on postman
// {
//     "user_id": "65a677619646798d1980e068",
//     "card_id": "65a6aa0d2302804f074118af",
//     "entry_title": "testing FIRSTTTT for foreign key",
//     "entry_description": "test test test",
//     "entry_text": "testingggg",
//     "date": "2024-01-16"
//   }
  