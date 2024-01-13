//install uuid to make card_id another unique id field instead of using mongoose default id
//Unique card_id: The uuid package will ensure that each card_id is unique. 
//can extract the card_id field later on for journal-entry

const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');  // Import UUID
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    card_id: {
        type: String,
        required: true,
        default: () => uuidv4()  // Set default value using UUID
    },
    date: {
        type: Date,
        required: true,
    },  
}, {
    timestamps: true
});

module.exports = mongoose.model("CardID", cardSchema);
