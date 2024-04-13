import React from 'react';
import pizzaImage from '../assets/pizza20.jpg'; 
import "./Style/style.css"

const component1 = () => {
  return (
    <div>
      <div className="header">
      <div className="right">
  <h1>Welcome to <span className="highlight">The PizzaHub</span>!</h1>
  <p>Indulge in a culinary journey where every bite is a burst of flavor and satisfaction.</p>
  <p>From classic favorites to unique creations, our pizzas are crafted with passion and expertise.</p>
  <p>Explore our menu, tantalize your taste buds, and embark on a delicious adventure!</p>
  <button className="explore-button">Explore Menu</button>
</div>

      <div className="left">
        <img src={pizzaImage} alt="Pizza" className="pizza-image" />
      </div>
    </div>
    </div>
  )
}

export default component1
