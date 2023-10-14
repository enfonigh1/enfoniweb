import React from "react";
import { BiSolidCaretLeftCircle } from "react-icons/bi";
import {BiPencil} from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { currentProfile } from "../app/features/profile/profileSlice";

const PersonInfo = () => {

  const dispatch = useDispatch()
  const handleProfile = (data) => {
      dispatch(currentProfile(data))
  }

  return (
    <div className="pb-6 h-auto over-y-auto">
     <h2 className="bg-[#537d3d] items-center rounded-tl-2xl  flex font-[poppins] py-1 pl-5 text-white"><BiSolidCaretLeftCircle onClick={() => handleProfile('back')} className="cursor-pointer mr-3" />Personal Information</h2>
      <form action="" className="px-5 ">
        <div className=" my-3 flex flex-col">
          <label htmlFor="name" className="font-[poppins] font-semibold">Full Name</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg">Mr His Name</p>
        </div>
        <div className=" my-1 flex flex-col">
          <label htmlFor="email" className="font-[poppins] font-semibold">Email</label>
          <div className=" relative"><input type="email" placeholder="hisemail@gmail.com" className="w-full  border-2 mt-2 pl-3 pr-7 py-1 font-['inter] rounded-2xl border-black outline-0 placeholder:font-['inter']" /><BiPencil className="absolute right-1 bottom-2"/></div>
        </div>
        <div className=" my-3 flex flex-col">
          <label htmlFor="phone" className="font-[poppins] font-semibold">Phone Number</label>
          <input type="number" placeholder="0245575888"  className="w-full  border-2 mt-2 pl-3 pr-7 py-1 font-['inter] rounded-2xl border-black outline-0 placeholder:font-['inter']"/>
        </div>
        <div className=" my-3 flex flex-col">
          <label htmlFor="school" className="font-[poppins] font-semibold">University</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg">KNUST</p>
        </div>
        <div className=" my-3 flex flex-col">
          <label htmlFor="name" className="font-[poppins] font-semibold">College</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg">COLLEGE OF SCIENCE</p>
        </div>
        <div className=" my-3 flex flex-col">
          <label htmlFor="name" className="font-[poppins] font-semibold">Student ID</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg">47252556</p>
        </div>        
      </form>
      <button className="bg-black  text-white px-2 py-1 rounded-2xl font-bold tracking-tighter ml-4 shadow-lg mt-2">Change information</button>
    </div>
  );
};

export default PersonInfo;
