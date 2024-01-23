
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
    const monthArray = common.getDaysOfMonth(req.query.month, req.query.year);

    //Get all the required data from services
    const quotesToFetch = Math.ceil(daysInMonth / quotesFrequency);
    const quotes = [];
    for (let i = 0; i < quotesToFetch; i++) {
        const quote = await getQuotes.getQuote();
        quotes.push(quote);
    }

    let card = {
        card_id: '',
        card_name: '',
        card_description: '',
        card_image: '',
        day: '',
        day_name: '',
        journal_entry: '',
        quote: '',
        quote_author: '',
        quote_category: '',
        quote_id: '',
        quote_image: '',
        quote_tags: '',
        quote_text: '',
        quote_title: '',
        year: '',
    }

    //TODO: To generate the array of cards for the month including 
    //     - the day of the month
    //     - the quote for the day in the specified frequency
    //     - the journal entry if it exists | To get from dayCard controller?

    try {
        // const cardData = await cardDisplayModel.getCards(req.query);
        res.json({cards: displayCards, quotes: quotes, monthArray: monthArray})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

