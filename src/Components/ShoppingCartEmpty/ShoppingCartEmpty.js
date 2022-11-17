import React from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCartEmpty = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="text-center m-20">
        <h1 className="font-fira text-2xl">Shopping Cart</h1>
        <p>Your shopping cart is empty!</p>
        <button
          className="bg-btnBlue text-white px-4 p-2 rounded-sm mt-2"
          onClick={() => navigate("/")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartEmpty;
