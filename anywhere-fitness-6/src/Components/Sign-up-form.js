import { values } from 'lodash';
import React, { useState } from 'react';

const user = {
    name: '',
    email: '',
    password: '',
    instructor: false,
};

export default function Form (){
 const [checked, setChecked] = useState(false);
 const [userData, setUserData] = useState(user);
 
 const handleSubmit = evt => { 
     evt.preventDefault()
     console.log(evt)
 };

 const onChange = evt => {
     const {checked, value, name, type} = evt.target
     const valueToUse = type === 'checkbox' ? checked: value
     setUserData({...userData, [name]:valueToUse})
     console.log(userData)
 }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={onChange}
            />
          </label>
          <label>
            Email
            <input
              value={userData.email}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChange}
            />
          </label>
          <label>
            Password
            <input
              value={userData.auth}
              type="password"
              name="password"
              id="password"
              placeholder="Please enter a password"
              onChange={onChange}
            />
          </label>
          <label>
            Instructor
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
      </div>
    );
    
};