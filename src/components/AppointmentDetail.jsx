import React from 'react'
import {IoCalendarOutline} from 'react-icons/io5'
import {GoClock} from 'react-icons/go'
import {MdLocationPin} from 'react-icons/md'
import {HiAcademicCap} from 'react-icons/hi'
import {GrMap} from 'react-icons/gr'
import {MdPhotoCamera} from 'react-icons/md'
import {BiSolidCaretLeftCircle} from 'react-icons/bi'


const AppointmentDetail = () => {
  return (
    <div>
      
      <div className="overflow-y-auto overflow-x-auto bg-neutral-100 absolute rounded-lg shadow border border-neutral-400 -mt-5 py-2 px-5 w-full max-h-[400px] 2xl:max-h-[600px]">
      
              <p className="text-zinc-900  font-normal items-center font-['Inter'] leading-snug mb-6 text-sm 2xl:text-3xl md:text-lg">CURRENT APPOINTMENT</p>
              <p className="text-center flex text-zinc-900 ml-4 text-xs 2xl:text-3xl 2xl:items-center md:text-md font-normal font-['Inter'] leading-tight mb-4"><IoCalendarOutline className="mr-2 text-xl 2xl:text-6xl" />THURSDAY,SEPTEMBER,2023</p>
              <p className=" text-zinc-900  ml-4 text-xs 2xl:text-3xl 2xl:items-center md:text-md font-normal items-center font-['Inter'] leading-tight text-center flex mb-4 "><GoClock className="mr-2 text-xl 2xl:text-6xl" />11:00AM</p>
              <p className=" text-zinc-900  ml-4 text-xs 2xl:text-3xl 2xl:items-center md:text-md font-normal items-center font-['Inter'] leading-tight text-center flex mb-4"><MdLocationPin className="mr-2 text-xl 2xl:text-6xl" />KNUST,Parade Ground,Kumasi</p>

              <div className="relative bg-neutral-100 rounded shadow border border-zinc-100 mt-6">
            <h2 className=" text-zinc-900  text-sm font-normal font-['Inter'] mb-4 leading-tight">ORDER STATUS</h2>
            <div className="flex justify-center">
              <div className="">
                <div className="rounded-lg border-4 relative border-zinc-300 mx-1 flex justify-center p-2">
              <HiAcademicCap className="md:h-24 md:w-24 w-16 h-16 2xl:w-36 2xl:h-36" />
              <div className="border-green border flex justify-center items-center 2xl:items-center 2xl:justify-center absolute top-1 right-1 2xl:w-[16px] 2xl:h-[16px] w-[10px] h-[10px] rounded-full">
                <div className="bg-green rounded-full w-[5px] h-[5px]"></div>
              </div>         
              </div>
              <p className="mt-2 text-center text-zinc-900 text-xs 2xl:text-3xl 2xl:items-center font-normal font-['Inter'] leading-tight">BOOK GOWN</p>
            </div>
            <div className="flex-wrap flex flex-col">
            <div className="rounded-lg  relative border-4 border-zinc-300 mx-1 flex justify-center p-2">
              <GrMap className="md:h-24 md:w-24 w-16 h-16 2xl:w-36 2xl:h-36" />
              <div className="border-green border flex justify-center items-center 2xl:items-center 2xl:justify-center absolute top-1 right-1 2xl:w-[16px] 2xl:h-[16px] w-[10px] h-[10px] rounded-full">
                <div className="bg-green rounded-full w-[5px] h-[5px]"></div>
              </div>   
            
            </div>
            <p className="mt-2 text-center  text-zinc-900 text-xs 2xl:text-3xl 2xl:items-center font-normal font-['Inter'] leading-tight">PICK NOW</p>
            </div>

            <div className="">
            <div className=" rounded-lg border-4 relative border-zinc-300 mx-1 p-2 flex justify-center">
              <MdPhotoCamera className="md:h-20 md:w-20 w-12 h-12 2xl:w-36 2xl:h-36" />
              <div className="border-green border flex justify-center items-center 2xl:items-center 2xl:justify-center absolute top-1 right-1  2xl:w-[16px] 2xl:h-[16px] w-[10px] h-[10px] rounded-full">
                <div className="bg-green rounded-full w-[5px] h-[5px]">
                </div>
              </div>
              
            </div>
            <p className="mt-2 text-center  text-zinc-900 text-xs 2xl:text-3xl 2xl:items-center font-normal font-['Inter'] leading-tight">BOOK PHOTOS</p>
            </div>
            </div>
            
            </div>
            <p className="text-zinc-900 text-xs 2xl:text-3xl 2xl:items-center font-[600] my-4 font-['Inter'] leading-tight"> <span className="">💯</span>Hurray,Your are all set NOW</p>
            </div>
    </div>
  )
}

export default AppointmentDetail