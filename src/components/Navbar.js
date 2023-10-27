import React, { useState } from 'react';
import Logo from '../assets/logo-black.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={Logo} alt="Logo" /> {/* Added the alt attribute for accessibility */}
      </div>
      <div className={`rightSide ${openLinks ? 'open' : 'close'}`}>
        <Link to="/">Home</Link>
        <Link to="/types">Types</Link> 
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
}

export default Navbar;
