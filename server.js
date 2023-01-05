// IMPORT DOTENV
require("dotenv").config();

const { PORT } = process.env;

// IMPORT EXPRESS
const express = require("express");
const app = express();

// IMPORT MONGODB CONNECTION
require("./config/db.connection");

// IMPORT MORGAN AND CORS
const cors = require("cors");
const morgan = require("morgan");

// IMPORT CONTROLLER(S)
const { nftController } = require("./controller");
const { collectionController } = require("./controller")
// MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // app.use(express.json()) MUST GO BEFORE THE CONTROLLERS
app.use("/nft", nftController);
app.use("/collection", collectionController)
app.use((err, req, res, next) => res.status(500).send(err));

// TEST ROUTE -> WORKING
app.get("/", (req, res) => {
  res.send("Sanity Check for Project 3");
});

// LISTEN ROUTE
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
