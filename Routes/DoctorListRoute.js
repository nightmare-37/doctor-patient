const express = require("express");
const router = express.Router();

const doctors = require("../Model/doctorModel");

router.get("/doctorlist", (req, res) => {
  doctors.find((err, doctorList) => {
    if (err) {
      console.log("Database fetching error");
    } else {
      res.send(doctorList);
    }
  });
});

module.exports = router;
