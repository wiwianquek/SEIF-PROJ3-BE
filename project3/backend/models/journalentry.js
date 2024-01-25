const JournalEntry = require("../daos/journalentry");

module.exports = {
  getJournalEntry,
  getJournalEntryById,
  createJournalEntry,
  getJournalEntryByDate,
};

// This function will return a promise that resolves to the list of entries that match the query fields
function getJournalEntry(queryFields) {
    return JournalEntry.find(queryFields);
}

// This function will return a promise that resolves to the journal entry object that was created
function createJournalEntry(journalEntryData) {
    console.log(journalEntryData);
    return JournalEntry.create(journalEntryData);
}

// This function will return a promise that resolves to the journal entry object with the specified ID
function getJournalEntryById(id) {
    return JournalEntry.findById(id);
}

// Get journal entry by user and date
function getJournalEntryByUserAndDate(user_id, date) {
    return JournalEntry.find({user_id: user_id, date: date});
}

