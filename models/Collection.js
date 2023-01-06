const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is required"],
    },
    assetName1: {
      type: String,
      required: [true, "asset name is required"],
    },
    assetName2: {
      type: String,
      required: [true, "asset name is required"],
    },
    assetName3: {
      type: String,
    },
    image1: {
      type: String,
      required: [true, "image is required"],
    },
    image2: {
      type: String,
      required: [true, "image is required"],
    },
    image3: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    collectionName: {
      type: String
    }
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
