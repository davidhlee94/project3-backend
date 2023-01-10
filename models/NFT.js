const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "user name is required"],
    },
    nftOwner: {
      type: String,
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
    description: {
      type: String,
      required: [true, "description is required"],
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

const NFT = mongoose.model("NFT", NFTSchema);

module.exports = NFT;
