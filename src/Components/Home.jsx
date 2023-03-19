import React from 'react';

import About from './About';

import Contact from './Contact';
import HeroSection from './HeroSection';
import Services from './Services';
import "./Stylesheet/Homepage.css"



const Homepage = () => {
  return (
    <div  className="homepage-container">
      <div className="homeintro">
        <HeroSection></HeroSection>
        <Services></Services>
       <About ></About>
       <Contact></Contact>

      </div>
    </div>
  );
};

export default Homepage;
