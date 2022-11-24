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
          <div className=" bg-primary ">
            <div className="flex items-center justify-between text-white py-2 container mx-auto">
              {/* Logo Section */}
              <div>
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-16  cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              {/* Menu Section */}
              <div>
                <ul className="flex gap-6">
                  {information.length > 0
                    ? information.map((item, index) => (
                        <li key={index} className="font-fira">
                          <a href={item.link}>{item.value}</a>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
              {/* Contact Section */}
              <div className="flex items-center gap-3 font-fira">
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
            <div className=" flex  items-center py-2 container mx-auto">
              <div className="flex items-center w-96 gap-3">
                <HiOutlineMenuAlt3 className="text-3xl text-white " />
                <h2 className="text-2xl text-white font-fira">
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
            <div className=" flex  items-center py-2 container mx-auto">
              <div className="w-72">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-16 cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              {/* Search Section */}
              <Search />
              <Cart />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
