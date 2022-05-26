const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cases: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
