const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    journalentry_ids: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'JournalEntry'
    }],  
}, {
    timestamps: true
});

module.exports = mongoose.model("CardID", cardSchema);

// 65a6a384dc6a75f63a1cae68
