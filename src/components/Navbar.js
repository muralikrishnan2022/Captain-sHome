import React from 'react';
import androidLogo from 'C:/Users/devir/Downloads/ReactApp/my-environmental-website/src/assets/AndroidLogo.jpg'; // Adjust the path if your image is located elsewhere

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={androidLogo} alt="Android Logo" className="navbar-logo" />
      <ul>
        <li>Tell Us about You</li>
        <li>Our Achievements</li>
        <li>Our Planet</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
