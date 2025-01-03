import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/db.js";
import router from "./routes/Route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cookieParser());
app.use(express.json()); //This allow us to accept JSON data in the req.body
app.use("/api", router);

app.listen(PORT, () => {
    connectDB();
    console.log("Server start at port http://localhost:" + PORT);
});
