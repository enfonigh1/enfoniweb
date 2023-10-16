import React from "react";
import { BiCheck } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import howtoorder from "../assets/images/howtoorder.png";
import faq from "../assets/images/faq.png";

const Pricing = () => {
  const handleClick = (e) => {
    console.log(e.target);
  };

  const data = [
    {
      id: 1,
      name: "Flat Rate",
      price: 300,
      plan1: {
        desc: "7 Digita Pictures",
        checked: true
      },
      plan2: {
        desc: "Retouched",
        checked: true
      },
    },
    {
      id: 2,
      name: "Standard",
      price: 400,
      plan1: {
        desc: "7 Digita Pictures",
        checked: true
      }
    },
    {
      id: 1,
      name: "Flat Rate",
      price: 300,
      plan1: {
        desc: "7 Digita Pictures",
        checked: true
      }
    },
    {
      id: 1,
      name: "Flat Rate",
      price: 300,
      plan1: {
        desc: "7 Digita Pictures",
        checked: true
      }
    },
    {
      id: 1,
      name: "Flat Rate",
      price: 300,
      plan1: {
        desc: "7 Digita Pictures",
        checked: true
      }
    },
  ]

  return (
    <div className="lg:mx-20 px-6" id="pricing">
      <h1 className="text-center font-bold  md:text-5xl text-4xl text-green 2xl:text-8xl 2xl:mt-24 lg:mt-28">
        Pricing
      </h1>
      <div className="md:grid md:grid-cols-3 md:my-20 my-10 md:gap-5">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="10"
          className="border-2 border-green/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl lg:p-16 p-8"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Flat Rate
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 300
          </h1>
          <Link
            to=""
            onClick={handleClick}
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 bg-green text-white hover:bg-green hover:text-white hover:ease-in border-solid border-green  w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>7 Digita Pictures</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Retouched</span>
          </span>

          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Frame</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Mount Card</span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="border-[1px] md:my-0 my-10 border-gray-400/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl lg:p-16 p-8"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Standard
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 400
          </h1>
          <Link
            to=""
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 hover:bg-green hover:text-white hover:ease-in border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>1 Picture</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Retouched</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl font-bold text-gray-700" />
            </span>
            <span>Wooden Frame</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl font-bold text-gray-700" />
            </span>
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Mount Card</span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="border-[1px] md:my-0 my-10 border-gray-400/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl lg:p-16 p-8"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Framed
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 300
          </h1>
          <Link
            to=""
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 hover:bg-green hover:text-white hover:ease-in border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Frame ONLY</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl font-bold text-gray-700" />
            </span>
            <span>Wooden Frame</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Free Delivery</span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="border-[1px] md:my-0 my-10 border-gray-400/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl lg:p-16 p-8"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Mounted
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 150
          </h1>
          <Link
            to=""
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 hover:bg-green hover:text-white hover:ease-in border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>1 Picture</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Retouched</span>
          </span>

          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl font-bold text-gray-700" />
            </span>
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl font-bold text-gray-700" />
            </span>
            <span>Mount Card</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-xl font-bold text-red-400" />
            </span>
            <span>Wooden Frame</span>
          </span>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="border-[1px] md:my-0 my-10 border-gray-400/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl lg:p-16 p-8"
        >
          <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Mount Card
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 100
          </h1>
          <Link
            to=""
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 hover:bg-green hover:text-white hover:ease-in border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>Mount Card ONLY</span>
          </span>

          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-2xl font-bold text-red-400" />
            </span>
            <span>Free Delivery</span>
          </span>
          <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <LiaTimesSolid className="text-2xl font-bold text-red-400" />
            </span>
            <span>Pictures</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
