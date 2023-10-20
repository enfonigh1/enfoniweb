import React from 'react'
import {BiSolidCaretLeftCircle } from 'react-icons/bi'
import {BiPencil } from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { currentProfile } from "../app/features/profile/profileSlice";

const SecurityData = () => {
 
  const dispatch = useDispatch()
  const handleProfile = (data) => {
      dispatch(currentProfile(data))
  }

  
  return (
    <div className="pb-10">
    <h2 className="bg-[#537d3d] items-center rounded-tl-2xl  flex font-[poppins] py-1 pl-5 text-white"><BiSolidCaretLeftCircle onClick={() => handleProfile('back')} className="cursor-pointer mr-3" />Security and Data</h2>
     <form action="" className="px-5 ">
       <div className=" my-2 flex flex-col">
         <label htmlFor="password " className="font-[poppins] font-semibold 2xl:text-2xl">Password</label>
         <div className=" relative"><input type="password" placeholder="Edit password" className="w-full 2xl:text-2xl 2xl:placeholder:text-2xl 2xl:py-4  border-2 mt-2 pl-3 pr-7 py-1 font-['inter] rounded-2xl border-black outline-0 placeholder:font-['inter']" /><BiPencil className="absolute right-1 bottom-2 2xl:bottom-4 2xl:text-3xl"/></div>
       </div>
        <button className='bg-black text-white rounded-lg py-1 px-2 2xl:py-2 2xl:px-2  2xl:text-2xl 2xl:mt-4 2xl:mb-4  '>Save</button>
       <h3 className="font-[poppins] font-semibold 2xl:text-2xl">
        Request to delete data and account
       </h3>
       <div className='2xl:text-2xl'><input type="checkbox" className='mr-3 2xl:mr-4 2xl:text-2xl 2xl: w-6 2xl:h-6' />Data</div>
       <div className='2xl:text-2xl'><input type="checkbox" className='mr-3 2xl:mr-4 2xl:text-2xl 2xl: w-6 2xl:h-6' />Account</div>
  
     </form>
     <button className="bg-black  text-white px-2 py-1 2xl:py-2 2xl:px-2  2xl:text-2xl rounded-2xl font-bold tracking-tighter ml-4 shadow-lg mt-2">Request</button>

   </div>
  )
}

export default SecurityData