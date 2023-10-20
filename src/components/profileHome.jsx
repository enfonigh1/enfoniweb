import React from 'react'
import PersonInfo from './personalinformation';
import SecurityData from './securitydata';
import { BsPersonExclamation } from 'react-icons/bs';
import { GiHouseKeys } from 'react-icons/gi';
import { TbLogout } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { currentProfile, pcliecked, setprofile } from '../app/features/profile/profileSlice';
import { logout, userinfo } from '../app/features/authSlice/authSlice';
import { Link, useNavigate } from 'react-router-dom';


const ProfileHome = () => {

    const disptach = useDispatch()
    const handleProfile = (data) => {
        disptach(currentProfile(data))
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
      dispatch(logout())
      navigate("/")
      window.location.reload()
    }

      const details = useSelector(userinfo)
    
  return (
    
    <div className="pb-1 rounded-b-2xl  h-auto " >
        <h2 className="rounded-tl-2xl bg-[#537d3d] py-1 md:w-full text-sm 2xl:text-4xl font-semibold px-2 2xl:px-4 font-['lato'] text-white">
          Hello,
        </h2>

        <h3 className="font-['poppins'] tracking-wide text-black font-[400] text-xl 2xl:text-6xl px-3 2xl:px-6 my-2">
          {details?.name?.split(" ")[0]},
        </h3>
        <div className="rounded-lg mx-3 mb-1 2xl:mb-4 2xl:mx-6 2xl:shadow-2xl shadow-xl 2xl:rounded-2xl bg-black flex-flex-col py-3 md:py-4">
          <p className='text-white mb-2 2xl:mb-6 px-7 2xl:px-14 2xl:text-2xl text-ellipsis overflow-hidden  font["inter"]'>{details?.name}</p>
          <p className='text-white mb-2 2xl:mb-6 px-7 2xl:px-14 2xl:text-2xl overflow-hidden text-ellipsis font["inter"]'>{details?.email}</p>
          <p className='text-white mb-2 2xl:mb-6 px-7 2xl:px-14 2xl:text-2xl text-ellipsis overflow-hidden  font["inter"]'>{details?.phone || "N/A - provide phone number"}</p>
        </div>

        <div
          onClick={() => handleProfile('personal-information')}
          data-type='personal-information' // Add data-type attribute
        >
          <div className="rounded-lg mx-3 cursor-pointer mb-1 shadow-xl 2xl:rounded-2xl bg-black px-7 2xl:px-14 2xl:text-2xl py-3 md:py-4 flex items-center 2xl:mx-6 2xl:mb-4">
            <div className="bg-white p-2 2xl:shadow-2xl 2xl:p-10 rounded-md 2xl:rounded-xl">
              <BsPersonExclamation className='text-4xl 2xl:text-6xl' />
            </div>
            <p className='text-white text-ellipsis font["poppins"] ml-8 font-semibold'>Personal Information</p>
          </div>
        </div>

        <div
          onClick={() => handleProfile('security-and-data')}
          data-type='security-and-data' // Add data-type attribute
        >
          <div className="rounded-lg mx-3 mb-1 2xl:mb-4 2xl:mx-6 shadow-xl 2xl:shadow-2xl 2xl:rounded-2xl bg-black cursor-pointer px-7 2xl:px-14 2xl:text-2xl py-3 md:py-4 flex items-center">
            <div className="bg-white p-2  2xl:p-10 rounded-md 2xl:rounded-xl">
              <GiHouseKeys className='text-4xl 2xl:text-6xl' />
            </div>
            <p className='text-white text-ellipsis ml-8 font["poppins"] font-semibold'>Security and Data</p>
          </div>
        </div>

        <Link to="" onClick={handleLogout} className="font-bold flex text-red-500 items-cente 2xl:mb-6 2xl:text-4xl font-['poppins'] justify-center">
          <TbLogout className="mr-2" />
          LOGOUT
        </Link>
      </div>
      
  )
}

export default ProfileHome