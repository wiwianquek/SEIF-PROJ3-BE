
module.exports = {
    getDisplayCards,
};

async function getDisplayCards(req, res) {
    console.log(req.path); 
    console.log('Month received:', req.params.month);
    console.log('Year received:', req.params.year);
    try {
        const displayCards = await modelDisplayCards.getDisplayCards(req.params.month, req.params.year);
        if (!displayCards) {
            return res.status(404).send('Cards not found');
        }
        res.json(displayCards);
    } catch (err) {
        console.error(err); 
        res.status(500).json({ errorMsg: err.message });
    }
}