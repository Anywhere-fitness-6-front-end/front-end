import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        
        <div className='headerDiv'>
            <h1 className='headerTitle'> Anywhere Fitness </h1> 
            <nav className='headerLinks'> 
                <Link className='homeLink' to="/"> Home </Link>
                <Link className='createLink' to="/create-a-class"> Create A Class </Link>
                <Link className='bookLink' to="/book-classes"> Book A Class </Link>
                <Link className='classListLink' to="/class-list"> Class Lists </Link>
                <Link className='editClassLink' to="/edit-class">Edit Your Class</Link>
                <Link className='signInLink' to="/sign-in"> Sign In </Link>
            </nav>
        </div>
    )
}

export default Header;