const daoJournal = require("../daos/journalentry")

module.exports = {
    getJournalEntry,
    createJournalEntry
  };

function getJournalEntry(queryFields) {
    return daoJournal.find(queryFields);
}

function createJournalEntry(journalentry) {
    //
    return daoJournal.create(journalentry);
  }