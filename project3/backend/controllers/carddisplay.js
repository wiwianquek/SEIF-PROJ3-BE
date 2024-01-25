
// const cardDisplayModel = require('../models/carddisplay');

const modelDayCards = require("../models/daycard");
const common = require('../util/common');
const getQuotes = require('../services/quoteservice');
const modelJournalEntry = require("../models/journalentry");

module.exports = {
    getCards,
}

async function getCards(req, res) {
    console.log(req.user);

    const displayCards = [];

    const month = req.params.month;
    const year = req.params.year;
    const daysInMonth = new Date(year, month, 0).getDate();
    
    //Default setting for quotes frequency / Eventually to read from settings
    const quotesFrequency = 3;

    //Generate the array of days for the month - ie [{dayNo: 1, dayName: "Monday"}, {dayNo: 2, dayName: "Tuesday"}]
    const monthArray = common.getDaysOfMonth(month, year);
    // console.log(monthArray);

    //Get all the required data from services
    const quotesToFetch = Math.ceil(daysInMonth / quotesFrequency);
    const quotes = await getQuotes.getQuotes(month, year, quotesFrequency);

    //Get all the journal entries for the user, ideally we want to optimise by only fetching the entries for the month
    //However, the MVP is to fetch all the entries for the user for now
    const journalEntries = await modelJournalEntry.getJournalEntries(req.user._id);
    
    console.log(journalEntries);

    //Generate the array of cards to display
    for (let i = 0; i < daysInMonth; i++) {
        const card={
            cardType: "day",
            dayNo: monthArray[i].dayNo,
            dayName: monthArray[i].dayName,
            date: monthArray[i].date,
        }
        displayCards.push(card);

    }

    // //insert journal entries into the array of cards
    // displayCards.forEach(card => {
    //     //Fetch the journal entry for the day
    //     const journalEntry = journalEntries.find(entry => entry.date == card.date);
    // })


    //insert quotes based on frequency
    let quoteIndex = 0;
    for (let i = 0; i < daysInMonth; i++) {
        if (i % quotesFrequency === 0) {
            const quoteCard = {
                cardType: "quote",
                quote: quotes[quoteIndex]
            }
            displayCards.splice(i, 0, quoteCard);
            quoteIndex++;
        }
    }


    try {
        // const cardData = await cardDisplayModel.getCards(req.query);
        res.json({displayCards: displayCards})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}



