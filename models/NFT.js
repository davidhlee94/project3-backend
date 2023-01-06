const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is required"],
    },
    assetName: {
      type: String,
      required: [true, "asset name is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
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

const NFT = mongoose.model("NFT", NFTSchema);

module.exports = NFT;
