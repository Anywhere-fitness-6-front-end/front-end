import { values } from 'lodash';
import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


const user = {
    username:'',
    password:'',
    name: '',
    email: '',
    auth: '',
    instructor: false,
};

export default function Form (props){
 const [userData, setUserData] = useState(user);
 const [erroMessage, setErroMessage] = useState();

 
 const handleSubmit = evt => { 
    evt.preventDefault()
    console.log(evt)

    axios.post(`https://infinite-anchorage-25635.herokuapp.com/users/register`, userData)
    .then(res=>{
        console.log(res)
        props.history.push("/welcome-info");
    })
    .catch(err=>{
        console.log(err) 
        setErroMessage('The user already exist')
    })
};

 const onChange = evt => {
     const {checked, value, name, type} = evt.target
     const valueToUse = type === 'checkbox' ? checked: value
     setUserData({...userData, [name]:valueToUse})
     console.log(userData)
 }
    return <div>
        <form onSubmit={handleSubmit}>
        <label>Username
                <input
                value={userData.username}
                type='text'
                name='username'
                id='usernameId'
                placeholder='Username'
                onChange={onChange}
                required/>
            </label>
            
            <label>Password
                <input
                type='password'
                name='password'
                id='passwordId'
                placeholder='Password'
                value={userData.password}
                onChange={onChange}
                required/>
            </label>
        <label>Name
            <input
            type='text'
            name='name'
            id='name'
            placeholder='Full Name'
            value={userData.name}
            onChange={onChange}
            required/>
        </label>
        <label>Email
            <input
            value={userData.email}
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            onChange={onChange}
            required/>
        </label>
        <label>Auth Code
            <input
            value={userData.auth}
            type='text'
            name='auth'
            id='auth'
            placeholder='Auth Code'
            onChange={onChange}
            required/>
        </label>
        <label>Instructor
            <input
            type='checkbox'
            name='instructor'
            id='instructor'
            checked={userData.instructor}
            onChange={onChange}
            />
        </label>
        <button id="sign-up-btn">Sign-Up</button>
        </form>
        {erroMessage && <div><h4 style={{color:'red'}}>{erroMessage}</h4>
        <Link to="/sign-in" className="btn btn-primary">Sign-In</Link></div>}
    </div>
    
};



