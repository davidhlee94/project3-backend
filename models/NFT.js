const mongoose = require("mongoose");

const NFTSchema = new mongoose.Schema(
    {
        username: {
            type: String, 
            required: [true, "name is required"]
        },
        image: {
            type: String,
            required: [true, "image is required"]
        },
        price: {
            type: Number,
            required: [true, "price is required"]
        }
    },
    {timestamps: true}
    );

    const NFT = mongoose.model("NFT", NFTSchema);

    modeul.exports = NFT;