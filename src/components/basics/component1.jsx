import React from 'react';
import pizzaImage from '../assets/main-img.png'; 
import Offer from "../assets/offer.png";
import Delivery from "../assets/delivery.png"
import Variety from "../assets/variety.png";
import Ingrediants from "../assets/ingrediants.png"
import "./Style/style.css"

const component1 = () => {
  return (
    <div>
      <div className="header">
      <div className="right">
  <div className="head">
  <h1>Discover The PizzaHub</h1>
  <blockquote className="quote">
    "At The PizzaHub, we believe in crafting moments of joy, one slice at a time."
  </blockquote>
  </div>
  <div className="highlights">
    <div className="highlight">
      <img src={Offer} alt="Special Offer" />
      <p>Special Offer</p>
    </div>
    <div className="highlight">
      <img src={Delivery} alt="Fast Delivery" />
      <p>Fast Delivery</p>
    </div>
    <div className="highlight">
  <img src={Variety} alt="Wide Variety" />
  <p>Wide Variety</p>
</div>
<div className="highlight">
  <img src={Ingrediants} alt="Quality Ingredients" />
  <p>Quality Ingredients</p>
</div>
  </div>
</div>

      <div className="left">
        <img src={pizzaImage} alt="Pizza" className="pizza-image" />
      </div>
    </div>
    </div>
  )
}

export default component1
