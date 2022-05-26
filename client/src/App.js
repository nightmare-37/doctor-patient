import React from "react";
import { Route ,Redirect} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import DoctorList from "./components/DoctorList";
import PatientHistoryById from "./components/PatientHistoryById";
import TotalCasesOfPatientById from "./components/TotalCasesOfPatientById";
import PatientList from "./components/PatientList";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/patientList">
        <PatientList />
      </Route>
      <Route path="/doctorList">
        <DoctorList />
      </Route>
      <Route path="/patientHistoryById">
        <PatientHistoryById />
      </Route>
      <Route path="/totalcasesofpatient">
        <TotalCasesOfPatientById />
      </Route>
      <Route path="/createuser">
        <CreateUser />
      </Route>
    </div>
  );
}

export default App;
