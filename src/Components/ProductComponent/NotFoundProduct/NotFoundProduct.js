import React from "react";
import { MdOutlineAssignment } from "react-icons/md";
const NotFoundProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px]">
      <div className="bg-[rgba(55,73,187,.1)] w-20 h-20 rounded-full flex items-center justify-center">
        <MdOutlineAssignment fontSize="50px " className=" text-[#3749bb]" />
      </div>
      <div className="text-center mt-5">
        <p className="text-[#6F6666] font-bold">Sorry! No Product Founds</p>
        <p className="font-fira">Please try searching for something else</p>
      </div>
    </div>
  );
};

export default NotFoundProduct;
