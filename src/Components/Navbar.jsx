import { Link } from 'react-router-dom'
import "./Stylesheet/Navbar.css"
import { HashLink } from 'react-router-hash-link'

const Navbar = ({mode, backGround}) => {

  const handleClick = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.toggle('active');
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.toggle('active');
  };

  const handleTabClick = () => {
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.classList.remove('active');
    const mainContent = document.querySelector('.main-content');
    mainContent.classList.remove('active');
  };

  return (
    <nav>
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
          <li><Link to="/" onClick={handleTabClick}>Home</Link></li>
          <li><HashLink to="/#services" onClick={handleTabClick}>Services</HashLink></li>
          <li><Link to="/careers" onClick={handleTabClick}>Careers</Link></li>
          <li><HashLink smooth to="/#about" onClick={handleTabClick}>About</HashLink></li>
          <li><HashLink smooth to="/#socialMedia" onClick={handleTabClick}>Social Media</HashLink></li>
          <li><HashLink to="/#contact" onClick={handleTabClick}>Contact</HashLink></li>
          <li onClick={backGround} style={{color:'black'}}>{mode}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
