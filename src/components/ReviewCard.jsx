import React from "react";
import star from "../assets/images/star.svg";
import star_outlined from "../assets/images/star_outlined.svg";
const ReviewCard = ({
  image = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  name = "Andrews",
  position = "UI Designer",
  heading = "It was a very good experience",
  description = "Choosing the services for my graduation from this website was the best decision I made. The attention to detail in my gown and the seamless photoshoot experience truly made my day memorable",
}) => {
  return (
    <div
      className="rounded-3xl py-16 px-10 ml-3 shadow-3xl relative"
      // data-aos="fade-up"
      // data-aos-duration="2000"
    >
      <div className="flex justify-between items-end">
        <div className="flex justify-start items-center">
          <div
            type="button"
            className="h-12 w-12 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <img
              className=" rounded-full 2xl:h-18 2xl:w-18"
              src={image}
              alt=""
            />
          </div>
          <div className="ml-2">
            <h4 className="font-semibold lg:text-[24px] font-Lato">{name}</h4>
            <p className="lg:text-18px] font-Lato">{position}</p>
          </div>
        </div>
        <div className="flex lg:mr-14">
          <img src={star} alt="" className="" />
          <img src={star} alt="" className="" />
          <img src={star} alt="" className="" />
          <img src={star} alt="" className="" />
          <img src={star_outlined} alt="" className="" />
        </div>
      </div>
      <div className="text-justify">
        <h4 className="font-semibold font-Lato  my-6 2xl:text-4xl text-center lg:text-[24px]">
          {heading}
        </h4>
        <p className=" 2xl:text-3xl text-center lg:text-[14px] font-Poppins">
          "{description}”{" "}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
