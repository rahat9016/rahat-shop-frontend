import React from "react";

const DeliveryMethod = (props) => {
  return (
    <div className="bg-white">
      <div className="p-2">
        <legend className="py-1">Select a delivery method</legend>
        <div className="p-2">
          <label className="cursor-pointer mb-1 flex gap-2 " htmlFor="home">
            <input
              type={"radio"}
              name="shipping"
              defaultChecked={true}
              id="home"
              value={60}
              onChange={props.handleChange && props.handleChange}
            />
            Home Delivery - 60৳
          </label>
          <label className="cursor-pointer mb-1 flex gap-2 " htmlFor="store">
            <input
              type={"radio"}
              name="shipping"
              id="store"
              value={0}
              onChange={props.handleChange && props.handleChange}
            />
            Store Pickup - 0৳
          </label>
          <label
            className="cursor-pointer mb-1 flex gap-2 "
            htmlFor="reqExpress"
          >
            <input
              type={"radio"}
              name="shipping"
              id="reqExpress"
              value={0}
              onChange={props.handleChange && props.handleChange}
            />
            Request Express - Charge Applicable
          </label>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMethod;
