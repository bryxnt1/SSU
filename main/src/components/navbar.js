import React from 'react'
import Logo from '../assets/Logo.PNG'
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

 function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
       <img src={Logo} />
      </div>
      
      <div className='rightSide'>
        <Link to="/"> Home </Link>
        <Link to="/menu"> menu </Link>
        <Link to="/about"> about </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
