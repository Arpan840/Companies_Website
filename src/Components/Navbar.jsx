
import { Link } from 'react-router-dom'
import "./Stylesheet/Navbar.css"
import { HashLink } from 'react-router-hash-link'


const Navbar = ({mode,backGround}) => {
  
  const handleClick = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('active');
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.toggle('active');
  };

  return (
    <nav >
      <div className='logo'>
        <h1>lo<span>Go</span></h1>
        <button className='menu-toggle' onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
      <div className='main-content'>
      <ul>
    
    <li ><Link  to="/">Home</Link></li>
    <li ><Link  to="/services">Services</Link></li>
    <li ><Link   to="/careers">Careers</Link></li>
    <li ><HashLink  smooth to="/#about">About</HashLink></li>
    
    <li><Link  to="#">Social Media</Link></li>
    <li><Link  to="/contact" >Contact</Link></li>
    <li onClick={backGround} style={{color:'black'}}>{mode}</li>
  </ul>
      </div>
    </nav>
  )
}

export default Navbar