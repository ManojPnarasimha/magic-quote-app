import React from 'react';
// import { Link } from 'react-router-dom'; // Import for navigation
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <a href='/' className='site-title'>Magic quote app</a>
      <ul className='item-name'>
        <li><a href='/home'>Home</a></li>
        <li><a href='/contact'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
