const express = require("express");
const router = express.Router();
const { Collection } = require("../models");

require("../config/db.connection");

router.get("/", async (req, res, next) => {
  try {
    const collection = await Collection.find({});
    res.status(200).json(collection);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// router.post("/:id/add-nft", async (req, res, next) => {
//   try {
//     const createdCollection = await Collection.create(req.body);
//     const newCollection = await NFT.findByIdAndUpdate(req.params.id, {
//       $push: {
//         collection: {
//           _id: createdCollection._id,
//           collectionName: createdCollection.collectionName,
//           assets: req.params.id,
//         },
//       },
//     });
//     console.log(newCollection);
//     res.status(201).json({ nft: "nft created" });
//   } catch (error) {
//     console.log(error);
//     return next(error);
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const createdCollection = await Collection.create(req.body);
    res.status(201).json(createdCollection);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const collection = await Collection.findById(req.params.id);
    res.status(200).json(collection);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const deletedCollection = await Collection.findByIdAndDelete(req.params.id);
    res.status(202).json(deletedCollection);
  } catch (error) {
    console.error(error);
    next(error);
  }
});


router.put("/:id", async (req, res, next) => {
    try {
      const updatedCollection = await Collection.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).json(updatedCollection)
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

  module.exports = router;