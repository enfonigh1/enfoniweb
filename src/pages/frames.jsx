import React from "react";
import DashboardLayout from "./dashbordLayout";
import DashBoardHeader from "../components/dashboardHeader";
import { FaBarsStaggered } from "react-icons/fa6";
import { Menu } from "../components/Menu";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
import frame1 from "../assets/images/frame1.svg";
import frame2 from "../assets/images/frame2.svg";
import Popup from "../components/popupmenu"
import Profile from '../components/profile';


const frameData = [
  {
    frame: frame1,
    price: 3900.00,
    description:"Diamond frame"
  },
  {
    frame: frame1,
    price: 3900.00,
    description:"Wooden frame"
  },
];

const Frames = () => {
    const[toggleMenu, setToggleMenu] =React.useState(false);
    const [isOPen, setISOpen] = React.useState(false);
  
    function handleOpen() {
      setToggleMenu(true)
    }
  
    function handleClose() {
      setToggleMenu(false)
    }
    const [profile, setProfile] = React.useState(false);
  

  return (
    <DashboardLayout>
      {toggleMenu ? (
        <Menu closeMenu={handleClose} />
      ) : (
        <div className="w-full relative top-[88px] h-screen">
          <DashBoardHeader setProfile={setProfile} />
          {profile ? <Profile /> : <></>}
          <div
            className="block fixed z-[10001] top-7 left-4 md:hidden"
            onClick={handleOpen}
          >
            <FaBarsStaggered />
          </div>
          <div className="grid grid-cols-2 mt-3 md:grid-cols-3 lg:grid-cols-7 gap-6 px-7 ">
            {frameData.map((frame, index) => (
              <div
                key={index}
                className=" bg-white pt-5 pb-6 mt-2 flex flex-col rounded-lg shadow-lg shadow-light-green"
              >
                <img src={frame.frame} alt="" className=" self-center lg:w-[100px] w-[10rem]" />
                
                
                <p className="text-center mb-2">{frame.description}</p>
                
                  <i className="text-red-700 pl-6 mb-2 text-[.7rem] font-bold font-['Poppins']">
                    Ghs {frame.price.toFixed(2)}
                  </i>
                  <a
                    href="#"
                    className="bg-[#109E09] text-center text-white text-[14px] font-semibold  font-['Poppins'] px-2.5 py-1 rounded-sm  -mb-6 rounded-br-lg rounded-bl-lg"
                  >
                    Buy
                  </a>
                
              </div>
            ))}
          </div>
          {isOPen ? <Popup />:<></>}
        </div>
      )}
      {
        isOPen ? <div className="absolute right-6 p bottom-10 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white" >
        <IoMdCloseCircle onClick={()=>{
              setISOpen(false)
            } } className=""/>
        </div>  : <div className="absolute right-6 p bottom-10 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white" >
        <IoSettingsSharp onClick={()=>{
              setISOpen(prevState => !prevState)
            } } className=""/>
        </div> 
      } 
    </DashboardLayout>
  );
};

export default Frames;
