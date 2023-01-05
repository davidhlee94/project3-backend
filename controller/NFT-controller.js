const express = require("express");
const router = express.Router();
const { NFT } = require("../models");

require("../config/db.connection");

router.get("/", async (req, res, next) => {
  try {
    const nft = await NFT.find({});
    res.status(200).json(nft);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const createdNFT = await NFT.create(req.body);
    res.status(201).json(createdNFT);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const nft = await NFT.findById(req.params.id);
    res.status(200).json(nft);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const deletedNFT = await NFT.findByIdAndDelete(req.params.id);
    res.status(202).json(deletedNFT);
  } catch (error) {
    console.error(error);
    next(error);
  }
});




router.put("/:id", async (req, res, next) => {
    try {
      const updatedNFT = await NFT.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json(updatedNFT)
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  module.exports = router;