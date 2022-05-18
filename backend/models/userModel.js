import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
  },
  total_likes: {
    type: Number,
    required: true,
  },
  total_dislikes: {
    type: Number,
    required: true,
  },
  fav_genre: {
    type: String,
    required: true,
  },
  genre: [
    {
      type: {
        type: String,
        required: true,
      },
      like: {
        type: Number,
        required: true,
      },
      dislike: {
        type: Number,
        required: true,
      },
    },
    {
      type: {
        type: String,
        required: true,
      },
      like: {
        type: Number,
        required: true,
      },
      dislike: {
        type: Number,
        required: true,
      },
    },
    {
      type: {
        type: String,
        required: true,
      },
      like: {
        type: Number,
        required: true,
      },
      dislike: {
        type: Number,
        required: true,
      },
    },
    {
      type: {
        type: String,
        required: true,
      },
      like: {
        type: Number,
        required: true,
      },
      dislike: {
        type: Number,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("user", userSchema);

export default User;
