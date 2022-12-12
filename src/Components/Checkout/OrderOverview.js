import React from "react";
import CheckoutHeader from "./CheckoutHeader";

const OrderOverview = ({
  cart,
  subTotal,
  delivery,
  afterDiscount,
  totalAmount,
}) => {
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
        <div>
          {cart &&
            cart.map((cartItem, index) => (
              <div className="flex flex-row " key={index}>
                <div className="basis-3/5 px-2 py-3 mx-[2px] rounded-sm  ">
                  <h1 className="text-darkBlack font-medium	">
                    {cartItem.name}
                  </h1>
                  <span className="text-[#66666D]">Earned Discount</span>
                </div>
                <div className="basis-1/5 px-2 py-3 mx-[2px] rounded-sm ">
                  <h1>
                    {cartItem.price}tk x {cartItem.quantity}
                  </h1>
                </div>
                <div className="basis-1/5 px-2 py-3 mx-[2px] rounded-sm">
                  <h1>
                    {" "}
                    {Math.round(
                      cartItem.price * cartItem.quantity
                    ).toLocaleString("en-US")}
                    tk
                  </h1>
                </div>
              </div>
            ))}
        </div>

        <div>
          <div className="flex border-b border-lightGray pb-2">
            <div className="basis-4/5 text-right">
              <h1 className="text-xl	">Sub-Total:-</h1>
            </div>
            <div className="basis-1/5	 text-left ml-4">
              <span className="text-xl font-semibold text-orange">
                {Math.round(subTotal()).toLocaleString("en-US")}
                {}&#36;
              </span>
            </div>
          </div>
          <div className="flex border-b border-lightGray pb-2">
            <div className="basis-4/5 text-right">
              <h1 className="text-xl	">Delivery charges:-</h1>
            </div>
            <div className="basis-1/5 text-left ml-4">
              <span className="text-xl font-semibold text-orange">
                {Math.round(delivery).toLocaleString("en-US")}
                &#36;
              </span>
            </div>
          </div>
          <div className="flex border-b border-lightGray pb-2">
            <div className="basis-4/5 text-right">
              <h1 className="text-xl	">Total:-</h1>
            </div>
            <div className="basis-1/5 text-left ml-4">
              <span className="text-xl font-semibold text-orange">
                {Math.round(totalAmount).toLocaleString("en-US")}
                &#36;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;
