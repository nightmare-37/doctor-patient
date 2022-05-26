import axios from "axios";
import React, { useEffect, useState } from "react";
// import PatientDetails from "../Assests/PatientDetails";

function PatientList() {
  const [dataFromExpress, setDataFromExpress] = useState([]);

  useEffect(() => {
    axios
      .get("/patientList")
      .then((response) => setDataFromExpress(response.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {dataFromExpress.map((patient) => (
            <tr key={parseInt(patient.id)}>
              <td data-label="ID">{patient.id}</td>
              <td data-label="Name">{patient.name}</td>
              <td data-label="Email">{patient.email}</td>
              <td data-label="Gender">{patient.gender}</td>
              <td data-label="Age">{patient.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;
