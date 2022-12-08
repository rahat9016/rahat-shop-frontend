import React, { useEffect } from "react";
import { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
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
    dispatch(InitiateDataFunc({ sort: "sold", order: "desc", limit: 5 }));
  }, [dispatch]);

  const handleCart = (id) => {
    dispatch(addToCart(id, quantity));
  };
  const handleIncrement = (product) => {
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
    <Layout home>
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-16 my-5 h-auto">
          <MenuSection home />
          <HeroSection />
        </div>
      </div>
      <div className="bg-bgShop pb-20 pt-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-fira">Best Selling</h1>
            <p className="font-fira mb-5">Check & Get Your Desired Product!</p>
          </div>
          <div className="grid grid-cols-5 gap-3 productItemContainer">
            {products.loading ? (
              <p>Loading...</p>
            ) : (
              products?.products?.map((product, index) => {
                return (
                  <div
                    key={product._id}
                    className={`p-3  rounded-3xl shadow-sm bg-[#F8F7F5]`}
                  >
                    <div
                      className={` flex items-center justify-center w-full h-[300px]`}
                    >
                      <img
                        src={product?.productPictures[0].img}
                        alt=""
                        className=""
                      />
                    </div>
                    <div className={`${"information" + index}`}>
                      <h1 className="mb-1 font-fira text-lg">{product.name}</h1>
                      <p className="text-sm">
                        {product.description.slice(0, 120)}...
                      </p>
                    </div>
                    <div
                      className={`${
                        "information" + index
                      } flex items-center justify-between mt-2`}
                    >
                      {/* Increment and Decrement button */}
                      <div className="flex bg-[#E4EFE9] rounded-md justify-between items-center">
                        <button className="px-2 py-3" onClick={handleDecrement}>
                          <AiOutlineMinus
                            fontFamily="font-fira"
                            color="#C7C7C7"
                          />
                        </button>
                        <span className="px-2 py-3 font-bold">{quantity}</span>
                        <button
                          className="px-2 py-3"
                          onClick={() => handleIncrement(product)}
                        >
                          <AiOutlinePlus
                            fontFamily="font-fira "
                            color="#6BAF87"
                          />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="flex items-center font-bold">
                          <BsCurrencyDollar />
                          {product.price}
                        </p>
                        <div className="">
                          <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#E4EFE9]">
                            <AiOutlineShoppingCart
                              size={`30px`}
                              color="#6BAF87"
                              className="cursor-pointer"
                              onClick={() => handleCart(product._id)}
                            />
                          </span>
                        </div>
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
