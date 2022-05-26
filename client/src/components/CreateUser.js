import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const idHandler = (event) => {
    setId(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const genderHandler = (event) => {
    setGender(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };
  const symptomsHandler = (event) => {
    setSymptoms(event.target.value);
  };

  const submitHandler = (event) => {
     event.preventDefault();

    const myData = { id, name, email, gender, age, symptoms };
    axios
      .post("/createuser", myData)
      .then(() => console.log("User created sucessfully"))
      .catch((err) => console.log("Error in Create User axios post request"));

    setId("");
    setName("");
    setEmail("");
    setGender("");
    setAge("");
    setSymptoms("");
  };

  return (
    <div className="form-handler">
      <form onSubmit={submitHandler}>
        <div className="control-group">
          <div className="form-control">
            <label>Enter ID:</label>
            <input
              type="number"
              name="id"
              value={id}
              onChange={idHandler}
              required
            />
          </div>
          <div className="form-control">
            <label>Enter Name:</label>
            <input type="text" value={name} onChange={nameHandler} required />
          </div>
          <div className="form-control">
            <label>Enter Email:</label>
            <input
              type="email"
              value={email}
              onChange={emailHandler}
              required
            />
          </div>
          <div className="form-control">
            <label>Choose Gender</label>
            <label htmlFor="male" style={{ display: "flex" }}>
              <input
                style={{ width: "2rem", marginTop: "3px" }}
                id="male"
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={genderHandler}
              />
              Male
            </label>
            <label htmlFor="female" style={{ display: "flex" }}>
              <input
                style={{ width: "2rem", marginTop: "3px" }}
                id="female"
                type="radio"
                name="gender"
                checked={gender === "Female"}
                value="Female"
                onChange={genderHandler}
              />
              Female
            </label>
            <label htmlFor="other" style={{ display: "flex" }}>
              <input
                style={{ width: "2rem", marginTop: "3px" }}
                id="other"
                type="radio"
                name="gender"
                value="Others"
                checked={gender === "Others"}
                onChange={genderHandler}
              />
              Other
            </label>
          </div>
          <div className="form-control">
            <label>Age:</label>
            <input
              name="age"
              type="number"
              value={age}
              onChange={ageHandler}
              required
            />
          </div>
          <div className="form-control">
            <label>Symptoms:</label>
            <input type="text" value={symptoms} onChange={symptomsHandler} />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
