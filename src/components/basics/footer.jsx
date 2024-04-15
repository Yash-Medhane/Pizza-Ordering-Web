// Footer.js

import React from 'react';
import "./Style/header.css";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>About PizzaHub</h3>
          <ul>
            <li>Mouth-watering pizzas delivered straight to your doorstep</li>
            <li>Passion for quality ingredients and unbeatable taste</li>
            <li>Serving pizza lovers since 2010</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Address: 123 Pizza Street, Pizza Town, Pizzaland</p>
          <p>Phone: 555-1234-5678</p>
          <p>Email: info@pizzahub.com</p>
        </div>
        <div className="social-media">
          <h3>Connect With Us</h3>
          <ul>
            <li><i className="fab fa-facebook"></i> <a href="https://www.facebook.com/pizzahub" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><i className="fab fa-twitter"></i> <a href="https://twitter.com/pizzahub" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><i className="fab fa-instagram"></i> <a href="https://www.instagram.com/pizzahub" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <p className="copyright">© 2024 The PizzaHub Company. All rights reserved.</p>
    </div>
  );
}

export default Footer;