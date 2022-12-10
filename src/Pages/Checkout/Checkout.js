import React, { useState } from "react";
import { useSelector } from "react-redux";
import Address from "../../Components/Checkout/Address";
import CheckoutHeader from "../../Components/Checkout/CheckoutHeader";
import Coupon from "../../Components/Checkout/Coupon";
import DeliveryMethod from "../../Components/Checkout/DeliveryMethod";
import OrderOverview from "../../Components/Checkout/OrderOverview";
import PaymentMethod from "../../Components/Checkout/PaymentMethod";
import Input from "../../Components/Input/Input";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";

const Checkout = () => {
  const [delivery, setDelivery] = useState(60);
  const cart = useSelector((state) => state.cart.cartItems);
  const auth = useSelector((state) => state.auth);
  const getTotal = () => {
    return cart.reduce((currentValue, NextValue) => {
      return currentValue + NextValue.quantity * NextValue.price;
    }, 0);
  };
  const handleChange = (e) => {
    setDelivery(e.target.value);
  };
  console.log(cart);
  return (
    <Layout class={`bg-bgShop`}>
      <div className={"flex justify-between"}>
        <MenuSection />
      </div>
      <div className="container mx-auto">
        <h1 className="my-6 text-2xl font-fira ">Checkout</h1>
        <div className="">
          <div className="flex gap-2">
            {/* Customer Information */}
            <div className="w-[25%] mb-10">
              <Address />
            </div>
            {/* Payment Method */}
            <div className="w-[75%] mb-10">
              <div className="flex flex-wrap justify-between">
                <div className="w-[49.5%] shadow-sm ">
                  <CheckoutHeader number="2" title="Payment Method">
                    <PaymentMethod />
                  </CheckoutHeader>
                </div>
                {/* Delivery Method  */}
                <div className="w-[49.5%]">
                  <CheckoutHeader number="3" title="Delivery Method">
                    <DeliveryMethod handleChange={handleChange} />
                  </CheckoutHeader>
                  <Coupon />
                </div>

                <OrderOverview
                  cart={cart}
                  subTotal={getTotal}
                  delivery={delivery}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
