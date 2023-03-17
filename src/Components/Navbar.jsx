import React from 'react'
import { Link } from 'react-router-dom'
import "./Stylesheet/Navbar.css"
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div>
        <nav>
  <ul>
    <h1 className='logo'>Lo<span>go</span></h1>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/careers">Careers</Link></li>
    <li><HashLink smooth to="/#about">About</HashLink></li>
    
    <li><Link to="#">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</nav>

    </div>
  )
}

export default Navbar