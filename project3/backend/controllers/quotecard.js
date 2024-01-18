const modelQuoteCard = require('../models/quotecard');

module.exports = {
    getQuoteCard
};

async function getQuoteCard(req, res) {
    try {
        const quoteCard = await modelQuoteCard.getQuoteCard(req.query);
        res.json({quoteCard: quoteCard})
    } catch (err) {
        res.status(500).json({ errorMsg: err.message });
    }
}
