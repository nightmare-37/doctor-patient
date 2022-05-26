const express = require("express");
const router = express.Router();

const doctorPatients = require("../Model/doctorPatientModel");

router.get("/patientHistoryById/:id", (req, res) => {
  const patientInputId = req.params.id;
  doctorPatients.find({ patientId: patientInputId }, (err, patientHistory) => {
    if (err) {
      console.log("error in fetching data from doctorPatient model");
    } else {
      res.send(patientHistory);
    }
  });
});

module.exports = router;
