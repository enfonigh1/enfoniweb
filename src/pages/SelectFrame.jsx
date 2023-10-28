import React, { useEffect, useState } from "react";
import AuthLayout from "../components/AuthLayout";
import logo from "../assets/images/enfoni.svg";
import img from "../assets/images/barbra.svg";
import frame from "../assets/images/frame.png";
import goldframe from "../assets/images/frame1.png";
import blackframelady from "../assets/images/f1.png";
import goldframelady from "../assets/images/f2.png";
import checkedicon from "../assets/images/checkedicon.svg";
import money from "../assets/images/vaadin_money.svg";
import uptoGod from "../assets/images/uptoGod.svg";
import knustlogo from "../assets/images/knustlogo.jpg";
import { usePaystackPayment, PaystackButton } from "react-paystack";
import { NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer, toast } from "react-toastify";
import { set } from "react-hook-form";
import { useSelector } from "react-redux";
import { price } from "../app/features/pricing/priceSlice";
const SelectFrame = () => {
  const [frame1, setFrame1] = useState(false);
  const [frame2, setFrame2] = useState(false);
  const [part, setPartPayment] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [deposit, setDeposit] = useState(0);
  const selectedprice = useSelector(price)
  const [total, setTotal] = useState(deposit + selectedprice || 200);

  const handleClick1 = () => {
    setFrame1(!frame1);
    setFrame2(false);
  };
  const handleClick2 = () => {
    setFrame2(!frame2);
    setFrame1(false);
  };

  const partPayment = (e) => {
    const checked = e.target.checked;
    setPartPayment(checked);
    // checked ? toast.info("Message") : "";
  };
  const deliverySection = (e) => {
    const checked = e.target.checked;
    setDelivery(checked);
  };

  const navigate = useNavigate();
  let grandTotal = selectedprice;



  const handleChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "300":
        // setTotal((prev) => prev + 300);
        grandTotal = frame1 ? grandTotal : grandTotal + 300
        setTotal(grandTotal);
        break;
      case "150":
        // setTotal((prev) => prev + 150);
        grandTotal =frame2 ? grandTotal : grandTotal + 150
        setTotal(grandTotal);
        break;
      default:
        // setTotal(total);
        // grandTotal;
        break;
    }
  };

  const componentsProps = {
    email: "user@gmail.com",
    amount: total * 100,
    publicKey: "pk_test_23f924a439b032f8ec5c594e55dbda122545ad1e",
    currency: "GHS",
    text: "CHECKOUT",
    onSuccess: (data) => {
      sessionStorage.setItem("data", JSON.stringify(data));
      toast.success(data?.status);
      setTimeout(() => {
        navigate("/code");
      }, 4000);
    },
  };

  return (
    <div>
      <ToastContainer />
      <div className="lg:grid lg:grid-cols-2">
        <div className=" inset-0 bg-[url(./assets/images/uptoGod.png)] bg-no-repeat bg-cover h-screen">
          <div className="flex justify-center items-center flex-col space-y-5 bg-white/95 h-screen">
            <img
              src={knustlogo}
              alt=""
              width={50}
              className="mt-4 mix-blend-darken"
            />
            <div className="w-80 h-96">
              <img
                src={frame2 ? goldframelady : blackframelady}
                alt=""
                className="block h-full w-full  object-contain pointer-events-none"
              />
            </div>
            <p className="text-xs text-red-300 text-center w-96 lg:block hidden">
              <span className="font-bold bg-red-100 text-red-400 px-1 mx-2 py-[0.5px]">NOTE:</span>Base price Ghc 200.00. Select a desired frame and the price will be added to the base price as your total.
            </p>
          </div>
        </div>
        <div className="bg-light-green lg:h-[95vh] lg:w-[80%] w-[90%]  mx-auto mt-4 rounded-lg shadow-xl lg:mb-0 mb-10 lg:pb-0 pb-5 ">
          <div className="shadow-xl lg:h-[95%] w-[95%] mx-auto rounded-lg pb-10">
            <h1 className="text-center mt-4 text-xl">SELECT A FRAME</h1>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <NavLink
                to=""
                className="border-[1px] border-solid border-black bg-black text-white h-5 w-5 flex justify-center items-center rounded-sm text-xs"
              >
                1
              </NavLink>
              {delivery ? (
                <span className="w-20 h-[1px] bg-gray-600"></span>
              ) : (
                <></>
              )}
              {delivery ? (
                <NavLink
                  to=""
                  className="border-[1px] border-solid border-black h-5 w-5 flex justify-center items-center rounded-sm text-xs"
                >
                  2
                </NavLink>
              ) : (
                <></>
              )}
              <span
                data-aos=""
                className={`${!delivery ? "w-48" :  "w-20"} h-[1px] bg-gray-600`}
              ></span>
              <NavLink
                to=""
                className="border-[1px] border-solid border-black h-5 w-5 flex justify-center items-center rounded-sm text-xs"
              >
                {delivery ? 3 : 2}
              </NavLink>
            </div>
            <div className="flex justify-center items-center mt-4 space-x-4">
              <div
                className={`${
                  frame1
                    ? "border-2 border-solid border-green "
                    : "border-2 border-solid border-white"
                } shadow-xl rounded-md relative p-1 cursor-pointer bg-white`}
                onClick={handleClick1}
              >
                <div className="w-28 h-36">
                  <img
                    src={frame}
                    alt=""
                    className="w-full h-full mix-blend-darken object-cover pointer-events-none"
                  />
                </div>
                <p className="text-center text-sm">GHC 300</p>
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value="300"
                  className="absolute h-full w-full top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
                />
                {frame1 ? (
                  <img
                    src={checkedicon}
                    alt=""
                    className="absolute -top-2 -right-2"
                    width={20}
                  />
                ) : (
                  ""
                )}
              </div>
              <div
                className={`${
                  frame2
                    ? "border-2 border-solid border-green "
                    : "border-2 border-solid border-white"
                } shadow-xl rounded-md relative p-1 cursor-pointer bg-white`}
                onClick={handleClick2}
              >
                <div className="w-28 h-36">
                  <img
                    src={goldframe}
                    alt=""
                    className="w-full h-full mix-blend-darken object-cover pointer-events-none"
                  />
                </div>
                <input
                  onChange={handleChange}
                  type="checkbox"
                  value="150"
                  className="absolute h-full w-full top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
                />
                <p className="text-center text-sm">GHC 150</p>
                {frame2 ? (
                  <img
                    src={checkedicon}
                    alt=""
                    className="absolute -right-2 -top-2"
                    width={20}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mt-5 lg:ml-14 ml-8">
              <div className="flex  w-80 mx-auto items-center leading-none mb-0">
                <NavLink to="" className="p-2 text-sm shadow-lg bg-white">
                  Product Options
                </NavLink>
                <NavLink to="" className="p-2 text-sm shadow-lg bg-white">
                  Product Details
                </NavLink>
              </div>
              <div className="md:ml-52 shadow-lg h-32 lg:w-[17rem] w-64 bg-white border-gray-400 border-[1px] border-solid text-sm p-2 rounded-md lg:ml-[3.3rem]">
                <p>Material: Wood</p>
                <p>Size Options: Various</p>
                <p>Design Variety: Yes</p>
                <p>Durability: High</p>
                <p>Finish: Multiple</p>
              </div>
              <div className="mt-2 flex items-center w-80 mx-auto space-x-4">
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-green"
                    onChange={partPayment}
                  />
                  <label htmlFor="" className="text-sm">
                    PART PAYMENT
                  </label>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-green"
                    onChange={deliverySection}
                  />
                  <label htmlFor="" className="text-sm">
                    DELIVERY
                  </label>
                </div>
              </div>

              <div className="flex items-end w-80 mx-auto space-x-4 text-sm mb-2">
                <label htmlFor="" className="w-14">
                  TOTAL
                </label>
                <div className="flex justify-center items-center text-xs h-6 shadow-md bg-white rounded-md pl-10 pb-2 w-24 border-solid border-[1px] border-gray-600 pt-0">
                  <span className="mt-2">GHC</span>
                  <input
                    type="number"
                    value={total}
                    disabled
                    className="focus:outline-none border-none p-1 text-xs mt-2 border-gray-400 border-[1px]  rounded-md w-24 bg-transparent"
                  />
                </div>
                <PaystackButton
                  {...componentsProps}
                  className="border-2 bg-white tracking-widest uppercase border-solid border-black py-0.5 px-2 rounded-md shadow-xl text-sm"
                />
              </div>

              {part ? (
                <div
                  data-aos="fade"
                  data-aos-duration="1500"
                  className="flex items-end w-80 mx-auto space-x-4 text-sm"
                >
                  <label htmlFor="" className="w-14">
                    DEPOSIT
                  </label>
                  <div className="flex justify-center items-center text-xs h-6 shadow-md bg-white rounded-md pl-10 pb-2 w-24 border-solid border-[1px] border-gray-600 pt-0">
                    <span className="mt-2">GHC</span>
                    <input
                      min={total / 2}
                      
                      onChange={(e) => {
                        setDeposit(Number(e.target.value));
                        setTotal(Number(e.target.value) + 300);
                      }}
                      type="number"
                      className="focus:outline-none border-none p-1 text-xs mt-2 border-red-400 border-[1px]  rounded-md w-24 bg-transparent"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFrame;
