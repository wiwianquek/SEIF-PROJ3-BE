var express = require('express');
var journalController = require('../controllers/journalentry')

var router = express.Router();

router.get("/:entryId", journalController.getJournalEntry); // Specific entry by ID
router.get("/", journalController.getJournalEntry); // General search or get all entries
router.post("/create-journal-entry", journalController.createJournalEntry);


module.exports = router;

