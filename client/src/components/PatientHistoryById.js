import axios from "axios";
import React, { useState } from "react";
// import PatientDetails from "../Assests/PatientDetails";

function PatientHistoryById() {
  const [patientId, setPatientId] = useState("");
  const [patientDataById, setPatientDataById] = useState([]);
  const [hasId, setHasId] = useState(false);

  const patientIdHandler = (event) => {
    setPatientId(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // const patientData = PatientDetails.filter(
    //   (patient) => patient.id === parseInt(patientId)
    // );

    axios
      .get(`/patientHistoryById/${patientId}`)
      .then((response) => {
        setPatientDataById(response.data);
        setHasId(true);
      })
      .catch((err) => console.log("error in fetching patient history"));
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} style={{ margin: "10px 0 0 10px" }}>
        <div className="form-control">
          <label>Enter Patient Id : </label>
          <input
            type="number"
            value={patientId}
            onChange={patientIdHandler}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {hasId && (
        <table>
          <thead>
            <tr>
              <th>patientId</th>
              <th>doctorId</th>
              <th>Symptoms</th>
            </tr>
          </thead>
          <tbody>
            {patientDataById.map((patient, index) => (
              <tr key={parseInt(index)}>
                <td>{patient.patientId}</td>
                <td>{patient.doctorId}</td>
                <td>{patient.symptoms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {hasId && !patientDataById.length && (
        <h3 className="casestyle">No patient found for the given Id</h3>
      )}
    </div>
  );
}

export default PatientHistoryById;
