import React from "react";
import { information } from "../../Data/Data";
import Logo from "../../Images/logo.png";
import { MdCall } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Search from "../Search/Search";
import { useNavigate } from "react-router-dom";
import Cart from "./components/cart";
const Header = ({ home }) => {
  const navigate = useNavigate();

  return (
    <header>
      {home ? (
        <div>
          {/* Top header */}
          <div className="bg-primary">
            <div className="flex justify-between max-w-7xl mx-auto text-white items-center md:px-0 px-2 py-2">
              {/* Logo Section */}
              <HiOutlineMenuAlt3 className="text-3xl md:hidden text-white" />
              <img
                src={Logo}
                alt="Logo"
                className="w-12 sm:w-16 cursor-pointer"
                onClick={() => navigate("/")}
              />
              {/* Menu Section */}
              <ul className="hidden md:flex gap-6">
                {information.length > 0
                  ? information.map((item, index) => (
                      <li key={index} className="font-fira ">
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
                <div className="flex items-center gap-1">
                  <MdCall />
                  +880 16386****90
                </div>
                <div className="flex items-center gap-1">
                  <RiMessage2Fill />
                  Send Message
                </div>
              </div>
            </div>
          </div>
          {/* Header */}
          <div className="bg-primaryDark">
            <div className=" flex items-center py-2 max-w-7xl mx-auto">
              <div className=" items-center w-96 gap-3 hidden md:flex">
                <HiOutlineMenuAlt3 className="text-3xl text-white " />
                <h2 className="text-2xl text-white font-fira ">
                  Shop by Category
                </h2>
              </div>
              {/* Search Section */}
              <Search />
              <Cart />
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Header */}
          <div className="bg-primaryDark">
            <div className=" flex justify-between  items-center py-2 max-w-7xl mx-auto px-3 lg:px-0">
              <HiOutlineMenuAlt3 className="text-3xl md:hidden text-white" />
              <img
                src={Logo}
                alt="Logo"
                className="w-16 cursor-pointer"
                onClick={() => navigate("/")}
              />
              {/* Search Section */}
              <Search />
              <Cart home />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
