import axios from "axios";
import React, { useState } from "react";
// import PatientDetails from "../Assests/PatientDetails";

function TotalCasesOfPatientById() {
  const [patientId, setPatientId] = useState("");
  const [totalCasesById, setTotalcasesById] = useState(0);
  const [isIdExist, setIsIdExist] = useState(false);

  const idInputHandler = (event) => {
    setPatientId(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .get(`/totalcasesofpatient/${patientId}`)
      .then((response) => {
        setTotalcasesById(response.data);
        setIsIdExist(true);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <form onSubmit={submitHandler} style={{ margin: "10px 0 0 10px" }}>
        <div className="form-control">
          <label>Enter Patient Id :</label>
          <input type="number" value={patientId} onChange={idInputHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isIdExist && (
        <h3 className="casestyle">
          The Total Cases of patient with this id is {totalCasesById}
        </h3>
      )}
    </div>
  );
}

export default TotalCasesOfPatientById;
