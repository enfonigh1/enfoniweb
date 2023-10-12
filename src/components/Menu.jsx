import React from "react";
import { NavLink } from "react-router-dom";
import Kentecloth from "../assets/images/Kentecloth.svg";
import {AiFillCloseCircle} from 'react-icons/ai'
import {BiSolidDashboard} from "react-icons/bi";
import enfoni from "../assets/images/enfoni.svg";

export const Menu = ({closeMenu}) => {

  const gradientStyle = {
    // background: "linear-gradient(to bottom right, #3FD494, #0CE301)",
    backgroundColor: "#537d3d",
    color: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
  };

  const imageUrl = `url(${Kentecloth})`;

  return (
    <div className="md:hidden fixed z-[2001] top-0 bottom-0 bg-white left-0 right-24 flex flex-col justify-center items-center "
    data-aos="fade-right"
    data-aos-duration="500"
    >
      <div className="absolute right-4 z-[1000] top-3 md:hidden sm:block" onClick={closeMenu}><AiFillCloseCircle className="text-[35px] text-zinc-600" /></div>
        
      <div data-aos="zoom-in"
           data-aos-duration="1000"          
      >

            <div className="-mt-24">
            <NavLink
              to="/order-history"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-8 lg:my-5 py-3 pl-4 pr-4 justify-center"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <BiSolidDashboard className="mr-3" />
              Order history
            </NavLink>
            <NavLink
              to="/saved-items"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-8 lg:my-5 py-3 pl-4 pr-4 justify-center track-[10px]"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
            data-aos-delay="400"
            >
              <BiSolidDashboard className="mr-3" />
              Saved items
            </NavLink>
            <NavLink
              to="/my-photoshoots"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-8 lg:my-5 py-3 pl-4 pr-4 justify-center track-[10px]"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
            data-aos-delay="500"
            >
              <BiSolidDashboard className="mr-3" />
              My photos
            </NavLink>
            <NavLink
              to="/Frames"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-8 lg:my-5 py-3 pl-4 pr-4 justify-center track-[10px]"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
            data-aos-delay="500"
            >
              <BiSolidDashboard className="mr-3" />
              Frames
            </NavLink>
            </div>
      </div>
      <div className="footer flex flex-col mb-1">
          <p className="text-[#537d3d] uppercase font-bold tracking-[2px] w-full  mb-4 flash-element">Hello, Mike</p>
        
        <hr className="border-0 h-[2px] w-full mb-4 bg-slate-400 "/>
        <p className="whitespace-normal flex justify-center overflow-hidden break-words text-[#537d3d] w-full text-[12px] uppercase font-bold text-center  mb-4">
          Kwame Nkrumah University<br /> of Science and Technology</p>
          </div>
          <div className="hero-footerflex justify-center items-center flex-col z-10">
            <div className="logo">
            <img src={enfoni} alt="enfoni-logo " className="object-cover block mx-auto w-full"/>
            </div>
            
          </div>
          <div className="kente absolute bottom-0 w-full bg-no-repeat bg-cover" style={{backgroundImage: imageUrl}}>
              <img src={Kentecloth} alt="" className="object-cover w-full h-full block  mx-auto mix-blend-darken"/>
          </div>
    </div>
  );
};
