import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const ToggleMenu = (props) => {
  const [toggle, setToggle] = useState(true);
  const handlerToggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div
      className={`w-full h-fit py-4 px-2 bg-white rounded-md ${
        toggle ? "shadow-sm" : "shadow-md"
      }`}
    >
      <div
        className={`flex justify-between items-center pb-2 cursor-pointer relative ${
          toggle ? "border-b-[1px] border-slate-200" : ""
        }`}
        onClick={handlerToggler}
      >
        <p>{props.title}</p>
        <MdOutlineKeyboardArrowDown
          className={`${
            toggle
              ? "rotate-180 transition ease-in-out duration-700"
              : "transition ease-in-out duration-700"
          }`}
        />
      </div>
      {toggle ? <div className="px-3 mt-1">{props.children}</div> : null}
    </div>
  );
};

export default ToggleMenu;
