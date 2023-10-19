import React from 'react'
import KnustEmblem from "../assets/images/KnustEmblem.svg";
import { TbLogout} from 'react-icons/tb';
import {RiAdminFill} from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { pcliecked, setprofile } from "../app/features/profile/profileSlice";
import { NavLink } from 'react-router-dom'

const AdminDashboardHeader = () => {

  const gradientStyle = {
    backgroundColor: "#537d3d",
    color: "#fff",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
  };

    
    const dispatch = useDispatch()
      const handleClick = () => {
    
        dispatch(setprofile(true))
      }
      const handleClose = () => {
    
        dispatch(setprofile(false))
      }
    
      const pclick = useSelector(pcliecked)
  return (
    <div>
        
    <header className="w-full fixed top-0 bg-slate-50">
      <nav className="w-full py-6 relative flex justify-between items-center ">
      <NavLink
              to="/"
              className=" font-[900] text-[16px] font-['Poppins'] rounded   flex items-center  capitalize  my20 py-1 pl-4 pr-4"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <RiAdminFill className="mr-3" />
              Administrator
            </NavLink>
            <div className="p-1 md:p-2 bg-slate-100 relative cursor-pointer z-50  flex justify-center items-center rounded-full mr-4">
            <div
              className="w-full h-full cursor-pointer "
              
            >
              <TbLogout className='text-red-500 cursor-pointer'/>
            </div>
          </div>
      </nav>
    </header>
    
    </div>
  )
}

export default AdminDashboardHeader


{/* <NavLink
              to="/order-history"
              className=" font-[900] text-[16px] font-['Poppins'] rounded relative z-50  flex items-center hover:bg-[#537d3d] hover:text-white w-fit capitalize  my20 py-1 pl-4 pr-4 justify-center"
              style={({ isActive }) => (isActive ? gradientStyle : {})}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <RiAdminFill className="mr-3" />
              Administrator
            </NavLink>
            
          </div> */}