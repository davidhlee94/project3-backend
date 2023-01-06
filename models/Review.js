const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: [true, "rating cannot be empty"],
      min: 1,
      max: 5,
    },
    content: {
      type: String,
    },
    nft: {
      type: mongoose.Types.ObjectId,
      ref: "NFT",
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
