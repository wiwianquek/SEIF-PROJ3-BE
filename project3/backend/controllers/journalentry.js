const modelJournalEntry = require("../models/journalentry");
const modelDayCards = require("../models/daycard");
const modelUser = require("../models/users");
 

module.exports = {
    getJournalEntry,
    createJournalEntry,
    getJournalEntryByDate,
};

//getJournalEntryByDate
async function getJournalEntryByDate(req, res) {
    try {
        const journalEntry = await modelJournalEntry.getJournalEntryByDate(req.params.date);
        if (!journalEntry) {
            return res.status(404).send('Entry not found');
        }
        res.json(journalEntry);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ errorMsg: err.message });
    }
}

//getJournalEntryByMonthYear
async function getJournalEntryByMonthYear(req, res) {
    try {
        const journalEntry = await modelJournalEntry.getJournalEntryByMonthYear(req.params.month, req.params.year);
        if (!journalEntry) {
            return res.status(404).send('Entry not found');
        }
        res.json(journalEntry);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ errorMsg: err.message });
    }
}



async function getJournalEntry(req, res) {

    // console.log(req.path); 
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

        //retrieve user from jwt and to append it into req.body
        const user = await modelUser.returnUserIDbyEmail(req.user);
        req.body.user_id = user._id;

        // Create the journal entry
        const journalEntry = await modelJournalEntry.createJournalEntry(req.body);
        


        // TODO: Not required anymore as we are doing computation from Journal entries and dates info with the entries
        // Update the corresponding day card to reflect the journalentry_id
        await modelDayCards.updateDayCardWithJournalEntry(journalEntry._id, req.body.card_id);

        res.status(201).json(journalEntry);
    } catch (err) {
        console.error(err);
        res.status(500).json({ errorMsg: err.message });
    }
}