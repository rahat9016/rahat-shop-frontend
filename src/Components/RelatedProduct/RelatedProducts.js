import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../action/cart.action";
import Button from "../Button/Button";
const RelatedProducts = (props) => {
  const { products } = props.relateProducts;
  const dispatch = useDispatch();
  const handleClick = (_id) => {
    dispatch(addToCart(_id, 1));
  };
  return (
    <div className="p-3  bg-white mt-10 drop-shadow-[1px_1px_3px_rgba(0,0,0,0.10)] rounded-sm">
      <h1 className="text-center mb-3 py-2 text-2xl font-semibold text-textBlue font-fira border-b-2 border-lightGray">
        Related Products
      </h1>
      {products && products.length > 0 ? (
        products.map((item) => {
          return (
            <div className="flex mb-3 gap-2 border-b-2 border-lightGray ">
              <img
                width={"120px"}
                src={item && item.productPictures[0]?.img}
                alt=""
              />
              <div>
                <a
                  href={`product_id?${item?._id}/product_name=${item?.name}`}
                  className="hover:underline underline-offset-1 text-base font-medium font-roboto"
                >
                  {item?.name}
                </a>{" "}
                <p className="mb-2 text-orange font-semibold">
                  {item?.price.toLocaleString("en-US")}
                </p>
                <Button
                  class="flex justify-center  items-center gap-2 text-base transition duration-300 ease-in-out text-btnBlue font-bold hover:text-white bg-[rgba(55,75,185,.1)] hover:bg-btnBlue px-8 py-2  rounded-md w-full mb-4"
                  handleClick={() => handleClick(item._id)}
                >
                  <AiOutlineShoppingCart />
                  Buy Now
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-full  h-[200px] flex justify-center items-center">
          <p>Related product not found!</p>
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
