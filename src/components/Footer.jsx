import React from "react";
import logo from "../assets/images/knustlogo.jpg";
import { MdPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";

import { RiTwitterXFill } from "react-icons/ri";
import { TfiGoogle } from "react-icons/tfi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    // write a code to reduce a seconds in cureent time
    

  return (
    <div className="pb-10">
      <img src={logo} alt="" className="mx-auto h-24" />
      <div className="h-[1px] mx-auto bg-gray-300/50 my-5"></div>
      <div className="flex justify-center items-center">
        <MdPhone className="text-gray-500" />
        <span className="mb-1 font-bold text-gray-500 text-sm">
          +233 54 1234 569
        </span>
      </div>
      <div className="flex justify-center items-center space-x-6 my-4">
        <BiLogoFacebook className="text-gray-500" />
        <RiTwitterXFill className="text-gray-500" />
        <TfiGoogle className="text-gray-500" />
        <AiOutlineWhatsApp className="text-gray-500" />
      </div>

      <p className="text-center text-sm text-gray-500">
        &copy;copyright Enfoni {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
