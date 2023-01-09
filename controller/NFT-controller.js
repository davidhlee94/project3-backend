const express = require("express");
const router = express.Router();
const { NFT, Review } = require("../models");

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
router.delete("/:nftID/:review", async (req, res, next) => {
  try {
    const deletedReview = await NFT.findById(req.params.nftID).update({$pull: {"reviews": `${req.params.review}`}})
    res.status(202).json(deletedReview);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put("/:id/add-review", async (req, res, next) => {
  try{
    const createdReview = await Review.create(req.body);
    const updatedNFT = await NFT.findByIdAndUpdate(req.params.id, {
      $push: {
        reviews: {
          _id: createdReview._id,
          rating: createdReview.rating,
          content: createdReview.content,
          createdAt: createdReview.createdAt,
          updatedAt: createdReview.updatedAt,
          nft: req.params.id,
        },
      },
    });
    console.log(updatedNFT);
    res.status(201).json({ review: "review added" });
  } catch (error) {
    console.log(error);
    return next(error);
  }
})

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