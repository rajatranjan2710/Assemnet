// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";

const expressApp = express();
const PORT = 5000;

connectDB();

// Middleware
expressApp.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
expressApp.use(bodyParser.json());

expressApp.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//importing route
import UserRoute from "./routes/user.route.js";

expressApp.use("/api/users", UserRoute);
