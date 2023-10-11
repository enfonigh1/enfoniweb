import React, {useState } from 'react';
import AppointmentLayout from './AppointmentLayout';
import {BsPlayCircle} from 'react-icons/bs'


const Popup = () => {

  const [isOpen, setIsOpen] = React.useState(false);

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
    <div className="w-full  fixed  z-[999] inset-0 bg-black/50">
    <div className="overflow-x-auto h-[480px] fixed left-5 md:left-[395px] lg:left-[900px] xl:left-[1000px] 2xl:left-[1100px] p-2 right-8 bottom-24 grid gap-x-2 gap-y-2 md:gap-x-0
md:gap-y-0 grid-cols-2 bg-white rounded-3xl shadow border-8 border-stone-200 overflow-auto">
      
    <div className='flex flex-col justify-end' >
              <div onClick={handleClick} className="p-2 cursor-pointer justify-center items-stretch h-36 md:w-36 md:h-36 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">1</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">Appointment
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
            </div>  
            <div className='flex flex-col justify-end ' >
              <div className=" p-2 justify-center items-stretch h-36 md:w-36 md:h-36 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">22</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">Gown Order
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
            </div>  
            <div className='flex flex-col justify-end ' >
              <div className=" p-2 justify-center items-stretch h-36 md:w-36 md:h-36 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">15</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">Print Orders
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
            </div>  
            <div className='flex flex-col justify-end ' >
              <div className=" p-2 justify-center items-stretch h-36 md:w-36 md:h-36 flex flex-col bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">8</h1>
              </div>
              <h2  className="uppercase mt-2 text-center text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">Saved
              
              </h2>
              </div>
              
              
            
              {isOpen ? <AppointmentLayout onClick={handleBackButton} goBackToAppointment={handleBackButton} /> : ""}
              
            </div>  
            <div className="block relative px-4 w-[200%] mt-8 ">
              <p className="absolute font-bold top-2 left-6 text-orange-400">1</p>                
              <input type="text" placeholder="Message" className="w-full py-2 px-7 text-zinc-900 outline-none bg-white rounded-2xl shadow border placeholder:text-zinc-900 placeholder:text-base text-base font-normal placeholder:font-normal placeholder:font-['Inter'] font-['Inter'] placeholder:leading-relaxed leading-relaxed border-black" />
               
               <BsPlayCircle className="absolute top-2 right-6 text-3xl text-black"/>
            </div>

            {/* <div>
            <div className=" p-2 justify-center items-stretch w-36 h-36 flex bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">1</h1>
              </div>
              </div>
              
              <h2 className="uppercase text-zinc-900 text-sm font-extrabold font-['Inter'] text-center leading-snug">Appointment</h2>
            </div> */}
            {/* <div>
            <div className=" p-2 justify-center items-stretch w-36 h-36 flex bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">22</h1>
              </div>
              </div>
              
              <h2 className="uppercase text-zinc-900 text-sm font-extrabold font-['Inter'] text-center leading-snug">Gown Order</h2>
            </div> */}
            {/* <div>
            <div className=" p-2 justify-center items-stretch w-36 h-36 flex bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full  ">15</h1>
              </div>
              </div>
              
              <h2 className="uppercase text-zinc-900 text-sm font-extrabold font-['Inter'] text-center leading-snug">Order History</h2>
            </div> */}
            {/* <div>
            <div className=" p-2 justify-center items-stretch w-36 h-36 flex bg-white rounded-xl shadow border border-black">
              <div className=" border border-1 text-center self-stretch rounded-lg shadow flex-1">
                <h1 className="font-[900] text-4xl font-[poppins] text-[#61874D] flex justify-center items-center h-full">8</h1>
              </div>
              </div>
              
              <h2 className="uppercase text-zinc-900 text-sm font-extrabold font-['Inter'] text-center leading-snug">Order History</h2>
            </div> */}
            
            
            
          </div>
          
          </div>
          
  )
}

export default Popup