import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            {/* Logo Image */}
            <nav> 
                <Link to="/"> Home </Link>
                <Link to="/create-a-class"> Create A Class </Link>
                <Link to="/book-classes"> Book A Class </Link>
                <Link to="/sign-in"> Sign In </Link>
            </nav>
        </div>
    )
}

export default Navbar
