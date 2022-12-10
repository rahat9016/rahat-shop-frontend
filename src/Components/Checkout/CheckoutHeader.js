import React from "react";

const CheckoutHeader = ({ number, title, children }) => {
  return (
    <div className="px-4 pt-4  bg-white">
      <div className="flex items-center gap-3 border-b border-lightGray pb-2">
        <span className="w-8 h-8 bg-[#FEECEB] text-[#F44336] flex justify-center items-center rounded-full font-bold font-fira">
          {number && number}
        </span>
        <h1> {title && title} </h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CheckoutHeader;
