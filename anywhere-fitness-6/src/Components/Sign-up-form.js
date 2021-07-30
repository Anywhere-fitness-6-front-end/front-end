import { values } from "lodash";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/SignForms.css";

const user = {
  email: "",
  password: "",
  name: "",
  instructor: false,
};

export default function Form(props) {
  const [userData, setUserData] = useState(user);
  const [erroMessage, setErroMessage] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);

    axios
      .post(
        `https://infinite-anchorage-25635.herokuapp.com/users/register`,
        userData
      )
      .then((res) => {
        console.log(res);
        props.history.push("/welcome-info");
      })
      .catch((err) => {
        console.log(err);
        setErroMessage("The user already exist");
      });
  };

  const onChange = (evt) => {
    const { checked, value, name, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setUserData({ ...userData, [name]: valueToUse });
    console.log(userData);
  };
  return (
    <div className="component-wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="signin-form">
          <h2>CREATE ACCOUNT</h2>
          <label>
            EMAIL
            <input
              value={userData.email}
              type="email"
              name="email"
              id="emailId"
              placeholder="example@domain.com"
              onChange={onChange}
              required
            />
          </label>

          <label>
            PASSWORD
            <input
              type="password"
              name="password"
              id="passwordId"
              placeholder="Password"
              value={userData.password}
              onChange={onChange}
              required
            />
          </label>
          <label>
            NAME
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={onChange}
              required
            />
          </label>
          <label id="instructor-label">
            INSTRUCTOR
            <input
              type="checkbox"
              name="instructor"
              id="instructor"
              checked={userData.instructor}
              onChange={onChange}
            />
          </label>

          <button id="sign-up-btn">Sign-Up</button>
        </form>

        {erroMessage && (
          <div>
            <h4 style={{ color: "red" }}>{erroMessage}</h4>
          </div>
        )}

        <h5>Already have an account?</h5>
        <Link to="/sign-in" className="btn btn-primary">
          Sign-In
        </Link>
      </div>
    </div>
  );
}
