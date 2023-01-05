const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
      required: [true, "user name is required"],
    },
    assets: {
      type: String, 
      required: [true, "asset is required"],
    },
  },
  { timestamps: true }
);

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
