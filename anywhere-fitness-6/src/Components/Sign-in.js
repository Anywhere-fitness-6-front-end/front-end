import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/SignForms.css";

const user = {
  email: "",
  password: "",
};

const SignIn = (props) => {
  const [userData, setUserData] = useState(user);
  const [erroMessage, setErroMessage] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);

    axios
      .post(
        `https://infinite-anchorage-25635.herokuapp.com/users/login`,
        userData
      )
      .then((res) => {
        console.log(res);
        props.history.push("/welcome-info");
      })
      .catch((err) => {
        console.log(err);
        setErroMessage("The user does not exist");
      });
  };

  const handleOnChange = (evt) => {
    const { value, name } = evt.target;
    setUserData({ ...userData, [name]: value });
    //  console.log(userData)
  };

  return (
    <div className="component-wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="signin-form">
          <h2>ACCOUNT LOGIN</h2>
          <label>
            EMAIL
            <input
              value={userData.username}
              type="email"
              name="email"
              id="emailId"
              placeholder="example@domain.com"
              onChange={handleOnChange}
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
              onChange={handleOnChange}
              required
            />
          </label>

          <button id="sign-in-btn">Sign-In</button>
        </form>

        {erroMessage && (
          <div>
            <h4 style={{ color: "red" }}>{erroMessage}</h4>
          </div>
        )}

        <h5>Need an account?</h5>
        <Link to="/" className="btn btn-primary">
          Sign-Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
