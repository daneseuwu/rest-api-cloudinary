const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please don't forget a title"],
    },

    description: {
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
      shoes: {
        type: String,
        required: [false, "Please don't forget a tag"],
      },
      smartwatch: {
        type: String,
        required: [false, "Please don't forget a tag"],
      },

      tshirt: {
        type: String,
        required: [false, "Please don't forget a tshirt"],
      },
    },

    stock: {
      type: String,
      required: [true, "Please don't forget a stock"],
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('product', productSchema);
