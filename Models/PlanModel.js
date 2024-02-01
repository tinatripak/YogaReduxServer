const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The plan's name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "The description is required"],
  },
  price: {
    type: String,
    required: [true, "The price is required"],
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

module.exports = mongoose.model("plan", planSchema);