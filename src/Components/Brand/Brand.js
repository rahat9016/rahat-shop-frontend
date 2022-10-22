import React from "react";
import Ram from "../../Images/ram.webp";
const Brand = () => {
  return (
    <>
      {/* Brand */}
      <div className="bg-[#F3FAFA] p-2 rounded-[10px] px-3 py-5">
        <div className="flex items-center gap-2 ">
          <div>
            <h2 className="text-green-500 font-fira font-bold text-xl">25 %</h2>
            <h3>Hot Discount on accessories</h3>
          </div>
          <div>
            <img src={Ram} alt="" className="w-24" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
