const modelJournalEntry = require("../models/journalentry");
const modelDayCards = require("../models/daycard");

module.exports = {
    getJournalEntry,
    createJournalEntry,
    getJournalEntriesByMonth, 
    getJournalEntriesByUser,
    getAllJournalEntries    
};

async function getJournalEntry(req, res) {
    console.log(req.path); 
    console.log('Entry ID received:', req.params.entryId);
    try {
        const journalEntry = await modelJournalEntry.getJournalEntryById(req.params.entryId);
        if (!journalEntry) {
            return res.status(404).send('Entry not found');
        }
        res.json(journalEntry);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ errorMsg: err.message });
    }
}

async function createJournalEntry(req, res) {
    try {
        // Create the journal entry
        const journalEntry = await modelJournalEntry.createJournalEntry(req.body);

        // Update the corresponding day card to reflect the journalentry_id
        await modelDayCards.updateDayCardWithJournalEntry(journalEntry._id, req.body.card_id);

        res.status(201).json(journalEntry);
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getJournalEntriesByMonth(req, res) {
    try {
        const month = req.params.month;
        const year = req.query.year || new Date().getFullYear(); // Optionally allow a year to be specified
        const journalEntries = await modelJournalEntry.getJournalEntriesByMonth(month, year);
        res.json(journalEntries);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getJournalEntriesByUser(req, res) {
    try {
        const userId = req.params.userId;
        const journalEntries = await modelJournalEntry.getJournalEntriesByUser(userId);
        res.json(journalEntries);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getAllJournalEntries(req, res) {
    try {
        const filter = req.query || {};
        const journalEntries = await modelJournalEntry.getAllJournalEntries(filter);
        res.json(journalEntries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMsg: err.message });
    }
}

