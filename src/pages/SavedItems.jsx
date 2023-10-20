import React from "react";
import DashboardLayout from "./dashbordLayout";
import DashBoardHeader from '../components/dashboardHeader';
import search from "../assets/images/search.svg";
import shirt6 from "../assets/images/shirt6.svg";
// import star from "../assets/images/star.svg";
// import starempty from "../assets/images/starempty.svg";
import heart from "../assets/images/heart.svg";
import { FaBarsStaggered } from 'react-icons/fa6';
import {Menu} from '../components/Menu';
import Popup from "../components/popupmenu";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdCloseCircle } from 'react-icons/io';
import Profile from '../components/profile';
import { useSelector } from "react-redux";
import { pcliecked } from "../app/features/profile/profileSlice";



export const SavedItems = () => {

  const[toggleMenu, setToggleMenu] =React.useState(false);
  const [isOPen, setISOpen] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const profileclicked = useSelector(pcliecked)


  function handleOpen() {
    setToggleMenu(true)
  }

  function handleClose() {
    setToggleMenu(false)
  }

  return (

    

    <DashboardLayout >
      
      

{toggleMenu ? <Menu closeMenu={handleClose}/>: (
  
  <div className="w-full relative top-[88px] 2xl:top-[160px]">

  <DashBoardHeader setProfile={setProfile} />
  {profile ? <Profile /> : <></>}
  <div className="block fixed z-[1000] top-7 left-4 md:hidden" onClick={handleOpen}><FaBarsStaggered /></div>
  

  <div className="bg-neutral-100  p-4">
    <div className="grid lg:grid-cols-5 gap-3 md:grid-cols-3 grid-cols-2 2xl:grid-cols-8">
      
    {[...Array(20)].map((e, index) => (
<div key={index} className="px-6 bg-white relative pt-8 pb-6 2xl:pb-16 flex flex-col rounded-lg shadow shadow-light-green">
<img src={shirt6} alt="" className="w-20 2xl:w-28 self-center" />
<p className="text-black text-[.7rem] 2xl:text-2xl font-medium font-['Poppins']">Trivia - Enfoni shirt III</p>
<i className="text-red-700 lg:text-[.7rem] 2xl:text-2xl sm:text-[1rem] font-medium font-['Poppins']">Ghs 3,900.00</i>
{/* <div className="flex">
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={starempty} alt="" />
</div> */}
<small className="2xl:text-2xl 2xl:mt-2">Enfoni Team</small>
<div className=" absolute top-2 mt-1">
  <img src={heart} alt="" className="sm:w-[1rem] 2xl:w-[2rem]" />
</div>
<a href="#" className="bg-[#109E09] absolute bottom-0 left-0 right-0 block text-center text-white text-[10px] 2xl:text-2xl font-medium font-['Poppins'] px-1 py-1 2xl: rounded-sm">Buy</a>
</div>
))}

    
    </div>
    

    
  </div>
  {isOPen ? <Popup />:<></>}
</div>

)}
      
      {
        isOPen ? <div className="absolute right-6 bottom-2 md:bottom-10 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white" >
        <IoMdCloseCircle onClick={()=>{
              setISOpen(false)
            } } className="cursor-pointer"/>
        </div>  : <div className="absolute right-6 bottom-2 md:bottom-10 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white" >
        <IoSettingsSharp onClick={()=>{
              setISOpen(prevState => !prevState)
            } } className="cursor-pointer"/>
        </div> 
      }
    </DashboardLayout>
  );
};

export default SavedItems;
