import React, { useState } from "react";
import DashboardLayout from "./dashbordLayout";
import DashBoardHeader from '../components/dashboardHeader';
import shoot1 from "../assets/images/shoot1.jpg";
import shoot2 from "../assets/images/shoot2.jpg";
import shoot3 from "../assets/images/shoot3.jpg";
import shoot4 from "../assets/images/shoot4.jpg";
import shoot5 from "../assets/images/shoot5.jpg";
import shoot6 from "../assets/images/shoot6.jpg";
import { BiDownload } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaBarsStaggered } from "react-icons/fa6";
import { Menu } from "../components/Menu";
import Popup from "../components/popupmenu";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdCloseCircle } from 'react-icons/io';
import Profile from '../components/profile';

const MyPhotoshoots = () => {
  const shoots = [
    { price: 100, img: shoot1 },
    { price: 100, img: shoot2 },
    { price: 100, img: shoot3 },
    { price: 200, img: shoot4 },
    { price: 100, img: shoot5 },
    { price: 350, img: shoot6 },
  ];

  const [zoomedSrc, setZoomedSrc] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const [isOPen, setISOpen] = useState(false);
  const [profile, setProfile] = useState(false);

  function handleOpen() {
    setToggleMenu(true);
  }

  function handleClose() {
    setToggleMenu(false);
  }

  const handleImageChange = (shoot) => {
    setZoomedSrc(shoot);
    setIsZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsZoomed(false);
  };

  const handleChange = (e, img, price, index) => {
    if (e.target.checked) {
      setTotal((prevTotal) => prevTotal + price);
      setDetails([...details, { img, price }]);
    } else {
      setTotal((prevTotal) => prevTotal - price);
      setDetails(details.filter((item, i) => i !== index));
    }
  };

  return (
    <DashboardLayout>
      {toggleMenu ? (
        <Menu closeMenu={handleClose} />
      ) : (
        <div className="w-full flex flex-col items-center justify-center h-screen relative md:top-[90px] top-[90px]">
          <DashBoardHeader setProfile={setProfile} />
          {profile ? <Profile /> : <></>}
          <div className="flex justify-between flex-grow">
            <div>
              <div className="flex mb-4 justify-between">
                <div
                  className="block fixed z-[10001] top-7 left-4 md:hidden"
                  onClick={handleOpen}
                >
                  <FaBarsStaggered />
                </div>
              </div>
              <div className="grid  lg:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-7 relative">
                {isZoomed && (
                  <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]"
                    onClick={handleCloseZoom}
                  >
                    <div className="max-h-full max-w-full overflow-auto">
                      <img
                        src={zoomedSrc}
                        alt=""
                        className="mx-auto h-full w-full md:h-160 xl:h-138"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      />
                    </div>
                    <AiOutlineClose
                      onClick={handleCloseZoom}
                      className="absolute top-4 right-4 text-white text-2xl cursor-pointer"
                    />
                  </div>
                )}
                {shoots.map(({ img, price }, index) => (
                  <div
                    key={index}
                    className="flash-photo w-[200px] h-[200px] md:w-[280px] md:h-[340px] rounded-lg shadow flex items-end"
                    style={{
                      backgroundImage: `url(${img}`,
                      backgroundSize: "cover",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="self-start ml-2 mt-2"
                      onChange={(e) => {
                        handleChange(e, img, price, index);
                      }}
                    />
                    <div className="flex justify-between px-4 w-full">
                      <div>
                        <button
                          className="download-button"
                          onClick={() => window.open(img, '_blank')}
                        >
                          <BiDownload className="text-white text-2xl" />
                        </button>
                      </div>
                      <div>
                        <AiFillEye
                          onClick={() => handleImageChange(img)}
                          className="text-white text-2xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {isOPen ? <Popup /> : <></>}
        </div>
      )}

      {details.length > 0 && (
        <div className="mt-4 rounded-tl-lg rounded-tr-lg h-16 w-full flex bg-light-green">
          <p className="ml-4 text-white font-bold">Total Price: ${total}</p>
        </div>
      )}

      {isOPen ? (
        <div className="absolute right-6 p bottom-10 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white">
          <IoMdCloseCircle
            onClick={() => {
              setISOpen(false);
            }}
            className=""
          />
        </div>
      ) : (
        <div className="absolute right-6 p bottom-10 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white">
          <IoSettingsSharp
            onClick={() => {
              setISOpen((prevState) => !prevState);
            }}
            className=""
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default MyPhotoshoots;
