const express = require("express");
const router = express.Router();
const { Review } = require("../models");

require("../config/db.connection");

router.get("/:id", async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    res.status(202).json(deletedReview);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json(updatedReview);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
