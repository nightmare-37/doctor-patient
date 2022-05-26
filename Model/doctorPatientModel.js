const mongoose = require("mongoose");
const doctorPatientSchema = mongoose.Schema({
  patientId: {
    type: Number,
    required: true,
  },
  doctorId: {
    type: Number,
    required: true,
    unique: false,
  },
  symptoms: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Doctorpatient", doctorPatientSchema);
