import React, { useState } from "react";
import { information, renderCategory } from "../../Data/Data";
import Logo from "../../Images/logo.png";
import { MdCall } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import Cart from "./components/cart";
import { useSelector } from "react-redux";
const Header = ({ home }) => {
  const { category } = useSelector((state) => state.category);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <header>
      {home ? (
        <div>
          {/* Top header */}
          <div className="bg-primary">
            <div className="grid grid-cols-3  max-w-7xl mx-auto text-white items-center md:px-0 px-3 py-2 relative">
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className="w-fit text-3xl md:hidden text-white cursor-pointer"
              >
                {open ? (
                  <CgClose className="text-3xl text-white" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-3xl text-white" />
                )}
              </div>
              <img
                src={Logo}
                alt="Logo"
                className="w-12 sm:w-16 block lg:inline ml-auto mr-auto lg:ml-0 lg:mr-0 cursor-pointer"
                onClick={() => navigate("/")}
              />
              {/* Menu Section */}
              <ul className="hidden md:flex gap-6">
                {information.length > 0
                  ? information.map((item, index) => (
                      <li
                        key={index}
                        className="font-fira text-sm lg:text-base "
                      >
                        <a href={item.link} className="">
                          {item.value}
                        </a>
                      </li>
                    ))
                  : null}
              </ul>
              {/* Contact Section */}
              <div className="hidden md:flex items-center justify-end gap-3 font-fira ">
                {/* Mobile Number */}
                <div className="flex items-center gap-1 text-sm lg:text-base">
                  <MdCall />
                  +880 16386****90
                </div>
                <div className="flex items-center gap-1 text-sm lg:text-base">
                  <RiMessage2Fill />
                  Send Message
                </div>
              </div>
              <div className="md:hidden pr-2">
                <Cart />
              </div>
            </div>
          </div>
          {/* Header */}
          <div className="md:bg-primaryDark hidden md:block">
            <div className=" flex items-center py-2 max-w-7xl mx-auto">
              <div className=" items-center w-96 gap-3 hidden md:flex">
                <HiOutlineMenuAlt3 className="text-3xl text-white " />
                <h2 className="text-2xl text-white font-fira ">
                  Shop by Category
                </h2>
              </div>
              {/* Search Section */}
              <Search />
              <div className="hidden md:block">
                <Cart />
              </div>
            </div>
          </div>
          {/* Responsive Menu */}
          {
            <div
              className={`md:hidden absolute top-[60px] z-50 w-full bg-white shadow-sm duration-500 ${
                open ? "left-0" : "left-[-100%]"
              }`}
            >
              {<ul className="list-none px-3">{renderCategory(category)}</ul>}
            </div>
          }
        </div>
      ) : (
        // <<<----------------------------------------------------->>>
        <div>
          <div className="bg-primaryDark relative">
            <div className=" grid grid-cols-3  max-w-7xl mx-auto text-white items-center md:px-0 px-3 py-2 relative">
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className="w-fit text-3xl md:hidden text-white cursor-pointer"
              >
                {open ? (
                  <CgClose className="text-3xl text-white" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-3xl text-white" />
                )}
              </div>
              <img
                src={Logo}
                alt="Logo"
                className="w-12 sm:w-16 block lg:inline ml-auto mr-auto lg:ml-0 lg:mr-0 cursor-pointer"
                onClick={() => navigate("/")}
              />
              <Search />
              <div className="flex justify-end">
                <Cart home />
              </div>
            </div>
          </div>

          <div
            className={`md:hidden absolute top-[78px] z-50 w-full bg-white shadow-sm duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            {<ul className="list-none px-3">{renderCategory(category)}</ul>}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
