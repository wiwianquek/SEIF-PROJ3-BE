const modelJournalEntry = require("../models/journalentry")

module.exports = {
    getJournalEntry,
    createJournalEntry
}

async function getJournalEntry(req, res) {
    try {
        const journalData = await modelJournalEntry.getJournalEntry(req.query);
        res.json({journal: journalData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function createJournalEntry(req, res) {
  try {
      const journalEntry = await modelJournalEntry.createJournalEntry(req.body);
      res.status(201).json(journalEntry); // Respond with the created journal entry and 201 status code
  } catch (err) {
      console.log(err);
      res.status(500).json({ errorMsg: err.message });
  }
}



