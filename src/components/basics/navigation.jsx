// NavigationBar.js

import React from 'react';
import "./Style/header.css"

const NavigationBar = () => {
  return (
    <div className="Navbar">
      <h1>The PizzaHub</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default NavigationBar;
