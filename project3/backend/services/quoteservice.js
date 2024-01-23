//service to fetch quotes for the month

const axios = require('axios');
const common = require('../util/common');

module.exports = {
    getQuotes
}

//function will return required array of quotes for the month
async function getQuotes(month, year, frequency) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const quotesToFetch = Math.ceil(daysInMonth / frequency);
    const quotes = [];
    for (let i = 0; i < quotesToFetch; i++) {
        const quote =  await getQuote();
        quotes.push(quote);
    }
    return quotes;
}

//fetch quote from https://api.quotable.io/random
async function getQuote() {
    try {
        // To have the url in config eventually
        const quote = await axios.get("https://api.quotable.io/random");
        return quote.data.content;
    } catch (err) {
        // Handle error
        throw err;
    }
}

