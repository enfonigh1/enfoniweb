import React from 'react';
import {IoCalendarOutline} from 'react-icons/io5';
import {BiSolidCaretLeftCircle} from 'react-icons/bi'
import popmenu from './popupmenu'


const AppointHistory = () => {
  return (
    <div>
      
      <div className=" overflow-auto max-h-[30rem] absolute bg-neutral-100 rounded-lg shadow border -mt-5 border-neutral-400 py-2 px-5 w-full">
      
        <div className="flex px-1 bg-white mb-2 py-2 md:px-8 rounded-md shadow">
          <div className="bg-[#1A5D1E] p-2 w-[35px] h-[35px] mr-10 rounded-full">
            <IoCalendarOutline className='text-white h-full w-full'/>
          </div>
          <div  className="b"> 
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-tight mb-2">THURSDAY,SEPTEMBER,2023</p>
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-none mb-2 ">KNUST,Parade Ground,Kumasi.</p>
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-tight mb-2 ">11:00 AM</p>
            <button className="text-center bg-[#1A5D1E] text-white text-xs font-normal font-['Inter'] leading-tight py-1 px-2 rounded shadow justify-center items-center inline-flex">DONE</button>
          </div>
        </div>
        <div className="flex px-1 mb-2 py-2 md:px-8 bg-white rounded-md shadow">
          <div className="bg-[#1A5D1E] p-2 w-[35px] h-[35px] mr-10 rounded-full">
            <IoCalendarOutline className='text-white h-full w-full'/>
          </div>
          <div className="">
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-tight mb-2">THURSDAY,SEPTEMBER,2023</p>
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-none mb-2">KNUST,Parade Ground,Kumasi.</p>
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-none mb-2 ">11:00 AM</p>
            <button className="text-center bg-[#1A5D1E] text-white text-xs font-normal font-['Inter'] leading-tight py-1 px-2 rounded shadow justify-center items-center inline-flex">DONE</button>
          </div>
        </div>
        <div className="flex px-1 mb-2 py-2 md:px-8 bg-white rounded-md shadow">
          <div className="bg-[#1A5D1E] p-2 w-[35px] h-[35px] mr-10 rounded-full">
            <IoCalendarOutline className='text-white h-full w-full'/>
          </div>
          <div className="">
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-tight mb-2">THURSDAY,SEPTEMBER,2023</p>
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-none mb-2">KNUST,Parade Ground,Kumasi.</p>
            <p className="text-zinc-900 text-xs font-normal font-['Inter'] leading-tight mb-2 ">11:00 AM</p>
            <button className="text-center bg-[#1A5D1E] text-white text-xs font-normal font-['Inter'] leading-tight py-1 px-2 rounded shadow justify-center items-center inline-flex">DONE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointHistory;
