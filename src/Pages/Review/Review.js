import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import StarRatings from "react-star-ratings";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById, productStar } from "../../action/product.action";

const Review = () => {
  const { product } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();
  const [star, setStar] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findProductById(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (product?.reviews && user) {
      let existingRatingObject = product.reviews.find(
        (ele) => ele.postedBy.toString() === user._id.toString()
      );
      existingRatingObject && setStar(existingRatingObject.star);
    }
  }, [product?.reviews, user]);

  const onStarClick = (newRating, name) => {
    setStar(newRating);
    dispatch(productStar(name, newRating)).then(() => {
      navigate(-1);
    });
  };
  return (
    // <Layout class="bg-bgShop h-[100vh]">
    //   <div className=" h-[100vh]">
    //     <MenuSection />
    //     <div className="flex justify-center mt-20">
    //       <div className="w-[20%] bg-white p-4 rounded-sm">
    //         <h2 className="mb-4 text-2xl text-textBlue font-fira ">
    //           Write Review
    //         </h2>
    //         <p>Product Name</p>
    //         <p className="border border-[#ddd] p-2 text-sm mb-2">
    //           {product?.name}
    //         </p>
    //         <p className="after:content-['*'] after:ml-0.5 after:text-red-500">
    //           Rating
    //         </p>
    //         <StarRatings
    //           name={id}
    //           numberOfStars={5}
    //           rating={star}
    //           starRatedColor="orange"
    //           starDimension="50px"
    //           isSelectable={true}
    //           changeRating={onStarClick}
    //         />
    //         <p className="mt-2">Your Review</p>
    //         <textarea
    //           rows={2}
    //           cols={4}
    //           placeholder="Write your review"
    //           className="w-full outline-0 border border-[#ddd] p-2"
    //         ></textarea>
    //         <button
    //           className="mt-6 w-full bg-btnBlue text-white py-2 rounded-md"
    //           type="submit"
    //         >
    //           Submit
    //         </button>
    //         <button
    //           className="mt-6 w-full border-2 border-btnBlue hover:bg-btnBlue text-textBlue hover:text-white py-2 rounded-md font-medium"
    //           type="submit"
    //         >
    //           Back
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>

    <Layout class={`bg-bgShop`}>
      <div className={"flex justify-between"}>
        <MenuSection />
      </div>
      <div className="flex justify-center mt-20">
        <div className="w-[20%] bg-white p-4 rounded-sm">
          <h2 className="mb-4 text-2xl text-textBlue font-fira ">
            Write Review
          </h2>
          <p>Product Name</p>
          <p className="border border-[#ddd] p-2 text-sm mb-2">
            {product?.name}
          </p>
          <p className="after:content-['*'] after:ml-0.5 after:text-red-500">
            Rating
          </p>
          <StarRatings
            name={id}
            numberOfStars={5}
            rating={star}
            starRatedColor="orange"
            starDimension="50px"
            isSelectable={true}
            changeRating={onStarClick}
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
    </Layout>
  );
};

export default Review;
