import React from 'react';
import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
          <nav className="navbar bg-dark">
            <h1>
                <Link to='/'><i className="fas fa-dog"></i> Stray Pawsitive</Link>
            </h1>
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>          
            </ul>
          </nav>  
        </div>
    );
}

export default Navbar;
