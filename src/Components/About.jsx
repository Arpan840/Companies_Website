import React, { useEffect } from 'react';
import './Stylesheet/About.css';

const About = () => {
  useEffect(() => {
    const aboutSection = document.querySelector('.about-section');
    const aboutSectionOffset = aboutSection.offsetTop;
    const aboutSectionHeight = aboutSection.offsetHeight;
    const windowHeight = window.innerHeight;
    
    const handleScroll = () => {
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (windowScrollTop > aboutSectionOffset + aboutSectionHeight - windowHeight) {
        aboutSection.classList.add('in-view');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='about-section' id='about'>
      <div className='about-image'>
        <img className='about' src='https://archello.s3.eu-central-1.amazonaws.com/images/2020/01/20/Ellement-Pilana-Karbid-BoysPlayNice-01.1579517042.1075.jpg' alt='Company' />
      </div>
      <div className='about-content'>
        <h2>About Us</h2>
       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim non et nemo sit at, consectetur in quasi commodi quam quidem praesentium facilis officiis autem. Voluptatibus consequatur ab harum est asperiores ducimus reiciendis ullam, blanditiis hic quasi beatae cumque nostrum, saepe inventore repellendus. Sit ullam quisquam sunt minus magni quia consectetur quibusdam necessitatibus vel! Dolor provident, doloremque eius iure fuga accusamus, repellendus quam ad pariatur harum repellat consectetur, enim aliquam iste voluptatem aspernatur maxime quibusdam? Molestias id harum neque ut expedita laborum, consequuntur commodi natus quaerat quibusdam voluptatibus deserunt cum ipsum cupiditate explicabo dolor ducimus dolorem porro aperiam qui sed?</p>
        
      </div>
    </section>
  );
};

export default About;
