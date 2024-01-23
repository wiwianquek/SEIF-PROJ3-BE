//fetch quote from 
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

module.exports = {
    getQuote
}
