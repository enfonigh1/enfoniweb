import React from "react";
import { NavLink } from "react-router-dom";
import ppic from '../assets/images/ppic.svg'
import {AiFillCloseCircle} from 'react-icons/ai'

export const Menu = ({closeMenu}) => {

  const gradientStyle = {
    background: "linear-gradient(to bottom right, #3FD494, #0CE301)",
    color: "#fff",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
  };
  return (
    <div className="md:hidden absolute z-50 top-0 bottom-0 bg-slate-50 left-0 right-0 flex flex-col justify-center px-20 py-12"
    data-aos="fade-right"
    data-aos-duration="500"
    >
      <div className="absolute right-4 top-3 md:hidden sm:block" onClick={closeMenu}><AiFillCloseCircle className="text-[35px] text-zinc-600" /></div>
        <img src={ppic} alt="profile-image" className="" />
        <h3 className="font-bold mt-6 capitalize -mb-3 text-center">Hello Enfonison</h3>
        <small className=" mb-6  pl-2 text-slate-500 text-[.5rem] text-center">
          enfonienfonison@gmail.com
        </small>
      <div data-aos="zoom-in"
           data-aos-duration="1000"          
      >

      
      <NavLink
        to="/dashboard"
        className="my-2 text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded  block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/appointment"
        className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        Appointment
      </NavLink>
      <NavLink
        to="/order-history"
        className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        Order history
      </NavLink>
      <NavLink
        to="/saved-items"
        className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        Saved items
      </NavLink>
      <NavLink
        to="/cart"
        className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        Cart
      </NavLink>
      <NavLink
        to="/my-gown"
        className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        My gowns
      </NavLink>
      <NavLink
        to="/my-photoshoots"
        className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        My photoshoots
      </NavLink>
      <NavLink
        to="merchandise"
        className="my-2  text-black text-[.9rem] px-2 font-medium font-['Poppins'] rounded block hover:bg-gradient-to-br from-color1 to-color2 hover:text-white"
        style={({ isActive }) => (isActive ? gradientStyle : {})}
      >
        My merch
      </NavLink>
      </div>
    </div>
  );
};
