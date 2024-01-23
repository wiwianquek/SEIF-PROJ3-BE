var express = require('express');
var journalController = require('../controllers/journalentry')

var router = express.Router();

router.post("/create-journal-entry", journalController.createJournalEntry);
router.get("/month/:month", journalController.getJournalEntriesByMonth); // Entries by Month
router.get("/user/:userId", journalController.getJournalEntriesByUser); // Entries by User ID
router.get("/:entryId", journalController.getJournalEntry); // Specific entry by ID
router.get("/", journalController.getAllJournalEntries); // General search or get all entries

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

//to test for getjournalentrybymonth or year, put the following in the url. "1" represents jan, "2" for feb and so on
// http://localhost:3000/journalentries/month/1
// http://localhost:3000/journal/month/1?year=2024

//to test for getjournalentrybyuserID
// http://localhost:3000/journal/user/65a22ea8faff54dc30fd9da1