import { Link } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../action/cart.action";
import { InitiateDataFunc } from "../../action/InitiateData";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import "./style.css";
const Home = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const products = useSelector((state) => state.AllProductsData);

  useEffect(() => {
    dispatch(InitiateDataFunc({ sort: "sold", order: "desc", limit: 10 }));
  }, [dispatch]);

  const handleCart = (id) => {
    dispatch(addToCart(id, quantity));
  };

  return (
    <Layout home>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-16 my-5 h-auto">
          <div className="hidden md:block">
            <MenuSection home />
          </div>
          {/* <HeroSection /> */}
        </div>
      </div>
      <div className="bg-bgShop pb-20 pt-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-fira">Best Selling</h1>
            <p className="font-fira mb-5">Check & Get Your Desired Product!</p>
          </div>
          <div className="px-2 sm:px-10 md:px-8 lg:px-4 xl:px-0 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.loading ? (
              <p>Loading...</p>
            ) : (
              products?.products?.map((product, index) => {
                console.log(product);
                return (
                  <div
                    key={product._id}
                    className={`p-3  rounded-3xl shadow-sm bg-[#fff]`}
                  >
                    <img
                      src={product?.productPictures[0].img}
                      alt=""
                      className="w-56 block ml-auto mr-auto mb-4"
                    />
                    <div>
                      <Link
                        to={`/product_id?productId=${product._id}`}
                        className="hover:text-orange mb-4 font-fira text-lg text-primaryLight"
                      >
                        {product.name.slice(0, 72)}
                      </Link>
                      <p className="text-sm">
                        {product.description.slice(0, 120)}...
                      </p>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <p className="flex  items-center font-bold">
                          <BsCurrencyDollar />
                          {product.price}
                        </p>
                        <span
                          className="px-2 py-2 rounded-xl flex items-center justify-center bg-[#E4EFE9] cursor-pointer"
                          onClick={() => handleCart(product._id)}
                        >
                          Add To Cart
                          <AiOutlineShoppingCart
                            size={`30px`}
                            color="#6BAF87"
                            className="cursor-pointer"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
