import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ heading, description, route, image, onClick, label, className, show = true, ...props }) => {
  return (
    <div
    onClick={onClick}
      className="group  shadow-2xl p-6 2xl:p-14 rounded-3xl md:mb-0 mb-10 relative border border-solid border-green"
      {...props}
    >
      <h3 className="text-green  font-bold lg:text-2xl 2xl:text-5xl lg:w-[60%] 2xl:w-[80%]">
        {heading}
      </h3>
      <p className="my-4 overflow-hidden h-24 line-clamp-4 2xl:leading-normal hover:text-clip 2xl:text-3xl 2xl:my-8">
        {description}
      </p>
      <Link
        to={route}
        className={show ? "bg-green text-white font-bold rounded-md py-1 px-4 shadow-lg  2xl:text-2xl" : "bg-gray-300 cursor-auto text-white font-bold rounded-md py-1 px-4 shadow-lg  2xl:text-2xl"}
      >
        {label}
      </Link>
      <img src={image} alt="" className="h-14 2xl:h-24 absolute right-0 bottom-5" />
    </div>
  );
};

export default ServiceCard;
