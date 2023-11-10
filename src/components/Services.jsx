import React, { useEffect, useState } from "react";
import Text from "./Text";
import ServiceCard from "./ServiceCard";
import gift from "../assets/images/gift.svg";
import hat from "../assets/images/hat.svg";
import photo from "../assets/images/photo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  authuser,
  userService,
  userinfo,
} from "../app/features/authSlice/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { PaystackButton } from "react-paystack";
import Select from "react-select";
import {
  usePostPaymentMutation,
  useSubmitOtpMutation,
} from "../app/features/payment/paymentApiSlice";
import { price, setprice } from "../app/features/pricing/priceSlice";
import { paymentInfo, paymentinfo } from "../app/features/payment/paymentSlice";
import ReactCodeInput from "react-code-input";

const Services = () => {
  const [data, setData] = useState([]);
  const [icons, setIcons] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [postpayment, { isLoading }] = usePostPaymentMutation();
  const [showCode, setShowCode] = useState(false);
  const selectedprice = useSelector(price);
  const [total, setTotal] = useState(200);
  const [phone, setPhone] = useState("");
  const [provider, setProvider] = useState("");
  const [otp, setOtp] = useState("");
  const [submitopt, { isLoading: isOtpLoading }] = useSubmitOtpMutation();
  useEffect(() => {
    try {
      const fetchImages = async () => {
        const response = await axios.get(
          "https://cdn.contentful.com/spaces/eiay889h63d6/entries?access_token=_ER0elHI8f-x6bMEay5J_14Ku1T-wa4pXfUcBaoF6Po&content_type=services"
        );
        setData(response?.data?.items);
        setIcons(response?.data?.includes?.Asset);
        // console.log(response)
      };
      fetchImages();
    } catch (error) {
      console.log(error?.message);
    }
  }, []);

  const navigate = useNavigate();

  const details = useSelector(authuser);
  // console.log(details)
  const userdetails = useSelector(userinfo);
  const disptach = useDispatch();

  const handleGown = () => {
    disptach(userService("gown"));
    if (!details?.gown || details?.gown === false) {
      navigate("/details");
    }
  };
  const handlePhoto = () => {
    disptach(userService("photo"));
    if (details?.photoshoot) {
      navigate("/select-frame");
    } else {
      navigate("/details");
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMerch = () => {
    // disptach(userService("photo"))
    setIsOpen(!isOpen);
  };

  const handleResponse = [handleMerch, handlePhoto, handleGown];

  const handleShadow = (e) => {
    switch (e) {
      case "200":
        setIsClicked1(true);
        setIsClicked2(false);
        setIsClicked3(false);
        setTotal(200);
        break;
      case "500":
        setIsClicked2(true);
        setIsClicked1(false);
        setIsClicked3(false);
        setTotal(500);
        break;
      case "350":
        setIsClicked3(true);
        setIsClicked1(false);
        setIsClicked2(false);
        setTotal(350);
        break;
      default:
        setIsClicked3(false);
        setIsClicked1(false);
        setIsClicked2(false);
        setTotal(200);
        break;
    }
  };

  const componentsProps = {
    email: "user@gmail.com",
    amount: 100,
    publicKey: "pk_test_23f924a439b032f8ec5c594e55dbda122545ad1e",
    currency: "GHS",
    text: "CHECKOUT",
    onSuccess: (data) => {
      // sessionStorage.setItem("data", JSON.stringify(data));
      // toast.success(data?.status);
      // setTimeout(() => {
      //   navigate("/code");
      // }, 4000);
      console.log(data);
    },
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const results = await postpayment({
        amount: total,
        provider: provider,
        phone: phone,
      }).unwrap();
      if (results?.status === true) {
        setShowCode(results?.status);
        disptach(paymentInfo({ ...results }));
      }
      console.log(results);
      toast.error("Too many attempt please try again later");
    } catch (error) {}
  };

  const reference = useSelector(paymentinfo);

  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const results = await submitopt({ otp: otp, reference: reference })
        .unwrap;
    } catch (error) {}
  };

  return (
    <div className="lg:px-24  px-6 bg-gray-100 py-10 pb-28" id="services">
      <h1 className="lg:text-5xl font-Poppins text-4xl font-[700] mt-8 2xl:mt-24 text-green text-center 2xl:text-8xl">
        Our Services
      </h1>
      <p className="lg:w-128 w-80 mx-auto font-Poppins text-center  mt-4 2xl:text-3xl 2xl:w-[60rem] 2xl:my-8">
        From personalised gown fittings to professional photography sessions, we
        ensure every detail is perfected.{" "}
      </p>
      <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-3 md:gap-5">
        {data.map((item, index) => (
          <ServiceCard
            label={
              userdetails?.photoshoot && index === 1
                ? "Booked"
                : userdetails?.gown && index === 2
                ? "Booked"
                : "Book"
            }
            onClick={handleResponse[index]}
            // route={index === 1 && details?.photoshoot ? "/select-frame" : index === 2 && details?.gown ? "" : ""}
            image={icons[index]?.fields?.file?.url}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="0"
            heading={item?.fields?.header}
            // show={index === 2 ? false : true}
            description={item?.fields?.body?.content[0]?.content[0]?.value}
          />
        ))}

        {/* <!-- Modal container --> */}
        <div
          id="myModal"
          className={
            isOpen
              ? "fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-black/70 overflow-y-scroll"
              : "hidden"
          }
        >
          <div className="modal-dialog bg-white md:w-1/2 w-[90%] p-6 rounded shadow-lg">
            <div className="modal-content">
              <div className="flex justify-between items-center">
                <span></span>
                <span
                  onClick={handleClose}
                  id="closeModalBtn"
                  className="right-0 text-gray-700 text-2xl cursor-pointer"
                >
                  &times;
                </span>
              </div>
              <div className="card">
                {showCode ? (
                  <form className="flex flex-col justify-center items-center text-green">
                    <p className="text-center text-xs my-2">
                      Please complete the authorisation process by inputting
                      your PIN on your mobile device
                    </p>
                    <ReactCodeInput fields={6} className="" />
                    <button
                      onClick={handleOtp}
                      className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center"
                    >
                      {isOtpLoading ? "Loading..." : "SUBMIT"}
                    </button>
                  </form>
                ) : (
                  <form>
                    <div className="mb-4">
                      <label
                        for="inputField"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Full Name:
                      </label>
                      <input
                        type="text"
                        id="inputField"
                        required
                        name="inputField"
                        className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        for="inputField"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Phone Number:
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                        id="inputField"
                        required
                        name="inputField"
                        className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        for="inputField"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Provider:
                      </label>
                      <Select
                        onChange={(e) => setProvider(e.value)}
                        placeholder="Please select provider"
                        className="my-2"
                        options={[
                          { value: "mtn", label: "MTN" },
                          { value: "tgo", label: "Airtel/Tigo" },
                          { value: "vod", label: "Vodafone" },
                        ]}
                      />

                      {/* <input type="text" id="inputField" required name="inputField" className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green" /> */}
                    </div>
                    <div className="lg:grid  lg:grid-cols lg:space-x-3 lg:grid-cols-3 lg:justify-center lg:space-y-0 space-y-3 lg:items-center mx-auto">
                      <div
                        className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4"
                        onClick={() => handleShadow("200")}
                      >
                        <h4 className="font-bold text-green h-12 text-center">
                          Basic (7 Pictures)
                        </h4>
                        <div className="space-x-2 text-center">
                          <input
                            type="radio"
                            defaultChecked
                            name="price"
                            className="accent-green"
                            aria-label=""
                            checked={isClicked1}
                          />
                          <label htmlFor="" className=" mx-auto">
                            GHC 200
                          </label>
                        </div>
                      </div>

                      <div
                        className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4"
                        onClick={() => handleShadow("350")}
                      >
                        <h4 className="font-bold text-green h-12 text-center">
                          Pictures with 1 Card Frame
                        </h4>
                        <div className="space-x-2 text-center">
                          <input
                            type="radio"
                            name="price"
                            className="accent-green"
                            checked={isClicked3}
                          />
                          <label htmlFor="" className=" mx-auto">
                            GHC 350
                          </label>
                        </div>
                      </div>
                      <div
                        className="hover:cursor-pointer border border-green border-solid rounded px-2 py-4"
                        onClick={() => handleShadow("500")}
                      >
                        <h4 className="font-bold text-green h-12 text-center">
                          Pictures with 1 Wooden Frame
                        </h4>
                        <div className="space-x-2 text-center">
                          <input
                            type="radio"
                            name="price"
                            className="accent-green"
                            checked={isClicked2}
                          />
                          <label htmlFor="" className=" mx-auto">
                            GHC 500
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handlePayment}
                      className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center"
                    >
                      {isLoading ? "Loading..." : "CHECKOUT"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* <ServiceCard
          label={userdetails?.gown ? "Booked" : "Book"}
          onClick={handleGown}
          route={userdetails?.gown ? "" : "/details"}
          image={hat}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          heading="Graduation Gown"
          description="Discover Your Perfect Graduation Gown. We offer attire that embodies the significance of your accomplishment, ensuring you walk the stage in pride."
        />
        <ServiceCard
          image={gift}
          label="Book"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          heading="Souvenir and Merchandise"
          description="Commemorate your educational journey with our carefully curated selection of keepsakes, designed to celebrate your achievement."
        /> */}
      </div>
    </div>
  );
};

export default Services;
