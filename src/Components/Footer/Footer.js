import React from "react";
import { BsInstagram, BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-footBg">
      <div className="container mx-auto pt-12">
        <div className="grid grid-cols-5 text-white gap-4">
          <div>
            <h1 className="text-lg mb-6 tracking-[3px]">SUPPORT</h1>
            <div className="flex items-center gap-2 border border-[rgba(255,255,255,.1)] rounded-full py-2 px-4 hover:border-orange font-fira mb-4">
              <BsTelephoneFill size={"40px"} className="border-r  p-2" />
              <div className="ml-2">
                <span className="block text-g text-[rgba(255,255,255,.5)]">
                  9AM - 8PM
                </span>
                <span className="block text-xl text-orange">016xxxxxxx90</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border border-[rgba(255,255,255,.1)] rounded-full py-2 px-4 hover:border-orange font-fira">
              <HiLocationMarker size={"40px"} className="border-r  p-2" />
              <div>
                <span className="block text-g text-[rgba(255,255,255,.5)]">
                  Store Location
                </span>
                <span className="block text-xl text-orange">
                  Find Our Store
                </span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="tracking-[3px] mb-6">ABOUT US</h1>
            <ul className="text-textGray ">
              <li className="hover:text-orange mb-2">EMI Terms</li>
              <li className="hover:text-orange mb-2">Privacy Policy</li>
              <li className="hover:text-orange mb-2">Star Point Policy</li>
              <li className="hover:text-orange mb-2">Brands</li>
            </ul>
          </div>
          <div>
            <ul className="mt-12 text-textGray">
              <li className="hover:text-orange mb-2">About Us</li>
              <li className="hover:text-orange mb-2">Terms and Conditions</li>
              <li className="hover:text-orange mb-2">Blog</li>
              <li className="text-orange mb-2 hover:underline">
                Online Service Support
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-12 text-textGray">
              <li className="hover:text-orange mb-2">Online Delivery</li>
              <li className="hover:text-orange mb-2">
                Refund and Return Policy
              </li>
              <li className="hover:text-orange mb-2">Contact Us</li>
              <li className="text-orange mb-2">Complain / Advice</li>
            </ul>
          </div>
          <div>
            <h1 className="tracking-[3px] mb-6">STAY CONNECTED</h1>
            <ul>
              <li className="mb-2">Star Tech & Engineering Ltd</li>
              <li className="mb-2 text-textGray">
                Head Office: 28 Kazi Nazrul Islam <br /> Ave,Navana Zohura
                Square, Dhaka 1000
              </li>
              <li>
                Email: <br />{" "}
                <span className="text-orange">
                  minhajurrohoman9016@gmail.com
                </span>
              </li>
            </ul>
            <ul className="flex gap-3 mt-2">
              <li className="w-12 h-12 bg-[rgba(255,255,255,.1)] hover:bg-[#3b5998] rounded-full flex items-center justify-center hover">
                <FaFacebookF />
              </li>
              <li className="w-12 h-12 bg-[rgba(255,255,255,.1)] rounded-full flex items-center justify-center hover:bg-[#FF0000]">
                <IoLogoYoutube />
              </li>
              <li className="w-12 h-12 bg-[rgba(255,255,255,.1)] rounded-full flex items-center justify-center hover:bg-[#fccc63]">
                <BsInstagram />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-textGray  border-t flex justify-between border-[rgba(255,255,255,.1)] py-6 mt-8">
          <span className="text-xs">
            © 2020 Minhajur Rohoman Rahat | All rights reserved
          </span>
          <span className="text-xs">Powered By: Human Search Tech</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
