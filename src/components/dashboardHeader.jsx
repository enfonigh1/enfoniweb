import React from "react";
import KnustEmblem from "../assets/images/KnustEmblem.svg";
import { RxAvatar } from 'react-icons/rx';

const DashboardHeader = ({ setProfile }) => {
  const headerStyle = {
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    position: "absolute",
    zIndex: "100",
    top: "-50px",
    left: "50%",
    transform: "translateX(-50%)", // Center horizontally
  };

  return (
    <header className="bg-white w-full fixed  md:left-[15%] lg:left-[10%] z-[900] top-[0px] ">
      <nav className="w-full py-6 relative  ">
        <div className="w-24 h-48 lg:w-24 lg:h-48 flex " style={headerStyle}>
          <img
            src={KnustEmblem}
            alt=""
            className="w-full h-full absolute "
            data-aos="fade-in"
            data-aos-duration="1500"
          />
        </div>
        <div className="flex justify-end md:mr-36">
          <div className="md:w-10 md:h-10 w-7 h-7 lg:p-2 p-1 bg-slate-100 rounded-full mr-4">
            <div
              className="w-full h-full cursor-pointer"
              onClick={() => {
                setProfile((prev) => !prev);
              }}
            >
              <RxAvatar className="w-full h-full" alt="" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
