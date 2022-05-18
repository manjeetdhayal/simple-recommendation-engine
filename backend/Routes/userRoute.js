import express from "express";

import expressAsyncHandler from "express-async-handler";
const router = express.Router();

import User from "../models/userModel.js";

router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);

router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const users = await User.findById(req.params.id);
    res.json(users.genre);
  })
);

export default router;
