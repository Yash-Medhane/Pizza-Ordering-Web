// CustomerReviews.js
import React, { useEffect, useState } from 'react';
import ReviewApi from './ReviewApi';
import "./Style/reviews.css";

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewApi.getReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div className="customer-reviews-container">
      <h2>Customer Reviews</h2>
      <div className="customer-reviews">
        {reviews.map((review) => (
          <div key={review.id} className="customer-review">
            <img src={review.imageUrl} alt={`Customer ${review.name}`} />
            <div className="review-details">
              <h3>{review.name}</h3>
              <div className="rating">
                {[...Array(review.rating)].map((_, index) => (
                  <span key={index} role="img" aria-label="Star">&#9733;</span>
                ))}
              </div>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
