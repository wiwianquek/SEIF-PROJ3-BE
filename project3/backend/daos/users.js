const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        // highlight-next-line
        required: true,
      },
    last_name: {
        type: String,
        // highlight-next-line
        required: true,
      },  
    username: {
        type: String,
        // highlight-next-line
        required: true,
      },    
    email: {
        type: String,
        required: true,
      },
    password: {
        type: String,
        required: true,
      }, 
  }, {
    timestamps: true
  });
  
// Compile the schema into a model and export it
// highlight-next-line
module.exports = mongoose.model("User", userSchema);
