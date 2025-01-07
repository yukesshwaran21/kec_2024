import React from "react";
import "../../assets/css/NavBar.css"; 
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/useeffect">UseEffect</Link></li>
                    <li><Link to="/usecontext">UseContext</Link></li>
                    <li><Link to="/useref">UseRef</Link></li>
                    <li><Link to="/usememo">UseMemo</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                    
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
