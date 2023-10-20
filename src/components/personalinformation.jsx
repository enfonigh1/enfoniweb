import React, { useState } from "react";
import { BiSolidCaretLeftCircle } from "react-icons/bi";
import {BiPencil} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { currentProfile } from "../app/features/profile/profileSlice";
import { userinfo } from "../app/features/authSlice/authSlice";
import { useUpdateUserMutation } from "../app/features/authSlice/authApiSlice";

const PersonInfo = () => {

  const dispatch = useDispatch()
  const handleProfile = (data) => {
      dispatch(currentProfile(data))
  }

  const details = useSelector(userinfo)

  const [email, setEmail] = useState(details?.email)
  const [phone, setPhone] = useState(details?.phone_number || "")

  const [updateinfo] = useUpdateUserMutation()

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log(e)
    try {
      const result = await updateinfo({id: details?.user_id, email: email, phone_number: phone}).unwrap()
      console.log(result)
      
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="pb-2 h-auto overscroll-y-auto">
     <h2 className="bg-[#537d3d] items-center rounded-tl-2xl  flex font-[poppins] 2xl:text-4xl  py-1 2xl:py-4 pl-5 text-white"><BiSolidCaretLeftCircle onClick={() => handleProfile('back')} className="cursor-pointer mr-3 2xl:text-4xl" />Personal Information</h2>
      <form action="" className="px-5 ">
        {/* <div className=" my-1 md:my-3 flex flex-col">
          <label htmlFor="name" className="font-[poppins] 2xl:text-4xl  font-semibold">Full Name</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg 2xl:text-4xl ">Mr His Name</p>
        </div> */}
        <div className=" my-1 flex flex-col">
          <label htmlFor="email" className="font-[poppins] 2xl:text-4xl  font-semibold">Email</label>
          <div className=" flex- items-center relative"><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="youremail@gmail.com" className="w-full  border-2 mt-2 2xl:mt-8 pl-3 2xl:pl-6 2xl:text-3xl 2xl:placeholder:text-2xl pr-7 py-1 2xl:py-4 font-['inter] rounded-2xl border-black outline-0 placeholder:font-['inter']" /><BiPencil className="absolute right-1 bottom-2 2xl:bottom-4 2xl:text-4xl"/></div>
        </div>
        <div className=" my-1 md:my-3 flex flex-col">
          <label htmlFor="phone" className="font-[poppins] 2xl:text-4xl  font-semibold">Phone Number</label>
          <input type="text" placeholder="0245575888" value={phone} onChange={e => setPhone(e.target.value)}  className="w-full  border-2 mt-2 2xl:mt-8 pl-3 2xl:pl-6 2xl:text-3xl 2xl:placeholder:text-2xl pr-7 py-1 2xl:py-4 font-['inter] rounded-2xl border-black outline-0 placeholder:font-['inter']"/>
        </div>
        <div className=" my-1 md:my-3 flex flex-col">
          <label htmlFor="school" className="font-[poppins] 2xl:text-4xl  font-semibold">University</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg 2xl:text-4xl ">{details?.school || "N/A"}</p>
        </div>
        <div className=" my-1 md:my-3 flex flex-col">
          <label htmlFor="name" className="font-[poppins] 2xl:text-4xl  font-semibold">College</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg 2xl:text-4xl ">{details?.college_name?.toUpperCase() || "N/A"}</p>
        </div>
        <div className=" my-1 md:my-3 flex flex-col">
          <label htmlFor="name" className="font-[poppins] 2xl:text-4xl  font-semibold">Student ID</label>
          <p className="font-semibold font-poppins text-gray-700 text-lg 2xl:text-4xl ">{details?.student_id || "N/A"}</p>
        </div>        
      </form>
      <button type="submit" className="bg-black  text-white px-2 2xl:px-3 py-1 2xl:py-4 rounded-2xl font-bold tracking-tighter ml-4 shadow-lg 2xl:text-2xl mt-2 2xl:mt-8" onClick={handleUpdate}>Change information</button>
    </div>
  );
};

export default PersonInfo;
