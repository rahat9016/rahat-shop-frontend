import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Auth from "./auth";

const Cart = ({ home }) => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <div className="flex flex-row-reverse md:flex-row items-center gap-3 ml-8 ">
      <AiOutlineHeart className="text-2xl text-white cursor-pointer hidden md:block" />
      <div className={`relative `}>
        <AiOutlineShoppingCart
          className={`text-2xl text-white cursor-pointer z-50 `}
          onClick={() => navigate("/cart")}
        />
        <p className="top-[-8px] left-3 absolute  text-white  rounded-full  p-0 bg-orange w-5 h-5 flex items-center justify-center">
          {cart.length}
        </p>
      </div>
      <FiSearch
        className={`text-white font-bold text-2xl ${
          home ? "md:hidden" : "hidden"
        }`}
      />
      <div className={` hidden md:block`}>
        <Auth />
      </div>
    </div>
  );
};

export default Cart;
