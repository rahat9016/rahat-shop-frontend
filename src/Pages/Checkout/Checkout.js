import React from "react";
import Address from "../../Components/Checkout/Address";
import CheckoutHeader from "../../Components/Checkout/CheckoutHeader";
import OrderOverview from "../../Components/Checkout/OrderOverview";
import Input from "../../Components/Input/Input";
import Layout from "../../Components/Layout/Layout";
import MenuSection from "../../Components/Menu/MenuSection";

const Checkout = () => {
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
                <div className="w-[49.5%] shadow-sm">
                  <CheckoutHeader number="2" title="Payment Method" />
                </div>
                {/* Delivery Method  */}
                <div className="w-[49.5%] shadow-sm">
                  <CheckoutHeader number="3" title="Delivery Method" />
                </div>

                <div className="w-full flex h-20 bg-white mt-5 mb-5 items-center p-4 rounded-lg gap-3 shadow-sm">
                  <Input
                    text="text"
                    name="coupon"
                    class="p-2  border border-gray rounded-md outline-none focus:border-gray w-1/5	h-8"
                    placeholder="Promo / Coupon code"
                  />
                  <button
                    className="text-base border-2 rounded border-btnBlue text-textBlue font-medium h-8 text-center px-3"
                    // onClick={handleCart}
                  >
                    Apply Coupon
                  </button>
                </div>
                <OrderOverview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
