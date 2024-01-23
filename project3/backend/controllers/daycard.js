const modelDayCards = require("../models/daycard")

module.exports = {
    getCardID,
    createCardID
}

// async function getCardID(req, res) {
//     try {
//         const cardData = await modelDayCards.getCardID(req.query);
//         res.json({card: cardData})
//     } catch (err) {
//         res.status(500).json({ errorMsg: err.message });
//     }
// }

// In controllers/daycard.js
async function getCardID(req, res) {
    try {
      const cardData = await modelDayCards.getCardID(req.query);
      if (cardData) {
        res.json({ card: cardData });
      } else {
        res.status(404).json({ errorMsg: 'Card not found' });
      }
    } catch (err) {
      res.status(500).json({ errorMsg: err.message });
    }
  }
  

async function createCardID(req, res) {
    try {
        const cardData = await modelDayCards.createCardID(req.body);
        res.status(201).json(cardData); // Send back the created card object
    } catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}


