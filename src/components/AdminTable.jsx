import React, { useState, useEffect } from 'react';
import  {AiOutlineSearch} from  'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs';
import {MdOutlineDelete} from 'react-icons/md';
import {BiSolidEditAlt} from 'react-icons/bi';
import {IoMdCall} from 'react-icons/io';
import { useGetAdminsQuery } from '../app/features/admin/adminApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdmins, setAdmins } from '../app/features/admin/adminSlice';
import axios from 'axios';


const AdminTable = () => {

  const [toggleStates, setToggleStates] = useState(Array(5).fill(false));
  const [data, setData] = useState([])

  const TableCell = ({ isToggle, onClick }) => (
    <td className={`border py-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap px-[10px] text-center `}>
      <div
      className={`w-9 cursor-pointer pl-[1px] h-4 rounded-lg py-.5 bg-slate-200`}
      style={isToggle ? { backgroundColor: '#537d3d', paddingLeft: '19px' } : {}}
      onClick={onClick}
    >
        <div className="h-4 w-4 rounded-full bg-white shadow"></div>
      </div>
    </td>
  );

  const toggleStyles = {
    backgroundColor:'#537d3d',
    paddingLeft:'19px'
  }

  const handleClick = (index) => {
    setToggleStates((prevStates)=>{
        const newStates = [...prevStates]
        newStates[index] = !newStates[index]
         console.log(index)
        return newStates
       
    })
  }


useEffect(() => {
  const fetchAdmins = async () => {
    const response = await axios.get('http://localhost:3001/api/v1/user/fetch-all-users')
    console.log(response?.data?.data)
    setData(response?.data?.data)
  }
  fetchAdmins()
}, [])

console.log(data)

  return (
    <div className="font-sans w-full  relative px-4 py-8 top-[35px]">
      
      <div className='bg-slate-50 h-28 w-full rounded-tr-lg rounded-tl-lg
      md:px-10 px-2'>
      <div className="flex w-full bg-slate-50  justify-between font-['poppins'] pt-8">
        <div className="flex items-center relative text-sm bg-white border-slate-100 rounded-md w-[150px] md:w-[300px] px-1 ">
          <AiOutlineSearch className='left-0 font-bold text-zinc-500 text-lg'/>
          <input type="text" placeholder='Search' className='text-zinc-500 w-full outline-none ' />
        </div>
        <button className='flex items-center bg-[#537d3d] font-["poppins"]
         text-sm text-white py-1 px-2 rounded-md'>
          <AiOutlinePlus className='sm:text-sm mr-2' />
          Add Customer
        </button>
      </div>
      </div>
      <div className='overflow-x-scroll'>
      <table className="rounded-lg w-full mx-auto border-collapse border px- border-gray-300 bg-slate-50">
          
          <thead className='bg-[#f0f7f4] '>
            <tr className="">
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Name</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Phone Number</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Email</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">College</th>
              <th className="px-2 py-1 bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Faculty</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Session</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Date of Graduation</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Book Photo</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Checking for photo</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Taken Photo</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Booked Gown</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Received Gown</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Returned Gown</th>
              <th className="px-2 py-1  bg-white  text-zinc-700 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map(({full_name, email, phone_number, college_name, faculty, gown, photoshoot, 
                date_of_graduation}, index) => <tr>
              <td key={index} className="border flex text-center items-center py-1 px-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap">
               
                {full_name}l</td>
              <td className="border py-1 px-1  text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">{phone_number}</td>
              <td className="border py-1 px-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">{email}</td>
              <td className="border py-1 px-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">{college_name}</td>
              <td className="border py-1 px-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">{faculty}</td>
              <td className="border py-1 px-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Science</td>
              <td className="border py-1 px-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">{date_of_graduation}</td>
              <td className="border py-1 px-1 text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap text-center">Okay</td>
              {toggleStates.map((isToggle, index) => (
              <TableCell key={index} isToggle={isToggle} onClick={() => handleClick(index)} />
            ))}
              <td className="border py-1 px-1 text-center  text-zinc-500 text-sm font-normal font-['Inter'] leading-relaxed whitespace-nowrap"><button className=''><BiSolidEditAlt /></button> <button><MdOutlineDelete className='' /></button></td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
        
      </div>
  );
};

export default AdminTable;
