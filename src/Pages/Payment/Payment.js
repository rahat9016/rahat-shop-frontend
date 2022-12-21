import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "../../Components/Stripe/Stripe";
const Payment = () => {
  const promise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);
  return (
    <Layout class={`bg-bgShop`}>
      <div className={"flex justify-between"}>
        <MenuSection />
      </div>
      <div className="max-w-7xl mx-auto py-48 px-2">
        <div className="lg:w-[60%] mx-auto bg-white shadow-sm px-5 pl-8 lg:pl-5  py-5 rounded-sm">
          <h1>Your Payment</h1>
          <div>
            <Elements stripe={promise}>
              <Stripe />
            </Elements>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
