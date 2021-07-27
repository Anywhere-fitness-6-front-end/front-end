import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
    const [userData, setUserData] = useState({email: '',password: ''});
 
 const handleSubmit = evt => { 
     evt.preventDefault()
     console.log(evt)

     axios.get(`https://infinite-anchorage-25635.herokuapp.com/`)
     .then(res=>{
         console.log(res)
     })
     .catch(err=>{
         console.log(err) 

     })
 };

 const handleOnChange = evt => {
     const {value, name} = evt.target
     setUserData({...userData, [name]:value})
     console.log(userData)
 }
    return (
        <form onSubmit={handleSubmit}>
            <label>Email
                <input
                value={userData.email}
                type='email'
                name='email'
                id='emailId'
                placeholder='Email'
                onChange={handleOnChange}
                />
                </label>
            <label>Password
                <input
                type='password'
                name='password'
                id='passwordId'
                placeholder='Password'
                value={userData.password}
                onChange={handleOnChange}
                />
            </label>
            
            <button id="sign-in-btn">Sign-In</button>
        </form>
    )
}

export default SignIn