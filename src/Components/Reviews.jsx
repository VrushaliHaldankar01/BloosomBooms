import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviews = [
  {
    name: 'Lily Rose',
    date: 'August 14, 2024',
    rating: 5,
    comment:
      'Blossom Blooms made my wedding day extra special with their beautiful arrangements. Every bouquet was perfect!',
  },
  {
    name: 'Daisy Fields',
    date: 'July 25, 2024',
    rating: 4,
    comment:
      'Gorgeous flowers and fast delivery. A little pricey, but the quality is unmatched.',
  },
  {
    name: 'Flora Gardens',
    date: 'June 10, 2024',
    rating: 5,
    comment:
      'I ordered a bouquet for my mother’s birthday, and it was stunning. She absolutely loved it!',
  },
];

const Reviews = () => {
  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>Customer Reviews</h1>
      <div className='row'>
        {reviews.map((review, index) => (
          <div key={index} className='col-md-4 mb-4'>
            <div className='card shadow-sm border-light rounded'>
              <div className='card-body'>
                <h5 className='card-title'>{review.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{review.date}</h6>
                <div className='review-rating'>
                  {'★'.repeat(review.rating)} {'☆'.repeat(5 - review.rating)}
                </div>
                <p className='card-text mt-2'>{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
