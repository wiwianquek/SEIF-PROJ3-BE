const daoCard = require("../daos/daycard")

module.exports = {
    getCardID,
    createCardID,
    updateDayCardWithJournalEntry
  };

// function getCardID(queryFields) {
//     return daoCard.find(queryFields);
// }
// In models/daycard.js
function getCardID(queryFields) {
  return daoCard.findOne(queryFields);
}


function  createCardID(card) {
    return daoCard.create(card);
}

//function to update the daycard with journalentry_id respectively 
async function updateDayCardWithJournalEntry(journalEntryId, dayCardId) {
  try {
      // Here we use $push to add the journalEntryId to the array of journalentry_ids
      return await daoCard.findByIdAndUpdate(
        dayCardId, 
        { $push: { journalentry_ids: journalEntryId } },
        { new: true, upsert: true } // Option to create a new daycard if it doesn't exist
      );
  } catch (err) {
      // Handle error
      throw err;
  }
}
