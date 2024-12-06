import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import router from "./routes/Route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json); //This allow us to accept JSON data in the req.body
app.use("/api/products", router);

app.listen(PORT, () => {
  connectDB();
  console.log("Server start at port " + PORT);
});
