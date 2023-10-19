import React from "react";
import emptyphotogallery from "../assets/images/emptyphotogallery.svg";

const NoPhotosComponent = () => {
  return (
    <div className="flex h-[85%] justify-center items-center">
      <div className="w-24">
        <img src={emptyphotogallery} className="h-full w-full" alt="" />
        <p className="text-md text-center font-['poppins'] font-bold mt-2">No Photos</p>
      </div>
    </div>
  );
};

export default NoPhotosComponent;
