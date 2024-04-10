import React from 'react';

const MenuCard = ({ menuData }) => {
  // Check if menuData is not an array or empty
  if (!Array.isArray(menuData) || menuData.length === 0) {
    return <div>No menu items available</div>;
  }

  return (
    <section className='main-card--container'>
      {menuData.map((curElement) => {
        const { id, name, image, description, price } = curElement; // Destructuring here
        return (
          <div className='card-container' key={id}>
            <div className='card'>
              <div className='card-body'>
                <span className='card-number card-circle subtle'>{id}</span>
                <h2 className='card-title'>{name}</h2>
                <span className='card-description subtle'>
                  <p>{description}</p>
                </span>
                <img src={image} alt="image" className='card-media'/>
                <button className='card-read'> ({price}) | Order Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

// Default props for MenuCard
MenuCard.defaultProps = {
  menuData: [] // Defaulting to an empty array if menuData is not provided
};

export default MenuCard;
