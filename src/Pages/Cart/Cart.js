import React from "react";
import { useSelector } from "react-redux";
import CartProductItem from "../../Components/CartProductItem/CartProductItem";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import ShoppingCartEmpty from "../../Components/ShoppingCartEmpty/ShoppingCartEmpty";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const getTotal = () => {
    return cart.reduce((currentValue, NextValue) => {
      return currentValue + NextValue.quantity * NextValue.price;
    }, 0);
  };
  return (
    <Layout class="bg-bgShop h-[100vh]">
      <div className="flex justify-between ">
        <MenuSection />
      </div>
      <div className=" ">
        {cart.length > 0 ? (
          <div className="container mx-auto  mt-8 bg-white rounded-sm p-4">
            <h1 className="text-2xl font-fira">Shopping Cart</h1>
            <div>
              <ul className="flex flex-row mt-4">
                <li className="basis-1/4 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                  Image
                </li>
                <li className="basis-1/2 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                  Product Name
                </li>
                <li className="basis-1/2 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                  Model
                </li>
                <li className="basis-1/4 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                  Quantity
                </li>

                <li className="basis-1/4 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                  Unit Price
                </li>
                <li className="basis-1/4 bg-bgShop px-2 py-3 mx-[2px] rounded-sm">
                  Total
                </li>
              </ul>
            </div>
            <div>
              {cart.length > 0
                ? cart.map((cartItem, index) => (
                    <CartProductItem cartItem={cartItem} key={index} />
                  ))
                : null}
            </div>
            <div className="flex justify-end ">
              <div>
                <h1 className="my-10 border-b border-lightGray pb-5 text-xl  ">
                  Total :-{" "}
                  <span className="text-orange font-semibold">
                    {getTotal()}
                  </span>
                </h1>
                <button className="font-fira font-base text-lg bg-btnBlue px-16 py-2 text-white mb-6 rounded-md">
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : (
          <ShoppingCartEmpty />
        )}
      </div>
    </Layout>
  );
};
// ShoppingCartEmpty

export default Cart;
