import React from "react";
// import Kentecloth from "../assets/images/kentecloth.svg";
import enfoni from "../assets/images/enfoni.svg";
import {BiSolidDashboard} from "react-icons/bi";


import { NavLink } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const gradientStyle = {
    // background: "linear-gradient(to bottom right, #3FD494, #0CE301)",
    backgroundColor: "#537d3d",
    color: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
  };


  // const imageUrl = `url(${Kentecloth})`;
  

  return (
    <div className="w-[100%] flex flex-wrap h-screen  justify-between ">
      <div className=" hidden md:block md:basis-[30%] lg:basis-[20%] w-[100%] h-screen overflow-y-auto">
        <div className="overflow-y-scroll scrollbar-hide flex items-center wrap  h-screen flex-col relative">
          {/* <div className="top w-[100%] relative z-[999] flex justify-center bg-white py-0">
            <NavLink
              to="/dashboard"
              className="font-semibold text-[12.78px] lg:text-[20px] font-['Poppins'] rounded flex items-center italic  text-white bg-[#537d3d] hover:text-white w-fit capitalize my-8 lg:my-5 py-3 pl-4 pr-12"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              // data-aos="flip-up"
              data-aos-duration="1000"
            >
              Print Selected
            </NavLink>
          </div> */}

          <div className="middle mt-28">

      
            <NavLink
              to="/order-history"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-14 lg:my-5 py-3 pl-4 pr-4 justify-center"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <BiSolidDashboard className="mr-3" />
              Order history
            </NavLink>
            <NavLink
              to="/saved-items"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-14 lg:my-5 py-3 pl-4 pr-4 justify-center track-[10px]"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
            data-aos-delay="400"
            >
              <BiSolidDashboard className="mr-3" />
              Saved items
            </NavLink>
            <NavLink
              to="/my-photoshoots"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-14 lg:my-5 py-3 pl-4 pr-4 justify-center track-[10px]"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
            data-aos-delay="500"
            >
              <BiSolidDashboard className="mr-3" />
              My photos
            </NavLink>
            <NavLink
              to="/Frames"
              className=" font-[900] text-[16px] font-['Poppins'] rounded flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize my-14 lg:my-5 py-3 pl-4 pr-4 justify-center track-[10px]"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
            data-aos-delay="500"
            >
              <BiSolidDashboard className="mr-3" />
              Frames
            </NavLink>
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
          <div className="kente absolute bottom-0 w-full bg-no-repeat bg-cover" style={{backgroundImage: ""}}>
              {/* <img src={Kentecloth} alt="" className="object-cover w-full h-full block  mx-auto mix-blend-darken"/> */}
            </div>
        </div>
        

      
      </div>
      <div className="md:basis-[70%] lg:basis-[80%] basis-[100%] flex justify-cente h-screen bg-[#d7dfd1] overflow-y-scroll ">{children}</div>
    </div>
  );
};
export default DashboardLayout;
