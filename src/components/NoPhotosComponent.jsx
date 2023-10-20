import React, { useState } from "react";
import emptyphotogallery from "../assets/images/emptyphotogallery.svg";
import { FaBarsStaggered } from "react-icons/fa6";
import { Menu } from "../components/Menu";

const NoPhotosComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleOpen() {
    setToggleMenu(true);
  }

  function handleClose() {
    setToggleMenu(false);
  }

  return (
    <>
      {toggleMenu ? (
        <Menu closeMenu={handleClose} />
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="block fixed z-[1000] top-7 left-4 md:hidden" onClick={handleOpen}>
            <FaBarsStaggered />
          </div>
          <div className="w-24 2xl:w-60">
            <img src={emptyphotogallery} className="w-full" alt="" />
            <p className="text-md 2xl:text-4xl  text-center font-['poppins'] font-bold mt-2">
              No Photos
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NoPhotosComponent;
