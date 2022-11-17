import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { MdOutlineStarHalf } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../action/product.action";
import { addToCart } from "../../action/cart.action";
const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = location.search.split("?")[1].split("/")[0];
  const { product } = useSelector((state) => state.product);
  // destructure product image
  const proImg = product && product?.productPictures[0].img;
  const [singleProductImage, setSingleProductImage] = useState();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setSingleProductImage(proImg);
  }, [proImg]);
  const hoverHandler = (image, i) => {
    setSingleProductImage(image);
  };
  // Find Product By ID
  useEffect(() => {
    dispatch(findProductById(params));
  }, [dispatch, params]);

  const handleCart = () => {
    dispatch(addToCart(product?._id, quantity));
  };

  const handleIncrement = () => {
    if (product.quantity <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      const qty = quantity - 1;
      setQuantity(qty);
    }
  };
  return (
    <Layout>
      <div className=" h-[100vh]">
        <MenuSection />
        <div className="container mx-auto py-5">
          <div className="flex">
            {/* Product Images */}
            <div className="w-[40%] flex flex-col items-center gap-4">
              <div className="text-center w-full h-[500px] ">
                <img
                  src={singleProductImage}
                  className="w-[80%] h-fit inline "
                  alt=""
                />
              </div>
              <div className="flex flex-row gap-1">
                {product &&
                  product.productPictures.map((productImg, i) => {
                    return (
                      <img
                        key={i}
                        src={productImg?.img}
                        alt=""
                        className="w-16 h-16 p-1 cursor-pointer border border-lightWhite shadow-sm"
                        onMouseOver={() => hoverHandler(productImg?.img, i)}
                      />
                    );
                  })}
              </div>
            </div>
            {/* Product Information */}
            <div className="w-[60%]">
              <h1 className="text-3xl	text-textBlue mb-4 font-plus">
                {product && product.name}
              </h1>

              <div className="flex items-center gap-3">
                <span className="text-sm px-4 py-2 bg-bgShop font-quick font-bold rounded-full">
                  <span className="text-textGray font-medium ">Price: </span>
                  {product && product.price}৳
                </span>
                <span className="text-sm px-4 py-2 bg-bgShop font-quick font-bold rounded-full">
                  <span className="text-textGray font-medium ">Status: </span>
                  In Stoke
                </span>
                <span className="text-sm px-4 py-2 bg-bgShop font-quick font-bold rounded-full">
                  <span className="text-textGray font-medium ">Brand: </span>
                  {product && product?.brand.name}
                </span>
              </div>
              <div className="flex mt-3 items-center">
                <AiFillStar className="text-[#FFD500] text-lg" />
                <AiFillStar className="text-[#FFD500] text-lg" />
                <AiFillStar className="text-[#FFD500] text-lg" />
                <MdOutlineStarHalf className="text-[#FFD500] text-lg" />
                <AiOutlineStar className="text-[#FFD500] text-lg" />
                <p className="ml-2 text-[#1a9cb7]">27 Ratings</p>
              </div>
              <div className="my-5">
                <h2 className="text-2xl mb-2">Key Features</h2>
                <ul className="list-none text-primaryLight text-[15px]">
                  {product &&
                    product.keyFeatures.map((feature) => (
                      <li key={feature._id} className="mb-1 text-base">
                        {feature.key}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="">
                <div className="flex items-center ">
                  <button
                    className="border border-lightWhite px-3 py-3"
                    onClick={handleDecrement}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span className="border border-lightWhite px-5 py-2  ">
                    {quantity}
                  </span>
                  <button
                    className="border border-lightWhite px-3 py-3"
                    onClick={handleIncrement}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <div className="flex gap-3 mt-5">
                  <button className="text-lg bg-orange px-16 py-2  text-white">
                    Buy Now
                  </button>
                  <button
                    className="text-lg bg-btnBlue px-16 py-2 text-white"
                    onClick={handleCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl mb-2">Description</h3>
                <p className="text-justify">{product && product.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div>{/* <h1>Related Products</h1> */}</div>
      </div>
    </Layout>
  );
};

export default Product;
