const daoCard = require("../daos/daycard")

module.exports = {
    getCardID,
    createCardID
  };

function getCardID(queryFields) {
    return daoCard.find(queryFields);
}

function  createCardID(card) {
    //
    return daoCard.create(card);
  }