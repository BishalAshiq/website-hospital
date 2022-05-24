import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../Images/Frame 1.png';
const Navigation = () => {
    return (
        <div className='navigation'>
            <div>
                <img src={logo} alt=""/>
            </div>
           <div>
           <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact US</Link>
            </nav>
           </div>
        </div>
    );
};

export default Navigation;