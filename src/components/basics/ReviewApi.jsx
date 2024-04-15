// ReviewApi.js
const ReviewApi = {
  getReviews: () => {
    return new Promise((resolve) => {
      // Dummy data for customer reviews
      const reviews = [
        {
          id: 10,
          name: 'John Doe',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Delicious pizzas! Great service.',
        },
        {
          id: 9,
          name: 'Jane Smith',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 5,
          review: 'Best pizza I ever had. Will definitely order again!',
        },
        {
          id: 8,
          name: 'Mike Johnson',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'PizzaHub never disappoints. Always fresh and tasty.',
        },
        {
          id: 7,
          name: 'Emily Brown',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 3,
          review: 'Good pizza, but delivery was a bit slow.',
        },
        {
          id: 6,
          name: 'David Wilson',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 5,
          review: 'Absolutely amazing! The crust is perfect.',
        },
        {
          id: 5,
          name: 'Sarah Martinez',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Always my go-to pizza place. Love the variety.',
        },
        {
          id: 4,
          name: 'Chris Taylor',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Great value for money. Toppings are generous.',
        },
        {
          id: 3,
          name: 'Jessica Lee',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 3,
          review: 'Pizza was good, but I expected a bit more flavor.',
        },
        {
          id: 2,
          name: 'Michael Clark',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 5,
          review: 'Fantastic pizza! Will order again for sure.',
        },
        {
          id: 1,
          name: 'Laura Rodriguez',
          imageUrl: 'https://via.placeholder.com/150',
          rating: 4,
          review: 'Fresh ingredients and quick delivery. Highly recommended.',
        },
      ];

      setTimeout(() => {
        resolve(reviews);
      }, 1000); // Simulate a delay in fetching data
    });
  },
};

export default ReviewApi;
