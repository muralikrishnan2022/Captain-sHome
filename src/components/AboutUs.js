// AboutUs.js

import React from 'react';
import './about-us.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>We are dedicated to making the world a better place through sustainable practices and innovations. Our team is committed to reducing the carbon footprint and promoting eco-friendly habits.</p>
      <p>The website is earnestly developed by:</p>
        <p><b>Muralikrishnan, 22MIS1177</b></p> 
        <p><b>Sonaa Rajagopal, 22MIS1028</b></p>
      
      </div>
      <div className="about-images">
        <img src="https://media.tenor.com/bWCuXkYwpQIAAAAi/droid.gif" alt="Sustainable Practices" />
      </div>
    </div>
  );
};

export default AboutUs;
