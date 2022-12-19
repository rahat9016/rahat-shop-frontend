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
      <div className="container mx-auto">
        <div className="w-[50%] h-[50vh] mx-auto ">
          <div className="mb-20"></div>
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
