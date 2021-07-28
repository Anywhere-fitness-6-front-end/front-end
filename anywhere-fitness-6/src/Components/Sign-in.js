import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const SignIn = (props) => {
    const [userData, setUserData] = useState({username: '',password: ''});
    const [erroMessage, setErroMessage] = useState('');
 
 const handleSubmit = evt => { 
     evt.preventDefault()
     console.log(evt)

     axios.post(`https://infinite-anchorage-25635.herokuapp.com/users/login`, userData)
     .then(res=>{
         console.log(res)
         props.history.push("/create-a-class");
     })
     .catch(err=>{
         console.log(err) 
         setErroMessage('The user does not exist')
     })
 };
 

 const handleOnChange = evt => {
     const {value, name} = evt.target
     setUserData({...userData, [name]:value})
    //  console.log(userData)
 }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Username
                <input
                value={userData.username}
                type='text'
                name='username'
                id='usernameId'
                placeholder='Username'
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
        {erroMessage !='' && <div><h4 style={{color:'red'}}>{erroMessage}</h4>
        <Link to="/" className="btn btn-primary">Sign-Up</Link></div>}
        </>
    )
}

export default SignIn