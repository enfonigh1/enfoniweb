import React, {useState } from 'react';
import AppointmentLayout from './AppointmentLayout';
import {BsPlayCircle} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { userinfo } from '../app/features/authSlice/authSlice';


const Popup = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const user_info = useSelector(userinfo)

  const [details, setDetails] = useState(<></>)

  const handleClick =(e) => {
    setIsOpen(true);
    
  }
  const handleBackButton =(e) => {
    setIsOpen(false);
    console.log(false)
  }
  
  console.log(isOpen)

  return (
    <div className="w-full  fixed  z-[1000] inset-0 bg-black/50">
    <div className="overflow-x-auto p-4 md:p-8 gap-2 2xl:gap-4 w-[320px] md:w-[380px] 2xl:w-[610px] absolute right-1 bottom-14 md:bottom-[95px] 2xl:bottom-28 grid
 grid-cols-2 bg-white rounded-3xl shadow border-8 border-stone-200 overflow-auto">
      
    <div className='flex flex-col justify-end' >
              <div onClick={handleClick} className="p-2 cursor-pointer justify-center items-stretch w-32 h-32  md:w-36 md:h-36 2xl:w-64 2xl:h-64 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center  rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl 2xl:text-8xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">{user_info?.gown && user_info?.photoshoot ? "2" : user_info?.gown || user_info?.photoshoot ? "1" : "0"}</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm 2xl:text-2xl font-normal font-['Inter'] text-wrap leading-snug">Appointment
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
            </div>  
            <div className='flex flex-col justify-end ' >
              <div className=" p-2 justify-center items-stretch w-32 h-32  md:w-36 md:h-36 2xl:w-64 2xl:h-64 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl 2xl:text-8xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">{user_info?.gown ? "1" : "0"}</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm 2xl:text-2xl font-normal font-['Inter'] leading-snug">Gown Order
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
            </div>  
            <div className='flex flex-col justify-end  ' >
              <div className=" p-2 justify-center items-stretch w-32 h-32  md:w-36 md:h-36 2xl:w-64 2xl:h-64 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl 2xl:text-8xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">0</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm 2xl:text-2xl font-normal font-['Inter'] leading-snug">Print Orders
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
            </div>  
            <div className='flex flex-col justify-end ' >
              <div className=" p-2 justify-center items-stretch w-32 h-32  md:w-36 md:h-36 2xl:w-64 2xl:h-64 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl 2xl:text-8xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">0</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm 2xl:text-2xl font-normal font-['Inter'] leading-snug">Saved
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
              
            </div>  
            <div className="relative px-4 w-[200%] mt-8 flex items-center">
              <p className="absolute font-bold left-6 self-center text-orange-400">1</p>                
              <input type="text" placeholder="Message" className="w-full py-2 md:py-3 2xl:py-4 px-7 text-zinc-900 outline-none bg-white rounded-2xl shadow border placeholder:text-zinc-900 placeholder:text-base text-base font-normal placeholder:font-normal placeholder:font-['Inter'] font-['Inter'] placeholder:leading-relaxed leading-relaxed border-black" />
               
               <BsPlayCircle className="absolute right-6 text-3xl text-black"/>
            </div>            
          </div>
          
          </div>
          
  )
}

export default Popup