const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
      required: [true, "user name is required"],
    },
    assets: [{
      type: mongoose.Types.ObjectId,
      required: [true, "asset is required"],
      ref: "NFT"
    }],
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
