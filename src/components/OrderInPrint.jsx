import React from 'react'
import Ellipse5 from "../assets/images/yellowdot.svg";
import shirt1 from "../assets/images/frame1.svg";

const OrderInPrint = () => {
  return (
    <div className=" bg-[#F5F6F8] py-2 px-4 text-zinc-500 text-xs font-normal font-['Lato'] mb-6 md:flex-col items-center border-0 outline-none">
              <div className="w-full">
                <div className="flex items-center py-2">
                  <img src={Ellipse5} alt="" className="w-10 mr-2" />
                  <p className="text-lg font-['poppins']">In Print</p>
                </div>
                <div className="flex mb-10 justify-between items-center ">
                  <input type="checkbox" className='md:mr-8 mr-2' />
                  <div className="w-full flex justify-between items-center bg-white rounded-lg shadow px-4 md:px-8 ">
                 
                    <img src={shirt1} className="w-10 h-12" alt="" />
                    <p className="text-black  center text-capitalize  font-medium sm:text-['10px'] md:text-['12px'] font-['Poppins']">
                       Coloured Photo printing
                    </p>
                  
                  <button className="bg-green rounded px-1 py-1.5 md:px-4  text-center text-white  sm:text-['12px'] font-medium font-['Poppins'] block border-0 outline-none self-center ">
                  Received
                </button>
                </div>
                </div>
                
                
              </div>
            </div>
  )
}

export default OrderInPrint