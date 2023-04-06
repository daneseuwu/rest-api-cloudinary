const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please don't forget a title"],
  },

  desciption: {
    type: String,
    required: [true, "Please don't forget a desciption"],
  },

  code: {
    type: String,
    required: [true, "Please don't forget a code"],
  },

  price: {
    type: String,
    required: [true, "Please don't forget a price"],
  },

  category: {
    type: String,
    required: [true, "Please don't forget a category"],
  },

  tag: {
    type: String,
    required: [true, "Please don't forget a tag"],
  },

  stock: {
    type: String,
    required: [true, "Please don't forget a stock"],
  },
});
