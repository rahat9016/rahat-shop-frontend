import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { BsStarHalf } from "react-icons/bs";

const Reviews = ({ id }) => {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
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
                <h1 className="text-xl text-primary font-bold">Reviews (0)</h1>
                <p className="text-primaryDark">
                  Get specific details about this product from customers who own
                  it.
                </p>
              </div>
              <button
                className="px-3  border-2 border-btnBlue hover:bg-btnBlue text-textBlue hover:text-white py-2 rounded-sm font-varelo font-medium"
                type="submit"
                onClick={() => navigate(`/review/${id}`)}
              >
                Write a Review
              </button>
            </div>
            <div className="h-[200px] flex justify-center items-center">
              <BsStarHalf
                fontSize="80px "
                color="#3749bb"
                className="bg-[rgba(55,73,187,.1)] p-4 rounded-full"
              />
              <p></p>
            </div>
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          ss
        </div>
      </div>
    </div>
  );
};

export default Reviews;
