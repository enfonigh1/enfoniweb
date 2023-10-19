import React from 'react'
import Ellipse5 from "../assets/images/Ellipse5.svg";
import shirt1 from "../assets/images/shirt1.svg";
import shirt2 from "../assets/images/shirt2.svg";
import Ellipse6 from "../assets/images/Ellipse6.svg";
import Ellipse7 from "../assets/images/Ellipse7.svg";
import shirt6 from "../assets/images/shirt6.svg";
import shirt3 from "../assets/images/shirt3.svg";
import shirt4 from "../assets/images/shirt4.svg";
import { FaBarsStaggered } from 'react-icons/fa6';

const OrderComponentHidden = ({handleOpen}) => {
  return (
    <div className="orders flex flex-col sm:pb-0 md:px-12 md:pt-4 md:-pb-8 ">
            
          <div className="block fixed z-[10001] top-7 left-4 md:hidden" onClick={handleOpen}><FaBarsStaggered /></div>
            
    
            <div className=" bg-[#F5F6F8] py-2 px-4 text-zinc-500 text-xs font-normal font-['Lato'] lg:flex-row flex flex-col justify-between mb-8 md:flex-col items-center border-0 outline-none max-w-6xl">
              <div className="">
                <div className="flex items-center py-6">
                  <img src={Ellipse5} alt="" className="w-2.5 mr-2" />
                  Dispatched
                </div>
                <div className="flex flex-col justify-end bg-white rounded-lg shadow py-4 px-12 ">
                  <div className="flex items-center pb-4">
                    <img src={shirt1} className="w-10 h-12 mr-20 " alt="" />
                    <p className="text-black flex flex-col items-center  font-medium text-sm font-['Poppins']">
                      Arrives tomorrow{" "}
                      <small className=" text-zinc-500 text-xs font-normal font-['Lato']">
                        7am - 7pm
                      </small>{" "}
                    </p>
                  </div>
                  <hr className="border-1 border-gray-200 -mx-12" />
                  <div className="flex items-center pt-4 ">
                    <img src={shirt2} className="w-10 h-12  mr-20" alt="" />
                    <p className=" text-black flex flex-col items-center font-medium text-sm font-['Poppins']">
                      Expected on Mon, 2 Oct{" "}
                      <small className=" text-zinc-500 text-xs font-normal font-['Lato']">
                        7am - 7pm
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
    
              <div className="mt-6 lg:mr-20 text-center flex flex-col lg:justify-evenly sm::justify-center ">
                <button className="bg-green rounded py-1.5 px-4  text-center text-white text-base font-medium font-['Poppins'] block border-0 outline-none  mb-4 self-center ">
                  Track Order
                </button>
                <button className="rounded border  text-center text-black text-base font-medium font-['Poppins'] border-black py-1.5 px-4  block mb-4 self-center">
                  view order Details
                </button>
                <p className="py-1.5 px-4 sm:font-semibold sm:text-[1rem] lg:font-medium text-center text-black text-base font-medium font-['Poppins'] block mb-2 self-center">
                  Get invoice
                </p>
                <p className="text-black py-1.5 px-4 sm:font-semibold text-center text-base font-medium sm:text-[1rem] lg:font-medium font-['Poppins'] block self-center mb-2">
                  Edit order
                </p>
              </div>
            </div>
    
            <div className=" bg-[#F5F6F8] py-2 px-4 text-zinc-500 text-xs font-normal font-['Lato'] lg:flex-row capitalize flex flex-col justify-between mb-8 md:flex-col md:items-center border-0 outline-none max-w-6xl">
              <div className="">
                <div className="flex items-center py-6">
                  <img src={Ellipse6} alt="" className="w-2.5 mr-2" />
                  Delivered 23rd August
                </div>
                <div className="flex flex-col justiy-end bg-white rounded-lg shadow py-4 px-12 ">
                  <div className="flex items-center pb-4">
                    <img
                      src={shirt3}
                      className="w-10 h-12 mix-blend-darkken"
                      alt=""
                    />
                    <img
                      src={shirt4}
                      className="w-10 h-12 mix-blend-darkken mr-14"
                      alt=""
                    />
                    <p className="text-black flex flex-col items-center  font-medium text-sm font-['Poppins']">
                      Enfoni twin shirts II{" "}
                    </p>
                  </div>
                  <hr className="border-1 border-gray-200 -mx-12" />
                  <div className="flex items-center pt-4 ">
                    <img src={shirt2} className="w-10 h-12 ml-5 mr-20" alt="" />
                    <p className=" text-black flex flex-col items-center font-medium text-sm font-['Poppins']">
                      Expected on Mon, 2 Oct{" "}
                      <small className=" text-zinc-500 text-xs font-normal font-['Lato']">
                        7am - 7pm
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
    
              <div className="mt-6 lg:mr-20 text-center flex flex-col lg:justify-evenly sm:justify-center">
                <button className="rounded border text-[.7rem]  text-center text-black text-base font-medium font-['Poppins'] border-black py-1.5 px-4 block self-center mb-4">
                  Change appointment
                </button>
                <p className="py-1.5 px-4 sm:font-semibold sm:text-[1rem] lg:font-medium text-center text-black text-base font-medium font-['Poppins'] block mb-2 self-center">
                  Get invoice
                </p>
                <p className="text-black py-1.5 px-4 sm:font-semibold text-center text-base font-medium sm:text-[1rem] lg:font-medium font-['Poppins'] block self-center mb-2">
                  Edit order
                </p>
              </div>
            </div>
    
            <div className=" bg-[#F5F6F8] py-2 px-4 text-zinc-500 text-xs font-normal font-['Lato'] lg:flex-row flex flex-col justify-between mb-8 md:flex-col md:items-center border-0 outline-none max-w-6xl">
              <div className="">
                <div className="flex items-center py-6">
                  <img src={Ellipse7} alt="" className="w-2.5 mr-2" />
                  Delivered 20th August
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow py-8 px-12 ">
                  <div className="flex items-center pb-4">
                    <img src={shirt6} className="w-10 h-12 mr-20 " alt="" />
                    <p className="text-black flex flex-col items-center  font-medium text-sm font-['Poppins']">
                      Trivia - Enfoni shirt III{" "}
                      <small className=" text-zinc-500 text-xs font-normal font-['Lato']">
                        7am - 7pm
                      </small>{" "}
                    </p>
                  </div>
                </div>
              </div>
    
              <div className="mt-6 lg:mr-20 text-center flex flex-col justify-evenly sm:justify-center">
                <button className="rounded border text-[.7rem]  text-center text-black text-base font-medium font-['Poppins'] border-black py-1.5 px-4 block self-center mb-4">
                  Change appointment
                </button>
                <p className="text-black sm:font-semibold text-center text-base font-medium sm:text-[1rem] lg:font-medium font-['Poppins'] block self-center mb-2">
                  Get invoice
                </p>
                <p className="text-black sm:font-semibold sm:text-[1rem] text-center text-base font-medium lg:font-medium font-['Poppins'] self-center block mb-2">
                  Edit order
                </p>
              </div>
            </div>
          </div>
  )
}

export default OrderComponentHidden