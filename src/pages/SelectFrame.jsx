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
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { ToastContainer, toast } from "react-toastify";
import { set } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { price } from "../app/features/pricing/priceSlice";
import Select from "react-select";
import ReactCodeInput from "react-code-input";
import axios from "axios";
import { useCheckPaymentStatusMutation, usePostPaymentMutation, useSubmitOtpMutation } from "../app/features/payment/paymentApiSlice";
import { IoChevronBack } from "react-icons/io5";
import { paymentInfo, paymentinfo } from "../app/features/payment/paymentSlice";
import { authuser, userinfo } from "../app/features/authSlice/authSlice";
import clsx from "clsx";
const SelectFrame = () => {
  const [frame1, setFrame1] = useState(false);
  const [frame2, setFrame2] = useState(false);
  const [frame, setFrame] = useState({type: "Basic", price: "GHS 200"});
  const [part, setPartPayment] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [showcode, setShowCode] = useState(false);
  const [deposit, setDeposit] = useState(0);
  const [otp, setOtp] = useState("");
  const selectedprice = useSelector(price)
  const [total, setTotal] = useState(deposit + selectedprice || 200);
  const [phone, setPhone] = useState("")
  const [provider, setProvider] = useState("")
  const [postpayment, {isLoading}] = usePostPaymentMutation()
  const [submitopt] = useSubmitOtpMutation()
  const [paymentStatus] = useCheckPaymentStatusMutation()
  const [value, setValue] = useState("")
  

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
        setFrame({type: "Wooden Frame", price: "GHS 300"})
        break;
      case "150":
        // setTotal((prev) => prev + 150);
        grandTotal =frame2 ? grandTotal : grandTotal + 150
        setTotal(grandTotal);
        setFrame({type: "Mount Card", price: "GHS 150"})
        break;
      default:
        // setTotal(total);
        // grandTotal;
        break;
    }
  };

  const componentsProps = {
    email: "info@enfonigh.com",
    amount: total * 100,
    publicKey: "pk_test_141b3eb35c4d93a67e8973362212a778be57b17e",
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

  const disptach = useDispatch()
  const handleCheckout = async (e) => {
    e.preventDefault()
   
    try {
      if(!phone && !provider){
        return toast.error("Please enter phone number and provider")
      }
      const results = await postpayment({amount: total, provider: provider, phone: phone}).unwrap()
      if(results?.status === true){
        setIsOpen(results?.status)
        disptach(paymentInfo({...results}))
      }
      console.log(results)
      toast.error("Too many attempt please try again later")
    } catch (error) {
      
    }  
  }

  const handleOtp = async (e) => {
    e.preventDefault()
    try {
      const results = await submitopt({otp: otp, reference: ""}).unwrap
    } catch (error) { 
    }
  }

  const reference = useSelector(paymentinfo)
  const userdetails = useSelector(authuser)
  const [count, setCount] = useState(1)
  setInterval(() => {
    setCount(count + 1)
  }, 5000)

  useEffect(() => {
    const checkPaymentStatus = async () => {
      
      try {
        const results = await axios.post("http://localhost:3001/api/v1/user/check-payment-status", {reference: reference, id: userdetails?.user_id, frame: frame})
      if(results?.data?.data?.amount){
        setIsOpen(false)
        setShowCode(true)
        setValue(userdetails?.user_id.slice(0, 6).toUpperCase())
      }
      } catch (error) {
        console.log("An error occured")
      }
    }
    checkPaymentStatus()
  }, [count])

  console.log(value)

  

  const options = [{value: "Kumasi", label: "Kumasi GHS 20"}, {value: "Outside Kumasi", label: "Outside Kumasi GHS 30"}]

  const [Proceed, setProceed] = useState(false)
  const handleProceed = () => {
    setProceed(true)
  }

  const [location, setLocation] = useState("")
  const [deliverLocation, setDeliveryLocation] = useState("")
  const [clx, setClx] = useState(false)

  useEffect(() => {
    if(location && deliverLocation){
      setClx(true)
    }
  }, [location,deliverLocation])



  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
    setShowCode(false)
  }



  return (
    <div>
      <ToastContainer />
      <div className="lg:grid lg:grid-cols-2 relative">
      <Link to="/" className="absolute lg:top-4 left-8 text-sm border border-solid border-green px-3 rounded-full flex items-center text-green"><IoChevronBack /> Back</Link>
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
        <div className="bg-light-green lg:h-[95vh] lg:w-[80%] w-[90%]  mx-auto mt-4 rounded-lg shadow-xl lg:mb-0 mb-10 lg:pb-0 pb-5">
       
       
          {/*  */}
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
                  className={`${delivery ? "bg-black text-white" : ""} border-[1px] border-solid border-black h-5 w-5 flex justify-center items-center rounded-sm text-xs`}
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

            {/*  */}
           {
            delivery ? <>
              <form action="" className="w-64 mx-auto my-8 space-y-4">
                <div className="flex flex-col">
                  <label htmlFor="">Location <span>*</span></label>
                  <Select placeholder="Please select location" onChange={e => setLocation(e.value)} options={options}/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Delivery Address <span>*</span></label>
                  <input type="text" className="rounded border h-9 border-black border-solid px-3" onChange={e => setDeliveryLocation(e.target.value)}/>
                </div>
              </form>
            </> :  <div className="flex justify-center items-center mt-4 space-x-4">
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
           }

            {/*  */}
            <div className="mt-5 lg:ml-14 ml-8">
              {
                delivery ? <></> : <>
              
              <div className="md:ml-52 lg:w-[17rem] w-64 text-sm p-2 rounded-md lg:ml-[3.3rem]">
               <input type="tel" onChange={e => setPhone(e.target.value)} className="h-[2.5rem] w-full focus:outline-gray-600 px-2 rounded" placeholder="Enter Momo number"/>
               
               <Select placeholder="Please select provider" className="my-2" onChange={e => setProvider(e.value)} options={[{value: "mtn", label: "MTN"}, {value: "tgo", label: "Airtel/Tigo"},{value: "vod", label: "Vodafone"},]}/>
               
              </div>
                </>
              }
              <div className="mt-2 flex items-center w-80 mx-auto space-x-4">
                {/* <div className="flex space-x-2">
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
                </div> */}
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

              <div className="flex items-end w-80 mx-auto space-x-4 text-sm mb-2 mt-3">
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
                
                 <button
                
                  onClick={handleCheckout}
                  className="border-2 w-28 flex justify-start items-center mx-auto bg-white tracking-widest uppercase border-solid border-black py-0.5 px-2 rounded-md shadow-xl text-sm"
                >{isLoading ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="15" stroke-dashoffset="15" stroke-linecap="round" stroke-width="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg> : "CHECKOUT"}</button>
                
              </div>

              {/* {part ? (
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
              )} */}

                    {/* <!-- Modal container --> */}
    <div id="myModal" className={ isOpen ? "fixed top-0 left-0 w-full h-full flex items-center justify-center z-500 bg-black/70" : "hidden"}>
        <div className="modal-dialog bg-white md:w-1/2 w-[80%] p-6 rounded shadow-lg">
            <div className="modal-content">
              <div className="flex justify-between items-center">
              <span></span>
                <span onClick={handleClose} id="closeModalBtn" className="right-0 text-gray-700 text-2xl cursor-pointer">&times;</span>
              </div>
                <div className="card">
                    <form className="flex flex-col justify-center items-center">
                      <p className="text-sm my-2 text-green">Please enter the OTP sent to your mobile device</p>
                       <ReactCodeInput fields={6} value={value}/>
                       
                     
                        <button onClick={handleOtp} className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center">CHECKOUT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div id="myModal" className={ showcode ? "fixed top-0 left-0 w-full h-full flex items-center justify-center z-500 bg-black/70" : "hidden"}>
        <div className="modal-dialog bg-white md:w-1/2 w-[80%] p-6 rounded shadow-lg">
            <div className="modal-content">
              <div className="flex justify-between items-center">
              <span></span>
                <span onClick={handleClose} id="closeModalBtn" className="right-0 text-gray-700 text-2xl cursor-pointer">&times;</span>
              </div>
                <div className="card">
                    <form className="flex flex-col justify-center items-center">
                      {/* <p className="text-sm my-2 text-green">Please enter the OTP sent to your mobile device</p> */}
                       <ReactCodeInput fields={6} value={value}/>
                       
                     
                        <button onClick={handleOtp} className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center">CHECKOUT</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFrame;
