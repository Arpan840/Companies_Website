import React from 'react';
import './Stylesheet/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
       
        <div className="footer-item">
          <h4>Jobs</h4>
          <ul>
            <li>Engineering</li>
            <li>Sales</li>
            <li>Operations</li>
            <li>Marketing</li>
            <li>Finance</li>
          </ul>
        </div>
       
        <div className="footer-item">
          <h4>Contact Us</h4>
          <p>2920 Sector 47C<br />Chandigarh, 160047<br />Phone: 8195825457<br />Email: arpandas020498@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Lorem, ipsum dolor.</p>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
