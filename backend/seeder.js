import mongoose from "mongoose";
import dotenv from "dotenv";
import UserData from "./Data/data.js";
import User from "./models/userModel.js";

import connectDB from "./config/db.js";

dotenv.config();

await connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(UserData);
    console.log("data imported");
    process.exit();
  } catch (err) {
    console.log(`Error : ${err}`);
    process.exit(1);
  }
};

importData();
