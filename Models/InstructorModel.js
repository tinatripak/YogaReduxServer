const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The instructor's name is required"],
    unique: true,
  },
  bio: {
    type: String,
    required: [true, "The bio is required"],
  },
  kindOfInstructor: {
    type: String,
    required: [true, "The instructor's kind is required"],
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

module.exports = mongoose.model("instructor", instructorSchema);