import React from "react";
import { BiCheck } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import howtoorder from "../assets/images/howtoorder.png";
import faq from "../assets/images/faq.png";
import list from "../assets/images/list.svg";
import f1 from "../assets/images/f1.png";
import f2 from "../assets/images/f2.png";
import { useDispatch } from "react-redux";
import { currentPrice } from "../app/features/pricing/priceSlice";
import promo from "../assets/gif/promo.gif"

const Pricing = () => {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    dispatch(currentPrice(300))
  };
  const handleClick1 = (e) => {
    dispatch(currentPrice(450))
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

        {/* One */}
        <div
        
          className="border-2 relative border-green/50 hover:bg-gray-50 hover:transition-all duration-500 border-solid rounded-xl lg:p-8 p-8"
        >
          <img src={promo} alt="" className="h-16 absolute -top-4 -left-2"/>
          <div className="h-56">       
          <div className="flex justify-center items-center mb-0 pb-0 h-24">
            <h1 className="text-green font-Poppins font-semibold text-center text-[7rem]">7</h1>
          <h1 className="text-gray-700 font-Poppins text-center text-2xl">
            <h1>DIGITAL</h1>
            <h1>PHOTOS</h1>
          </h1>
          </div>
          <img src={list} alt=""  height={800} className="block"/>
          </div>
          <h1 className="text-gray-700 text-4xl text-center font-semibold">
            GHC 200
          </h1>
          <Link
            to="/select-frame"
            onClick={handleClick}
            className="inline-block text-center border-[1px] my-8 hover:transition-all duration-500 bg-green text-white hover:bg-green hover:text-white hover:ease-in border-solid border-green  w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
          {/* <span className="flex items-center text-gray-700 space-x-4">
            <span>
              <BiCheck className="text-2xl" />
            </span>
            <span>7 Digita Pictures</span>
          </span> */}
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

        {/* END OF ONE */}


        {/* Two */}
        <div
        
          className="border-[1px] cursor-not-allowed  md:my-0 my-10 border-gray-400/50 border-solid rounded-xl lg:p-8 p-8"
        >
          {/* <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Standard
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p> */}
          <div className="h-56">

          <img src={f1} alt="" className="h-48 mx-auto block"/>
          </div>
          <h1 className="text-gray-700 text-4xl text-center font-semibold line-through">
            GHC 450
          </h1>
          <Link

          // onClick={handleClick1}
            // to="/select-frame"
            className="inline-block cursor-not-allowed text-center border-[1px] my-8  border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
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
            <span>Mount Card + 7 digital pictures</span>
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
            <span>Mount Card</span>
          </span>
        </div>

        {/* END OF TWO */}

        {/* Three */}
        <div
          
          className="border-[1px] cursor-not-allowed  md:my-0 my-10 border-gray-400/50 hover:transition-all duration-500 border-solid rounded-xl lg:p-8 p-8"
        >
          {/* <h1 className="text-gray-700 font-Poppins font-semibold text-center text-2xl">
            Framed
          </h1>
          <p className="text-gray-700 my-5 text-center">One time payment</p> */}
           <div className="h-56">

<img src={f2} alt="" className="h-48 mx-auto block"/>
</div>
          <h1 className="text-gray-700 text-4xl text-center font-semibold decoration-slice line-through">
            GHC 300
          </h1>
          <Link
          // onClick={handleClick}
            // to="/select-frame"
            className="inline-block text-center cursor-not-allowed border-[1px] my-8 hover:transition-all duration-500  border-solid border-green text-gray-700 w-full py-3 rounded-md"
          >
            Choose this plan
          </Link>
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
            <span>Mount Card + 7 digital pictures</span>
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
            <span>Mount Card</span>
          </span>
        </div>

        {/* END OF THREE */}
        
        {/* <div className="flex items-center space-x-3">
        <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
      </span>
      <span className="text-sm">GHC 100 per extra printed photo</span>
        </div> */}

      </div>
    </div>
  );
};

export default Pricing;
