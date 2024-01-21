const cardDisplayModel = require('../models/carddisplay');
const modelDayCards = require("../models/daycard");

module.exports = {
    getCards,
    getCardID,
    createCardID
}

async function getCards(req, res) {
    try {
        const cardData = await cardDisplayModel.getCards(req.query);
        res.json({card: cardData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function getCardID(req, res) {
    try {
        const cardData = await modelDayCards.getCardID(req.query);
        res.json({card: cardData})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}

async function createCardID(req, res) {
    try {
        const cardData = await modelDayCards.createCardID(req.body);
        res.redirect('/daycard'); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}