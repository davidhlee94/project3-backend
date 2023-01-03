// IMPORT MONGOOSE
const mongoose = require("mongoose");

// IMPORT DOTENV
require("dotenv").config();
const { MONGODB_URI } = process.env;

// MONGO DB CONNECTION
mongoose.set("strictQuery", true);
mongoose.connect(MONGODB_URI);

// MONGO DB CONNECTION INDICATOR(S)
mongoose.connection
  .on("open", () => console.log("MongoDB connected ... 🙌 🙌 🙌`"))
  .on("close", () => console.log("MongoDB disconnected  ⚡️ 🔌 ⚡️"))
  .on("error", (error) => console.log("MongoDB connection error 😥", error));
