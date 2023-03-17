import React from 'react'
import { Link } from 'react-router-dom'
import "./Stylesheet/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav>
  <ul>
    <h1 className='logo'>Lo<span>go</span></h1>
    <li><Link to="#">Home</Link></li>
    <li><Link to="#">Careers</Link></li>
    <li><Link to="#">About</Link></li>
    <li><Link to="#">Services</Link></li>
    <li><Link to="#">Blog</Link></li>
    <li><Link to="#">Contact</Link></li>
  </ul>
</nav>

    </div>
  )
}

export default Navbar