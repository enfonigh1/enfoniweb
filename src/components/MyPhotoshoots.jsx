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
import NoPhotosComponent from '../components/NoPhotosComponent'
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdCloseCircle } from 'react-icons/io';
import Profile from '../components/profile';
import { useSelector } from "react-redux";
import { pcliecked } from "../app/features/profile/profileSlice";

const MyPhotoshoots = () => {
  const shoots = [
    // { price: 100, img: shoot1 },
    // { price: 100, img: shoot2 },
    // { price: 100, img: shoot3 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
    // { price: 200, img: shoot4 },
    // { price: 100, img: shoot5 },
    // { price: 350, img: shoot6 },
   ];

  const [zoomedSrc, setZoomedSrc] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [details, setDetails] = useState([]);
  const [total, setTotal] = useState(0);
  const [isOPen, setISOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const profileclicked = useSelector(pcliecked);
  const [noPhotos, setNoPhotos] = useState(shoots)


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
        <div className="w-screen h-full  relative top-[90px]">
          <DashBoardHeader setProfile={setProfile} />
          {profile ? <Profile /> : <></>}
          {noPhotos.length === 0 ? <NoPhotosComponent  /> : <div className="flex justify-center items-center mb-">
            <div>
              <div className="flex mb-4  justify-between">
                <div
                  className="block fixed z-[10001] top-7 left-4 md:hidden"
                  onClick={handleOpen}
                >
                  <FaBarsStaggered />
                </div>
              </div>
              <div className="grid px-4 md:px-0  lg:grid-cols-3 2xl:grid-cols-4 grid-cols-2 gap-7 relative mb-10">
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
                {noPhotos.map(({ img, price }, index) => (
                  <div
                    key={index}
                    className="flash-photo w-[150px] h-[150px] md:w-[280px] md:h-[340px] rounded-lg shadow flex items-end"
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
                        <a href=""
                        download={img}
                          className="download-button"
                          // onClick={() => window.open(img, '_blank')}
                        >
                          <BiDownload className="text-white text-2xl" />
                        </a>
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
          </div>}
          
          {details.length > 0 ? (
        <div className="mt-4 fixed bottom-0 left-0 px-0 md:px-8 flex md:left-[20%] right-0  justify-between rounded-tl-lg w-6xl rounded-tr-lg h-16  bg-light-green">
          <p className="ml-4 font-bold font-['poppins'] text-gray-700 text-lg tracking-wide self-center">Total Price: GH¢{total}</p>
          <button className="py-1 self-center mr-8 bg-[#537d3d] px-8 text-white rounded-lg font-[900] font-['poppins'] text-[16px] tracking-wide">Pay</button>
        </div>
      )  : <></>}
          {isOPen ? <Popup /> : <></>}
        </div>
      )}



      {isOPen ? (
        <div className="absolute right-6 p bottom-16 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white">
          <IoMdCloseCircle
            onClick={() => {
              setISOpen(false);
            }}
            className="cursor-pointer"
          />
        </div>
      ) : (
        <div className="absolute right-6 p bottom-16 z-[1000] text-4xl rounded-full p-2 bg-black/50 max-w-[400px] max-h-[400px] text-white">
          <IoSettingsSharp
            onClick={() => {
              setISOpen((prevState) => !prevState);
            }}
            className="cursor-pointer"
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default MyPhotoshoots;
