import React from "react";
import CheckoutHeader from "./CheckoutHeader";

const OrderOverview = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <CheckoutHeader number="4" title="Order Overview" />
      <div className="px-4 pb-4">
        <ul className="flex flex-row ">
          <li className="basis-3/5 bg-bgShop px-2 py-3 mx-[2px] rounded-sm text-[#66666D] font-semibold	">
            Product Name
          </li>

          <li className="basis-1/5 bg-bgShop px-2 py-3 mx-[2px] rounded-sm text-[#66666D] font-semibold	">
            Price
          </li>
          <li className="basis-1/5 bg-bgShop px-2 py-3 mx-[2px] rounded-sm text-[#66666D] font-semibold	">
            Total
          </li>
        </ul>
        <div className="flex flex-row ">
          <div className="basis-3/5 px-2 py-3 mx-[2px] rounded-sm  ">
            <h1 className="text-darkBlack font-medium	">
              Samsung Galaxy Book Pro 180 Core i7 11th Gen 2-in-1 15.6" FHD
              Touch Laptop
            </h1>
            <span className="text-[#66666D]">Earned Discount</span>
          </div>
          <div className="basis-1/5 px-2 py-3 mx-[2px] rounded-sm ">
            <h1>192,000tk x 1</h1>
          </div>
          <div className="basis-1/5 px-2 py-3 mx-[2px] rounded-sm">
            <h1> {Math.round(192000 * 2).toLocaleString("en-US")}tk</h1>
          </div>
        </div>

        <div>
          <div className="flex border-b border-lightGray pb-2">
            <div className="basis-4/5 text-right">
              <h1 className="text-xl	">Sub-Total:-</h1>
            </div>
            <div className="basis-1/5	 text-center">
              <span className="text-xl font-semibold text-orange">
                59,000tk
              </span>
            </div>
          </div>
          <div className="flex border-b border-lightGray pb-2">
            <div className="basis-4/5 text-right">
              <h1 className="text-xl	">Home Delivery:-</h1>
            </div>
            <div className="basis-1/5 text-center">
              <span className="text-xl font-semibold text-orange">0tk</span>
            </div>
          </div>
          <div className="flex border-b border-lightGray pb-2">
            <div className="basis-4/5 text-right">
              <h1 className="text-xl	">Total:-</h1>
            </div>
            <div className="basis-1/5 text-center">
              <span className="text-xl font-semibold text-orange">20000tk</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
