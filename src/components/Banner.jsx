import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Text from "./Text";
import bannerimg from "../assets/images/bannerlady.png";
import knust from "../assets/images/KNUST.svg";
import UG from "../assets/images/UG.svg";
import UCC from "../assets/images/UCC.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, authuser, closePopUp, closepop, openSchool, openService, userinfo } from "../app/features/authSlice/authSlice";
import { MdAddAPhoto } from "react-icons/md";
import { BsCamera } from "react-icons/bs";
import { PiGraduationCapThin } from "react-icons/pi";
import { IoIosCloseCircle } from "react-icons/io";
import  Heroslide  from './heroslider/HeroSlider'

const Banner = () => {
  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    // document.querySelector("div[role='dialog']").classList.toggle("hidden");
    setOpen(!open);
  };
  
  const details = useSelector(authuser)

  const pop = useSelector(closepop)

  const [openPopUp, setOpenPopUp] = useState(pop);

  const dispatch = useDispatch()
const handleClosePopup = () => {
  dispatch(closePopUp(false))
  setOpenPopUp(pop)
}

const handleClose = () => {
  dispatch(openService(false))
  dispatch(openSchool(false))
}


  return (
    <div className="relative" >
      <div className="bg-[url('./assets/images/banner3.png')] bg-no-repeat bg-cover bg-center  lg:px-16 xl:px-28 2xl:px-56 px-6">
        <Navbar />
       {/* {
        openPopUp ?  <div className="relative z-50" data-aos="fade" data-aos-duration="3000">

        <div className="sticky  top-5 w-full flex justify-center items-center">
          <div className="w-96 p-5 ">
            <div className="flex space-x-3 relative bg-white/95 justify-center items-center p-6 rounded-lg">
            <IoIosCloseCircle onClick={handleClosePopup} className="absolute top-0 right-1 cursor-pointer"/>
              <p className="font-bold">Quick Navigate</p>
              <Link to="/details" className="shadow-lg bg-gray-200 text-center cursor-pointer border border-solid border-gray-700 flex flex-col justify-center items-center rounded-lg p-3">
                <BsCamera  size={80}/>
                <h1>Book Photoshoot</h1>
              </Link>
              <Link to="/details" className="shadow-lg bg-gray-200 text-center cursor-pointer border border-solid border-gray-700 flex flex-col justify-center items-center rounded-lg p-3">
                <PiGraduationCapThin  size={80}/>
                <h1>Book Gown</h1>
              </Link>
            </div>
          </div>
        </div>
      </div> : <></>
       } */}
        <div className="lg:flex lg:flex-row flex-col lg:items-start 2xl:h-[75vh] mx-auto relative " onClick={handleClose}>
          <div className="lg:w-[50%]">
            <Text
              data-aos="fade-up"
              data-aos-duration="3000"
              text="Graduation Made Memorable"
              className="font-bold text-white lg:text-5xl md:text-4xl lg:text-left text-center 2xl:text-8xl"
            />
            <p
              data-aos="fade-right"
              data-aos-duration="2000"
              className="text-white lg:inline-block lg:text-left hidden  my-8 2xl:my-16 2xl:text-3xl"
            >
              Join us in commemorating your educational milestone with joy and
              pride. Discover how we make your graduation experience truly
              unforgettable.
            </p>
           <div className=" flex justify-center items-center lg:justify-start lg:items-start">
            <p
       
              className="text-white text-center lg:text-left 2xl:text-3xl "
            >
              Create an account to join the community.
            </p>
          </div>
          <div className="lg:block flex justify-center items-center lg:my-0 my-4">
            {
              details?.name ? <></> : 
          <a
              // data-aos="fade-up"
              // data-aos-duration="2000"
              href="#services"
              className="bg-white rounded-full text-green py-3 2xl:py-6 px-8 2xl:px-16 inline-block lg:mt-8 mt-2 2xl:mt-16"
            >
              GET STARTED
            </a>
            }
          </div>
          
          </div>
          <div data-aos="fade-left" data-aos-duration="3000" className="lg:w-[50%] w-[100%] lg:mt-0 md:mt-20 mt-5">
           <Heroslide />
            {/* <img className="" src={bannerimg} alt="" /> */}
          </div>
        </div>
      </div>
      {/* <div className="bg-light-green ">
        <div className="flex justify-between items-center py-4 lg:px-24 px-6">
          <p className="lg:text-lg text-xs">FEATURED SCHOOLS</p>
          <div>
            <img src={knust} alt="" className="block h-6  md:h-16" />
          </div>
          <div>
            <img src={UG} alt="" className="block h-6  md:h-16" />
          </div>
          <div>
            <img src={UCC} alt="" className="block h-6  md:h-16" />
          </div>
        </div>
      </div> */}
      {/* <div className="">
      </div>
      <div className="bg-light-green absolute lg:-bottom-24 h-24 w-full px-16">
        <div className="flex justify-between items-center">
          <p className="lg:text-lg text-xs">FEATURED SCHOOLS</p>
          <div>
            <img src={knust} alt="" />
          </div>
          <div>
            <img src={UG} alt="" />
          </div>
          <div>
            <img src={UCC} alt="" className="align-top" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
