import React from 'react';
import { Link } from 'react-router-dom'; // If you want to add routing to your app
import "./Stylesheet/Homepage.css"

// Import any necessary styles or animation libraries here

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Beautiful Websites for Software Development</h1>
          <p>We create stunning websites for software development companies that are easy to use and visually appealing.</p>
          <Link to="/contact"><button>Contact Us</button></Link> {/* If you're using routing */}
        </div>
        <div className="hero-image">
          {/* Add your hero image here */}
        </div>
      </div>
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="service-cards-container">
          {/* Add your service cards here */}
        </div>
      </div>
      <div className="portfolio-container">
        <h2>Our Portfolio</h2>
        <div className="portfolio-items-container">
          {/* Add your portfolio items here */}
        </div>
        <Link to="/portfolio"><button>View All</button></Link> {/* If you're using routing */}
      </div>
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-text">
          <p>We are a team of designers and developers who specialize in creating websites for software development companies. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/about"><button>Learn More</button></Link> {/* If you're using routing */}
        </div>
        <div className="about-image">
          {/* Add your about image here */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
