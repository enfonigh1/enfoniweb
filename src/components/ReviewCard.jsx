import React from "react";
import profile from "../assets/images/evans.jpg"

import { BsStar, BsStarFill } from "react-icons/bs";
const ReviewCard = ({
  image = profile,
  name = "Evans",
  position = "Graduate",
  heading = "It was a very good experience",
  description = "Choosing the services for my graduation from this website was the best decision I made. The attention to detail in my gown and the seamless photoshoot experience truly made my day memorable",
}) => {
  return (
    <div
      className="rounded-3xl py-16 2xl:py-32 2xl:pb-32 2xl:px-24 px-10 ml-3 shadow-3xl relative"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="flex justify-between items-end">
        <div className="flex justify-start items-center">
          <div
            type="button"
            className="h-12 w-12 2xl:h-24 2xl:w-24 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <img
              className=" rounded-full 2xl:h-24 2xl:w-24"
              src={image}
              alt=""
            />
          </div>
          <div className="ml-2">
            <h4 className="font-semibold lg:text-[24px] 2xl:text-5xl font-Lato">{name}</h4>
            <p className="lg:text-18px] font-Lato 2xl:text-3xl">{position}</p>
          </div>
        </div>
        <div className="flex space-x-1 lg:mr-14">
          <BsStarFill className="text-yellow-500 2xl:text-3xl"/>
          <BsStarFill className="text-yellow-500 2xl:text-3xl"/>
          <BsStarFill className="text-yellow-500 2xl:text-3xl"/>
          <BsStarFill className="text-yellow-500 2xl:text-3xl"/>
          <BsStar className="text-yellow-500 2xl:text-3xl"/>
        </div>
      </div>
      <div className="text-justify">
        <h4 className="font-semibold font-Lato  my-6 2xl:my-12 2xl:text-5xl text-center lg:text-[24px]">
          {heading}
        </h4>
        <p className=" 2xl:text-3xl text-center lg:text-[14px] font-Poppins 2xl:leading-normal" >
          "{description}”{" "}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
