const express = require("express");
const router = express.Router();

const Customer = require("../Model/patientModel");
const Doctor = require("../Model/doctorModel");
const DoctorPatient = require("../Model/doctorPatientModel");

router.post("/createuser", (req, res) => {
  // const { id, name, email, gender, age, symptoms } = req.body;
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const gender = req.body.gender;
  const age = req.body.age;
  const symptoms = req.body.symptoms;
  console.log(
    `my id is ${id} , name is ${name} , email is ${email} , my gender is ${gender}`
  );
  Customer.findOne({ id }, (err, cus) => {
    if (err) {
      console.log("DATABASE ERROR");
      res.send("TERMINATED0");
    } else {
      if (!cus) {
        const dataCustomer = { id, name, email, gender, age };
        const newCustomer = new Customer(dataCustomer);
        newCustomer.save((err) => {
          if (err) {
            console.log("DATABASE ERROR");
            res.send("TERMINATED");
          } else {
            console.log("Success");
            Doctor.find((err, doctorList) => {
              if (err) {
                console.log("DATABASE ERROR FROM DOCTOR");
                res.send("TERMINATED2");
              } else {
                console.log("success1");
                let mn = 999999999;
                let doc_id;
                let doc_idx;
                for (let i = 0; i < doctorList.length; i++) {
                  if (doctorList[i].cases < mn) {
                    mn = doctorList[i].cases;
                    doc_id = doctorList[i].id;
                    doc_idx = i;
                  }
                }

                const dataCaselog = {
                  patientId: id,
                  doctorId: doc_id,
                  symptoms: symptoms,
                };
                const newCaselog = new DoctorPatient(dataCaselog);
                newCaselog.save((err) => {
                  if (err) {
                    console.log("DATABASE ERROR1");
                    // console.log(err.message);
                    res.send("TERMINATED");
                  } else {
                      console.log("Success2");
                    const updatedCase = doctorList[doc_idx].cases + 1;
                    const idRequired = doctorList[doc_idx]._id;
                    Doctor.findByIdAndUpdate(
                      idRequired,
                      { cases: updatedCase },
                      { new: true },
                      (err, doc) => {
                        if (err) {
                          console.log("DATABASE ERROR2");
                          res.send("TERMINATED");
                        } else {
                           console.log("Success3");
                          res.send("PERFECTLY FINE");
                        }
                      }
                    );
                  }
                });
              }
            });
          }
        });
      } else {
        Doctor.find((err, doctorList) => {
          if (err) {
            console.log("DATABASE ERROR FROM FIND DOCTORi");
            res.send("TERMINATED2i");
          } else {
            let mn = 999999999;
            let doc_id;
            let doc_idx;
            for (let i = 0; i < doctorList.length; i++) {
              if (doctorList[i].cases < mn) {
                mn = doctorList[i].cases;
                doc_id = doctorList[i].id;
                doc_idx = i;
              }
            }

            const dataCaselog = {
              patientId: id,
              doctorId: doc_id,
              symptoms: symptoms,
            };
            const newCaselog = new DoctorPatient(dataCaselog);
            newCaselog.save((err) => {
              if (err) {
                console.log("DATABASE ERROR1i");
                // console.log(err.message);
                res.send("TERMINATEDi");
              } else {
                console.log("Success1i");
                const updatedCase = doctorList[doc_idx].cases + 1;
                const idRequired = doctorList[doc_idx]._id;
                Doctor.findByIdAndUpdate(
                  idRequired,
                  { cases: updatedCase },
                  { new: true },
                  (err, doc) => {
                    if (err) {
                      console.log("DATABASE ERROR2i");
                      res.send("TERMINATEDi");
                    } else {
                      console.log("Success2i");
                      res.send("PERFECTLY FINEi");
                    }
                  }
                );
              }
            });
          }
        });
      }
    }
  });
});

module.exports = router;
