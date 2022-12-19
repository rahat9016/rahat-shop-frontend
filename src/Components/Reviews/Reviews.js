import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { BsStarHalf } from "react-icons/bs";
import StarRatings from "react-star-ratings";
const Reviews = ({ product }) => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="bg-white mt-10 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.10)] rounded-sm">
      {/* Header */}
      <div className="flex ">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Give a Review
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Ask Question
        </button>
      </div>

      <div className="content-tabs px-2">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div>
            {/* Header */}
            <div className="px-2 py-6 flex justify-between items-center  border-b-2 border-lightGray ">
              <div className="">
                <h1 className="text-xl text-primary font-bold">
                  Reviews ({product && product.reviews.length})
                </h1>
                <p className="text-primaryDark">
                  Get specific details about this product from customers who own
                  it.
                </p>
              </div>
              <button
                className="px-3  border-2 border-btnBlue hover:bg-btnBlue text-textBlue hover:text-white py-2 rounded-sm font-varelo font-medium"
                type="submit"
                onClick={() => navigate(`/review/${product?._id}`)}
              >
                Write a Review
              </button>
            </div>
            <div className="h-[200px] overflow-y-scroll scrollbar-hide">
              {product?.reviews && product?.reviews.length > 0 ? (
                <div>
                  {product?.reviews.map((item) => {
                    return (
                      <div className="py-2 ">
                        <StarRatings
                          rating={item.star}
                          starDimension="20px"
                          starSpacing="1px"
                          starRatedColor="orange"
                        />
                        <p>
                          Razer DeathAdder Essential Gaming Mouse is Good
                          product if you have relatively large hands as this
                          mouse can be a hassle to grip otherwise. Other than
                          that, it is great value for the money.
                        </p>
                        <p>
                          By{" "}
                          <span className="text-btnBlue font-semibold">
                            {item?.postedBy.firstName +
                              " " +
                              item?.postedBy.lastName}
                          </span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <BsStarHalf
                    fontSize="80px "
                    color="#3749bb"
                    className="bg-[rgba(55,73,187,.1)] p-4 rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          ASK QUESTION
        </div>
      </div>
    </div>
  );
};

export default Reviews;
