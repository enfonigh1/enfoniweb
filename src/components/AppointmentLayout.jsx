import React, { useState } from "react";
import AppointmentDetail from "./AppointmentDetail";
import AppointHistory from "./AppointHistory";
import { BiSolidCaretLeftCircle } from "react-icons/bi";
import popmenu from './popupmenu'
import { NavLink } from "react-router-dom";
import {BsPlayCircle} from 'react-icons/bs'

const AppointmentLayout = ({ onClick, goBackToAppointment }) => {
  const [details, setDetails] = useState(<AppointmentDetail />);
  const[showPopMenu,setShowPopMenu] = useState(false);
  const[active, setActive] =useState("");

 
  const handleClick =(e) => {
    switch (e) {
      case "appointment":
        setDetails(<AppointmentDetail />);
        break;
      case "history":
        setDetails(<AppointHistory />);
        break;
      default:
        setDetails(<AppointmentDetail />);
        break;
    }
  };

  console.log(showPopMenu)

  return (
    <div>
      

      <div className="w-full absolute -top-[110px] z-50 left-0 right-0 bottom-0 bg-white flex flex-col justify-endh-2">
      <button onClick={goBackToAppointment} className="flex absolute top-[110px] left-2 z-[1000] cursor-pointer items-center uppercase  text 2xl:text-3xl font-semibold text-zinc-500 font-['Inter'] leading-tight">
          <BiSolidCaretLeftCircle className="mr-1 2xl:mr-2" />
          Appointment
        </button>
        <div
          onClick={(e) => {
            // Prevent button clicks from triggering the parent div click
            if (e.target.tagName !== "BUTTON") {
              return;
            }

            const buttonType = e.target.getAttribute("data-type");
            handleClick(buttonType);
            
          }}
          className=" bg-[#8E8B85] rounded-tl flex justify-between rounded-tr-sm rounded-bl rounded-br-sm shadow mt-36 items-center mb-6 2xl:mt-40"
        >
          <button
            data-type="appointment"
            className={`text-white text-sm 2xl:text-4xl font-normal font-['Inter'] leading-tight py-1 2xl:py-2 px-7 flex w-full ${active == "appointment" ? "bg-neutral-500":""}`}
            onClick={()=>{
              setActive("appointment")
            }}
          >
            Appointment
          </button>

          <button
            data-type="history"
            className={`text-white text-sm 2xl:text-4xl font-normal font-['Inter'] leading-tight py-1 2xl:py-2 px-7 flex w-full ${active == "history" ? "bg-neutral-500":""}`}
            onClick={()=>{
              setActive("history")
            }}
          >
            History
          </button>
        </div>
        {details}
        {showPopMenu ? <popMenu /> : <></> }
      </div>
      
    </div>
  );
};

export default AppointmentLayout;
