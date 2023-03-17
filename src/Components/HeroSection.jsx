import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
   <>
   <div className='containerhero'>
    <div className='section-hero-data'>
    <img className='heroimg' src="https://media.istockphoto.com/photos/future-artificial-intelligence-robot-and-cyborg-picture-id1202870693?k=20&m=1202870693&s=170667a&w=0&h=bNRQvjlDpHmuse-LTKKeeFyuS85hIrdgj47-tyTNgG0=" alt="heroimage" />
        <p className='herotopdata' >Lorem, ipsum dolor.</p>
        <h1 className="heroheading"  >Lorem, ipsum.</h1>
        <p className="heropara"  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, inventore, exercitationem magnam ullam in impedit illo facere labore sequi animi optio corporis non! Ullam, maxime animi corrupti accusantium ex eaque.</p>
      <button className='button'>
        <Link to="/careers">Hire Me</Link>
      </button>
      
    </div>


   </div>
   </>
  )
}

export default HeroSection
