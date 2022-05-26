import React, { useEffect, useState } from "react";
import axios from "axios";

function DoctorList() {
  const [dataFromExpress, setDataFromExpress] = useState([]);

  useEffect(() => {
    axios
      .get("/doctorlist")
      .then((res) => {
        setDataFromExpress(res.data);
      })
      .catch((err) => console.log("Error in patient list axios get request"));
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>cases</th>
            <th>specialization</th>
          </tr>
        </thead>
        <tbody>
          {dataFromExpress.map((doctor) => (
            <tr key={parseInt(doctor.id)}>
              <td data-label="ID">{doctor.id}</td>
              <td data-label="Name">{doctor.name}</td>
              <td data-label="Email">{doctor.email}</td>
              <td data-label="cases">{doctor.cases}</td>
              <td data-label="specializations">{doctor.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorList;
