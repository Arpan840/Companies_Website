import React, { useRef} from 'react';
import './Stylesheet/Contact.css'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_38evfwr', 'template_d6hkups', form.current, 'dQjh4D7HQpN5oIBMU')
      .then((result) => {
          console.log(result.text);
         alert('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="contact-container" id='contact'>
      <h1>Contact Us</h1>
      <iframe title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0044142158!2d76.66897809999999!3d30.662004200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe9de4a8481a9%3A0xe9ef3f5011c6eec4!2sAP%2003%20Sector%20109%20Mohali%20Punjab%20140306!5e0!3m2!1sen!2sin!4v1679319141961!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      <form className="contact-form" ref={form} onSubmit={sendEmail}>

        <div className="form-group">
          <label >Name</label>
          
          <input type="text"  name="name" placeholder="Enter your name" required 
          />
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="email"  name="email" placeholder="Enter your email"  />
        </div>
        <div className="form-group">
          <label >Message</label>
          <textarea  name="message" placeholder="Enter your message" ></textarea>
        </div>
       <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
