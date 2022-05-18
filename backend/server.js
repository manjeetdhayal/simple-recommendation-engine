import express from "express";
import dotenv from "dotenv";
import UserData from "./Data/data.js";
import connectDB from "./config/db.js";
import cors from "cors";
import router from "./Routes/userRoute.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/users", router);

app.listen(5000, console.log("server running on port 5000"));
