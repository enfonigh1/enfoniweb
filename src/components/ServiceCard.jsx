import React from "react";

const ServiceCard = ({ heading, description, ...props }) => {
  return (
    <div className="group  shadow-2xl p-6 rounded-3xl md:mb-0 mb-10" {...props}>
      <h3 className="text-green font-bold lg:text-2xl 2xl:text-4xl">
        {heading}
      </h3>
      <p className="my-2 text-ellipsis overflow-hidden line-clamp-4 hover:text-clip 2xl:text-4xl 2xl:my-8">
        {description}
      </p>
      <button className="bg-green text-white font-bold rounded-md py-1 px-4 shadow-lg 2xl:py-2 2xl:px-10 2xl:text-3xl">
        Book
      </button>
    </div>
  );
};

export default ServiceCard;
