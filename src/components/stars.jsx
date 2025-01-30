import React from 'react';

const StarRating = ({ formData, setFormData }) => {
  const handleRatingChange = (value) => {
    setFormData({
      ...formData,
      rating: value
    });
  };

  return (
    <div className="container">
      <h1>Trakya Hijyen</h1>
      <p>Puanlama</p>
      <div className="star-rating">
        <input
          type="radio"
          id="star5"
          name="rating"
          value="5"
          checked={formData.rating === 5}
          onChange={() => handleRatingChange(5)}
        />
        <label htmlFor="star5">★</label>

        <input
          type="radio"
          id="star4"
          name="rating"
          value="4"
          checked={formData.rating === 4}
          onChange={() => handleRatingChange(4)}
        />
        <label htmlFor="star4">★</label>

        <input
          type="radio"
          id="star3"
          name="rating"
          value="3"
          checked={formData.rating === 3}
          onChange={() => handleRatingChange(3)}
        />
        <label htmlFor="star3">★</label>

        <input
          type="radio"
          id="star2"
          name="rating"
          value="2"
          checked={formData.rating === 2}
          onChange={() => handleRatingChange(2)}
        />
        <label htmlFor="star2">★</label>

        <input
          type="radio"
          id="star1"
          name="rating"
          value="1"
          checked={formData.rating === 1}
          onChange={() => handleRatingChange(1)}
        />
        <label htmlFor="star1">★</label>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 20px;
        }

        h1 {
          margin-bottom: 20px;
        }

        .star-rating {
          direction: rtl;
          display: inline-flex;
          gap: 5px;
        }

        .star-rating input {
          display: none;
        }

        .star-rating label {
          font-size: 40px;
          color: #ddd;
          cursor: pointer;
          transition: color 0.2s;
        }

        .star-rating label:hover,
        .star-rating label:hover ~ label {
          color: gold;
        }

        .star-rating input:checked ~ label {
          color: gold;
        }
      `}</style>
    </div>
  );
};

export default StarRating;