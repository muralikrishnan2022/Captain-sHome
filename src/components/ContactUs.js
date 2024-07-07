import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>Follow us on social media:</p>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          {/* Add other social media links here */}
        </ul>
        <p>Email: contact@ourwebsite.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
