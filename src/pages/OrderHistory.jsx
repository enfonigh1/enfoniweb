import React, { useEffect } from "react";
import DashboardLayout from "./dashbordLayout";
import DashBoardHeader from '../components/dashboardHeader';

import {Menu} from '../components/Menu';
import Popup from "../components/popupmenu";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdCloseCircle } from 'react-icons/io';
import Profile from '../components/profile';
import { useSelector } from "react-redux";
import { pcliecked } from "../app/features/profile/profileSlice";
import OrderComponent from "../components/OrderComponent";


const OrderHistory = () => {

  const[toggleMenu, setToggleMenu] =React.useState(false);
  const [isOPen, setISOpen] = React.useState(false);
  const [profile, setProfile] = React.useState(false);

  function handleOpen() {
    setToggleMenu(true)
  }

  function handleClose() {
    setToggleMenu(false)
  }

const profileclicked = useSelector(pcliecked)


  return (
    <DashboardLayout>

      {toggleMenu ? <Menu closeMenu={handleClose} />: (


          <div className="w-full relative top-[88px] ">
            <DashBoardHeader setProfile={setProfile} />
            {/* {profileclicked ? <Profile /> : <></>} */}
            <OrderComponent handleOpen = {handleOpen} />
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

export default OrderHistory;
