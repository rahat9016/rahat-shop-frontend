import React from "react";
import Input from "../Input/Input";

const Coupon = () => {
  return (
    <div className="w-full flex  h-20 bg-white mt-2 mb-5 items-center p-4 gap-3 shadow-sm">
      <Input
        text="text"
        name="coupon"
        class="p-2  border border-gray rounded-md outline-none focus:border-gray w-[70%]  h-10"
        placeholder="Promo / Coupon code"
      />
      <button
        className="text-base border-2 rounded border-btnBlue text-textBlue font-medium h-10 text-center px-2"
        // onClick={handleCart}
      >
        Apply Coupon
      </button>
    </div>
  );
};

export default Coupon;
