import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const user = {
  email: "",
  password: "",
};

const SignIn = (props) => {
    const [userData, setUserData] = useState(user);
    const [erroMessage, setErroMessage] = useState();
 
 const handleSubmit = evt => { 
     evt.preventDefault()

     axios
       .post(`https://infinite-anchorage-25635.herokuapp.com/users/login`, userData)
       .then((res) => {
         console.log(res);
         localStorage.setItem("token", res.data.token);
         props.history.push("/welcome-info");
       })
       .catch((err) => {
         console.log(err);
         setErroMessage("The user does not exist");
       });
 };
 

 const handleOnChange = evt => {
     const {value, name} = evt.target
     setUserData({...userData, [name]:value})
 }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              value={userData.email}
              type="email"
              name="email"
              id="emailId"
              placeholder="Email"
              onChange={handleOnChange}
              required
            />
          </label>

          <label>
            Password
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
    );
}

export default SignIn