import React from "react";
import Kentecloth from "../assets/images/Kentecloth.svg";
import enfoni from "../assets/images/enfoni.svg";
import {BiSolidDashboard} from "react-icons/bi";
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BsFillBookFill} from 'react-icons/bs';
import {GiWoodFrame} from 'react-icons/gi';
import { NavLink } from "react-router-dom";
import Profile from "../components/profile";
import { useSelector } from "react-redux";
import { pcliecked } from "../app/features/profile/profileSlice";
import { auth, authuser, userinfo } from "../app/features/authSlice/authSlice";
import {IoChevronBackCircleSharp} from 'react-icons/io5'
const DashboardLayout = ({ show = true, children }) => {
  const gradientStyle = {
    backgroundColor: "#537d3d",
    color: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
  };


  const imageUrl = `url(${Kentecloth})`;

  const details = useSelector(authuser)
  
  
  const profileclicked = useSelector(pcliecked)
  return (
    <div className="w-[100%] flex h-screen  justify-between ">
      <div className=" hidden md:block md: md:basis-[30%] lg:basis-[20%] w-[100%] h-screen overflow-y-auto">
        <div className="overflow-y-scroll scrollbar-hide flex items-center wrap  h-screen flex-col relative">
         <NavLink to="" className="absolute top-8 2xl:top-12 text-xl 2xl:text-2xl text-zinc-600  z-[20000]">
        <IoChevronBackCircleSharp  className="cursor md:w-10 md:h-10 w-7 h-7 lg:p-2 p-1 2xl:w-16 2xl:h-16 bg-slate-50 rounded-full"/>
        </NavLink>

        <div className="middle mt-24 2xl:mt-40 flex flex-col items-start ">
  {
    show ? <><NavLink
    to="/my-photoshoots"
    className="font-[900] text-[16px] 2xl:text-4xl relative z-50 font-['Poppins'] rounded flex items-center w-full hover:bg-[#537d3d] hover:text-white capitalize 2xl:rounded-xl my-2 py-1 md:py-2 lg:py-1.5 2xl:py-4 2xl:my-8 2xl:px-8 px-2  track-[10px] 2xl:track-[20px]"
    style={({ isActive }) => (isActive ? gradientStyle : {})}
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <BiSolidDashboard className="mr-3" />
    My photos
  </NavLink>

  {/* Adjusted styling for "Frames" NavLink */}
  <NavLink
    to="/frames"
    className="font-[900] text-[16px] 2xl:text-4xl relative z-50 font-['Poppins'] rounded flex flex-1 w-full items-center hover:bg-[#537d3d] hover:text-white capitalize 2xl:rounded-xl my-2 py-1 md:py-2 lg:py-1.5 2xl:py-4 2xl:my-8 2xl:px-8  px-2  track-[10px] 2xl:track-[20px]"
    style={({ isActive }) => (isActive ? gradientStyle : {})}
    data-aos="fade-up"
    data-aos-delay="500"
  >
    <GiWoodFrame className="mr-3" />
    Frames
  </NavLink>

  <NavLink
    to="/order-history"
    className="font-[900] text-[16px] 2xl:text-4xl font-['Poppins'] rounded relative z-50 flex items-center flex-1 w-full hover:bg-[#537d3d] hover:text-white capitalize 2xl:rounded-xl my-2 xl:my-0 py-1 md:py-2 lg:py-1.5 2xl:py-4 2xl:my-8 2xl:px-8 px-2 "
    style={({ isActive }) => (isActive ? gradientStyle : {})}
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <BsFillBookFill className="mr-3" />
    Order history
  </NavLink>

  <NavLink
    to="/saved-items"
    className="font-[900] text-[16px] 2xl:text-4xl font-['Poppins'] relative z-50 rounded flex items-center flex-1 w-full  hover:bg-[#537d3d] hover:text-white capitalize 2xl:rounded-xl my-2 py-1 md:py-2 lg:py-1.5 2xl:py-4 2xl:my-8 2xl:px-8 px-2  track-[10px] 2xl:track-[20px]"
    style={({ isActive }) => (isActive ? gradientStyle : {})}
    data-aos="fade-up"
    data-aos-delay="400"
  >
    <BsFillBookmarkFill className="mr-3" />
    Saved items
  </NavLink></> : <></>
  }
</div>


         <div className="footer flex flex-col mb-1">
          <p className="text-[#537d3d] px-0 2xl:px-8 md:px-6 lg:px-4 md:text-xl lg:text-xl relative z-50 uppercase tracking-tighter font-bold sm:text-left text-lg 2xl:text-5xl 2xl:pl-20 text-center w-full 
         mb-4 flash-element">Hello, { details?.name?.split(" ")[0]}</p>
          <p className="text-[#537d3d] px-0 2xl:px-8 md:px-6 lg:px-4 md:text-xl lg:text-xl relative z-50 uppercase tracking-tighter font-bold sm:text-left text-lg 2xl:text-5xl 2xl:pl-20 text-center w-full 
         mb-4 flash-element">CODE: { details?.user_id?.slice(0, 6)}</p>
         
        
        <hr className="border-0 h-[2px] w-full mb-4 2xl:mt-8 mx-auto 2xl:w-[85%] 2xl:mb-12 md:mb-6 text-center bg-slate-400"/>
        <p className="whitespace-normal relative z-50 flex md:text-md text-center  overflow-hidden break-words lg:text-md  2xl:text-4xl text-[#537d3d] w-full text-[12px] md:pl-1 uppercase font-bold 2xl:mt-6 2xl:mb-12
        mb-4">
          Kwame Nkrumah University<br /> of Science and Technology</p>
          </div>
          <div className="hero-footerflex  flex-col justify-center z-10">
            <div className=" w-48 md:w-40 justify-self-center lg:w-40 xl:w-28 2xl:w-64 ">
            <img src={enfoni} alt="enfoni-logo " className="object-cover block mx-auto w-full"/>
            </div>
            
          </div>
          <div className="kente absolute bottom-0 w-full bg-no-repeat bg-cover" style={{backgroundImage: imageUrl}}>
              <img src={Kentecloth} alt="" className="object-cover w-full h-full block  mx-auto mix-blend-darken"/>
            </div>
        </div>
      

      
      </div>
      <div className="md:basis-[70%] lg:basis-[80%] basis-[100%] flex  h-screen bg-[#d7dfd1] overflow-y-scroll ">
        {children}
        {profileclicked ? <Profile /> : <></>}
        
        </div>
    </div>
  );
};
export default DashboardLayout;
