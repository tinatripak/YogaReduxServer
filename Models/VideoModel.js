const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The video's name is required"],
    unique: true,
  },
  instructorId: {
    type: String,
    required: [true, "The instructor is required"],
  },
  duration: {
    type: String,
    required: [true, "The duration is required"],
  },
  level: {
    type: Number,
    required: [true, "The level is required"],
  },
  video: {
    type: String,
    required: [true, "The video is required"],
    unique: true,
  },
  photo: {
    type: String,
    required: [true, "The photo is required"],
    unique: true,
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("video", videoSchema);
