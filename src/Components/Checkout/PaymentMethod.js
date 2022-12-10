import React from "react";
import CartLogo from "../../Images/card-logo.png";
const PaymentMethod = (props) => {
  return (
    <div className="bg-white shadow-sm rounded-lg">
      <div className="p-2">
        <legend className="py-1">Select a payment method</legend>
        <div className="p-2">
          <label className="cursor-pointer mb-1 flex gap-2 " htmlFor="case">
            <input
              type={"radio"}
              name="payment"
              defaultChecked={true}
              id="case"
              value={"case"}
              onChange={props.handleChange && props.handleChange}
            />
            Cash on Delivery
          </label>
          <label className="cursor-pointer mb-1 flex gap-2 " htmlFor="online">
            <input
              type={"radio"}
              name="payment"
              id="online"
              value={"online"}
              onClick={props.handleChange && props.handleChange}
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
              value={"pos"}
              onClick={props.handleChange && props.handleChange}
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
