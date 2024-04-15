
import React from 'react';
import "./Style/subscription.css"


const SubscriptionCard = ({ title, options, offer, price, buttonText }) => {
  return (
    <>
    <div className="subscription-card">
      <h2>{title}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      <p><strong>Offer:</strong> {offer}</p>
      <p><strong>Price:</strong> ${price}</p>
      <button>{buttonText}</button>
    </div>
    </>
  );
};

const Subscription = () => {
  return (
    <div className="subscription-container">
      <h1>Get Your Membership</h1>
      <div className="subscription-cards">
        <SubscriptionCard
          title="Silver Membership"
          options={["Exclusive access to premium pizzas", "Discounts on selected menu items", "Priority delivery"]}
          offer="Get 1 pizza free on your first order!"
          price={29.99}
          buttonText="Buy Silver Membership"
        />
        <SubscriptionCard
          title="Gold Membership"
          options={["All benefits of Silver Membership", "Free delivery on all orders", "Special invites to tasting events"]}
          offer="Get 2 pizzas free on your first order!"
          price={49.99}
          buttonText="Buy Gold Membership"
        />
      </div>
    </div>
  );
};

export default Subscription;
