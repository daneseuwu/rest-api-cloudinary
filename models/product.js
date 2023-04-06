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
      trim: true,
      unique: true,
      required: [true, "Please don't forget a code"],
    },

    price: {
      type: Number,
      default: 0,
      required: [true, "Please don't forget a price"],
    },

    image: {
      public_id: String,
      secure_url: String,
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

module.exports = mongoose.model("product", productSchema);
