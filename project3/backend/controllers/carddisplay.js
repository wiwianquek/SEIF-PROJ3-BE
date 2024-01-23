
// const cardDisplayModel = require('../models/carddisplay');

const modelDayCards = require("../models/daycard");
const common = require('../util/common');
const getQuotes = require('../services/quoteservice');

module.exports = {
    getCards,
}

async function getCards(req, res) {

    const displayCards = [];

    const month = req.params.month;
    const year = req.params.year;
    const daysInMonth = new Date(year, month, 0).getDate();
    
    //Default setting for quotes frequency / Eventually to read from settings
    const quotesFrequency = 3;

    //Generate the array of days for the month - ie [{dayNo: 1, dayName: "Monday"}, {dayNo: 2, dayName: "Tuesday"}]
    const monthArray = common.getDaysOfMonth(month, year);
    console.log(monthArray);

    //Get all the required data from services
    const quotesToFetch = Math.ceil(daysInMonth / quotesFrequency);
    const quotes = await getQuotes.getQuotes(month, year, quotesFrequency);

    //Generate the array of cards to display
    for (let i = 0; i < daysInMonth; i++) {
        const card={
            cardType: "day",
            dayNo: monthArray[i].dayNo,
            dayName: monthArray[i].dayName,
        }
        displayCards.push(card);

    }
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

    //TODO Ben:Append journal/todo entries to the cards via the daycard model

    try {
        // const cardData = await cardDisplayModel.getCards(req.query);
        res.json({displayCards: displayCards})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

