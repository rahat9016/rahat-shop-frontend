import React from "react";
import CartLogo from "../../Images/card-logo.png";
const PaymentMethod = (props) => {
  return (
    <div className="bg-white">
      <div className="p-2">
        <legend className="py-1">Select a payment method</legend>
        <div className="p-2">
          <label className="cursor-pointer mb-1 flex gap-2 " htmlFor="cash">
            <input
              type={"radio"}
              name="payment"
              // defaultChecked={true}
              required="required"
              id="cash"
              value={"Home Delivery"}
              onChange={(e) => props.setPayment(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label className="cursor-pointer mb-1 flex gap-2 " htmlFor="online">
            <input
              type={"radio"}
              name="payment"
              id="online"
              value={"Online Payment"}
              onChange={(e) => props.setPayment(e.target.value)}
            />
            Online Payment
          </label>
          <label
            className="cursor-pointer mb-1 flex gap-2 "
            htmlFor="reqExpress"
          >
            <input
              type={"radio"}
              name="payment"
              id="reqExpress"
              value={"POS on Delivery"}
              onChange={(e) => props.setPayment(e.target.value)}
            />
            POS on Delivery
          </label>
          <div>
            <h1 className="font-fira font-semibold my-2">We Accept :</h1>
            <div className="mb-8">
              <img src={CartLogo} alt="cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
