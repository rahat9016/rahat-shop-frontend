import React from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
// import StarRatings from "./react-star-ratings";
import StarRatings from "react-star-ratings";
const Review = () => {
  return (
    <Layout class="bg-bgShop h-[100vh]">
      <div className=" h-[100vh]">
        <MenuSection />
        <div className="flex justify-center mt-20">
          <div className="w-[20%] bg-white p-4 rounded-sm">
            <h2 className="mb-4 text-2xl text-textBlue font-fira ">
              Write Review
            </h2>
            <p>Product Name</p>
            <p className="border border-[#ddd] p-2 text-sm mb-2">
              Samsung Galaxy Book Pro 180 Core i7 11th Gen 2-in-1 15.6" FHD
              Touch Laptop
            </p>
            <p className="after:content-['*'] after:ml-0.5 after:text-red-500">
              Rating
            </p>
            <StarRatings
              numberOfStars={5}
              rating={2}
              starRatedColor="orange"
              starDimension="50px"
            />
            <p className="mt-2">Your Review</p>
            <textarea
              rows={2}
              cols={4}
              placeholder="Write your review"
              className="w-full outline-0 border border-[#ddd] p-2"
            ></textarea>
            <button
              className="mt-6 w-full bg-btnBlue text-white py-2 rounded-md"
              type="submit"
            >
              Submit
            </button>
            <button
              className="mt-6 w-full border-2 border-btnBlue hover:bg-btnBlue text-textBlue hover:text-white py-2 rounded-md font-medium"
              type="submit"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Review;
