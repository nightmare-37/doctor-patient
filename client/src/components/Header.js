import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  const myStyle = {
    textDecoration: "none",
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/home" style={myStyle}>
              <h4>Home</h4>
            </Link>
          </li>
          <li>
            <Link to="/patientList" style={myStyle}>
              <h4>Patient List</h4>
            </Link>
          </li>
          <li>
            <Link to="/doctorList" style={myStyle}>
              <h4>Doctor List</h4>
            </Link>
          </li>
          <li>
            <Link to="/patientHistoryById" style={myStyle}>
              <h4>Patient History</h4>
            </Link>
          </li>
          <li>
            <Link to="/totalcasesofpatient" style={myStyle}>
              <h4>Total Cases Of Patient By Id</h4>
            </Link>
          </li>
          <li>
            <Link to="/createuser" style={myStyle}>
              <h4>createuser</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
