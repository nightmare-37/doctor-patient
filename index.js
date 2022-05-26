//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const DoctorListRoute = require("./Routes/DoctorListRoute");
const PatientListRoute = require("./Routes/PatientListRoute");
const PatientHistoryByIdRoute = require("./Routes/PatientHistoryByIdRoute");
const PatientcasesByIdRoute = require("./Routes/PatientCasesByIdRoute");
const CreateUserRoute = require("./Routes/CreateUserRoute");

const connectDB = require("./Config/db");
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(DoctorListRoute);
app.use(PatientListRoute);
app.use(PatientHistoryByIdRoute);
app.use(PatientcasesByIdRoute);
app.use(CreateUserRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// mongoose.connect("mongodb://localhost:27017/hospitalDB")

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
});

app.listen(process.env.PORT || 5000, function () {
  console.log("server is running");
});
