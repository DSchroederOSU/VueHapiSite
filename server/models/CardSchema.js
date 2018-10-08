const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

let Card = mongoose.model("Card", CardSchema);
module.exports = Card;
