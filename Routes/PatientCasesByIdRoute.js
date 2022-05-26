const express = require("express");
const router = express.Router();

const doctorPatients = require("../Model/doctorPatientModel");

router.get("/totalcasesofpatient/:id", (req, res) => {
  const patientInputId = req.params.id;
  doctorPatients.find({ patientId: patientInputId }, (err, totalCases) => {
    if (err) {
      console.log("error in fetching data from doctorpatients model");
    } else {
      res.send(totalCases.length.toString());
    }
  });
});

module.exports = router;
