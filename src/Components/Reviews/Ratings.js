import React from "react";
import StarRatings from "react-star-ratings";
const Ratings = ({ product }) => {
  if (product && product.reviews) {
    let reviewsArray = product && product.reviews;
    let total = [];
    let length = reviewsArray.length;
    reviewsArray.map((r) => total.push(r.star));
    let totalReduced = total.reduce((p, n) => p + n, 0);
    let highest = length * 5;

    let result = (totalReduced * 5) / highest;

    return (
      <div className="flex items-center">
        <StarRatings
          rating={result}
          starDimension="20px"
          starSpacing="1px"
          starRatedColor="orange"
        />
      </div>
    );
  }
};

export default Ratings;
