import React from 'react'
import PersonInfo from './personalinformation';
import SecurityData from './securitydata';
import { BsPersonExclamation } from 'react-icons/bs';
import { GiHouseKeys } from 'react-icons/gi';
import { TbLogout } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { currentProfile } from '../app/features/profile/profileSlice';


const ProfileHome = () => {

    const disptach = useDispatch()
    const handleProfile = (data) => {
        disptach(currentProfile(data))
    }

  return (
    <div className="bg-gray-100 pb-8 rounded-b-2xl   ">
        <h2 className="rounded-tl-2xl bg-[#537d3d] py-1 w-full text-sm font-semibold px-2 font-['lato'] text-white">
          Hello,
        </h2>

        <h3 className="font-['poppins'] tracking-wide text-black font-[400] text-2xl px-3 my-4">
          John,
        </h3>
        <div className="rounded-lg mx-3 mb-3 shadow-xl bg-black flex-flex-col py-6">
          <p className='text-white text-ellipsis mx-20 font["inter"]'>John Smith</p>
          <p className='text-white text-ellipsis mx-20 font["inter"]'>jsmith.mobbin1@gmail.com</p>
          <p className='text-white text-ellipsis mx-20 font["inter"]'>(628) 267-9041</p>
        </div>

        <div
          onClick={() => handleProfile('personal-information')}
          data-type='personal-information' // Add data-type attribute
        >
          <div className="rounded-lg mx-3 cursor-pointer mb-3 shadow-xl bg-black px-7 py-6 flex items-center">
            <div className="bg-white p-2 rounded-md">
              <BsPersonExclamation className='text-4xl' />
            </div>
            <p className='text-white text-ellipsis font["poppins"] ml-8 font-semibold'>Personal Information</p>
          </div>
        </div>

        <div
          onClick={() => handleProfile('security-and-data')}
          data-type='security-and-data' // Add data-type attribute
        >
          <div className="rounded-lg mx-3 mb-3 shadow-xl bg-black cursor-pointer px-7 py-6 flex items-center">
            <div className="bg-white p-2 rounded-md">
              <GiHouseKeys className='text-4xl' />
            </div>
            <p className='text-white text-ellipsis ml-8 font["poppins"] font-semibold'>Security and Data</p>
          </div>
        </div>

        <p className="font-bold flex items-center font-['poppins'] justify-center =">
          <TbLogout className="mr-2" />
          LOGOUT
        </p>
      </div>
  )
}

export default ProfileHome