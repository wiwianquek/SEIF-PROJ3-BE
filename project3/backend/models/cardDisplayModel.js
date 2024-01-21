const cardDisplay = require("../daos/carddisplay");

module.exports = {
    getCards,
    getCardID,
    createCardID
}

// This function will return a promise that resolves to the list of entries that match the query fields
function getCards(queryFields) {
    return cardDisplay.find(queryFields);
}

// This function will return a promise that resolves to the journal entry object that was created
function createCardID(cardData) {
    return cardDisplay.create(cardData);
}

// This function will return a promise that resolves to the journal entry object with the specified ID
function getCardID(id) {
    return cardDisplay.findById(id);
}
