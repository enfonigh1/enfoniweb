import React, { useState } from "react";
import DashboardLayout from "../dashbordLayout";
import { PaystackButton, usePaystackPayment } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import {
  useCheckPaymentStatusMutation,
  usePostPaymentMutation,
  useSubmitOtpMutation,
} from "../../app/features/payment/paymentApiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  payer,
  payerInfo,
  paymentInfo,
  paymentinfo,
} from "../../app/features/payment/paymentSlice";
import ReactCodeInput from "react-code-input";
import { useSameDayBookiingMutation } from "../../app/features/authSlice/authApiSlice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [userCode, setUserCode] = useState("");
  const [provider, setProvider] = useState("");
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [frames, setFrames] = useState({
    type: "Basic",
    price: 200,
  });
  const [samedaybooking, { isLoading: isSameDayBooking }] =
    useSameDayBookiingMutation();
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(200);
  const [postpayment, { isLoading }] = usePostPaymentMutation();
  const [submitopt, { isLoading: isOtpLoading }] = useSubmitOtpMutation();
  const [paymentStatus, { isLoading: isGetPaymentLoading }] =
    useCheckPaymentStatusMutation();
  const payment = usePaystackPayment({
    email: email || "info@enfonigh.com",
    amount: 200 * 100,
    publicKey: "pk_live_80bb9f757d159dfcf8f8322bd2e09d9958cf3a31",
    currency: "GHS",
    firstname: full_name,
    phone: phone_number,
  });
  const disptach = useDispatch();

  const handleShadow = (e) => {
    switch (e) {
      case "200":
        setIsClicked1(true);
        setIsClicked2(false);
        setIsClicked3(false);
        setTotal(0.01);
        setFrames({ type: "Basic", price: 200 });
        break;
      case "500":
        setIsClicked2(true);
        setIsClicked1(false);
        setIsClicked3(false);
        setTotal(500);
        setFrames({ type: "Wooden Frame", price: 500 });
        break;
      case "350":
        setIsClicked3(true);
        setIsClicked1(false);
        setIsClicked2(false);
        setTotal(350);
        setFrames({ type: "Mount Card", price: 350 });
        break;
      default:
        setIsClicked3(false);
        setIsClicked1(false);
        setIsClicked2(false);
        setTotal(200);
        setFrames({ type: "Basic", price: 200 });
        break;
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    disptach(payerInfo({ phone, full_name, frames }));
    try {
      if (!full_name && !phone_number) {
        return toast.error("Please enter required fields");
      }
      const results = await postpayment({
        amount: total,
        provider: provider,
        phone: phone,
      }).unwrap();
      if (results?.status === true) {
        setIsOpen(results?.status);
        disptach(paymentInfo({ ...results }));
        return;
      }
      console.log(results);
      return toast.error("Too many attempt please try again later");
    } catch (error) {}
  };
  console.log(total);

  const reference = useSelector(paymentinfo);
  const handleOtp = async (e) => {
    e.preventDefault();
    try {
      const results = await submitopt({
        otp: otp,
        reference: reference,
      }).unwrap();
      if (results?.status === 200) {
        setIsOpen(true);
      }
    } catch (error) {}
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const payerinfomation = useSelector(payer);

  const handlePaymentStatus = async (e) => {
    e.preventDefault();
    try {
      const results = await paymentStatus({
        reference: reference,
        payerinfo: payerinfomation,
      }).unwrap();
      console.log(results);
      if (results?.status === 400) {
        return toast.error(results?.message);
      }
      if (results?.status === 200) {
        setShowCode(true);
        setUserCode(results?.data?._id?.slice(0, 6).toUpperCase());
      }
    } catch (error) {}
  };

  let randomNumber = Math.floor(Math.random() * 900) + 1;

  const config = {
    email: `user${randomNumber}@example.com`,
    amount: total * 100,
    currency: "GHS",
    publicKey: "pk_live_80bb9f757d159dfcf8f8322bd2e09d9958cf3a31",
    firstName: full_name.split(" ")[0],
    lastName: full_name.split(" ")[1],
  };

  const onSuccess = (response) => {
    console.log("Payment successful", response);
    const postPyamentInformation = async () => {
      const results = await samedaybooking({
        full_name: payerinfomation?.full_name,
        code: response?.reference?.slice(0, 6),
        frame: payerinfomation?.frames,
      }).unwrap();
      console.log(results);
    };
    try {
      if (response) {
        postPyamentInformation();
        setIsOpen(true);
        setShowCode(true);
        setUserCode(response?.reference?.slice(0, 6));
      }
      // const someday = await samedaybooking({full_name: payerinfomation?.full_name, frame: payerinfomation?.frames, code: response?.reference?.slice(0, 6)}).unwrap()
    } catch (error) {
      console.log(error);
    }

    // Handle success, e.g., update your backend with the transaction details
  };

  const onClose = () => {
    console.log("Payment closed");
    // Handle when the Paystack dialog is closed
  };

  const initializePayment = usePaystackPayment(config);

  const handlePaymentClick = (e) => {
    e.preventDefault();
    initializePayment(onSuccess, onClose);
  };

  return (
    <DashboardLayout show={false}>
      <ToastContainer />
      <div className="h-screen flex justify-center items-center mx-auto">
        <div className="bg-white shadow-lg rounded-lg lg:w-[38rem] px-5 lg:mx-0 mx-5 flex flex-col justify-center items-center py-10">
          <div className="">
            <div className="modal-content">
              <div className="card">
                <form>
                  <div className="mb-4">
                    <label
                      for="inputField"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Full Name:
                    </label>
                    <input
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      id="inputField"
                      required
                      name="inputField"
                      className="w-full p-2 border border-green/50 rounded focus:ring-green focus:border-green focus:outline-green"
                    />
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
                  </div>
                  <button
                    onClick={handlePaymentClick}
                    className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center"
                  >
                    {isLoading ? "Loading..." : "CHECKOUT"}
                  </button>
                  <Link
                    to="/ushers/checkins"
                    className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center"
                  >
                    Check client in
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
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
                  <>
                    <div className="text-center text-green">
                      <p>🎉🎉🎊🎊🎊</p>
                      <p className="font-bold text-2xl">CONGRATULATIONS</p>
                      <p>
                        Your code for your graduation. Please write your code
                        before closing this modal
                      </p>
                    </div>
                    <h1 className="text-center text-xl font-bold">
                      {userCode}
                    </h1>
                  </>
                ) : (
                  <>
                    <form className="flex flex-col justify-center items-center text-green">
                      <p className="text-center text-xs my-2">
                        Please complete the authorisation process by inputting
                        your PIN on your mobile device
                      </p>
                      <ReactCodeInput
                        fields={6}
                        className=""
                        onChange={(e) => setOtp(e)}
                      />
                      <button
                        onClick={handleOtp}
                        className="bg-green shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center"
                      >
                        {isOtpLoading ? "Loading..." : "SUBMIT"}
                      </button>

                      <p className="text-center">
                        <span className="font-bold">NOTE</span>: If you received
                        a payment prompt on your phone direct please use the
                        button below to check your code{" "}
                      </p>
                    </form>

                    <button
                      onClick={handlePaymentStatus}
                      className="bg-green/70 shadow-lg text-white px-3 py-3 justify-center items-center font-bold rounded flex my-4 w-full text-center"
                    >
                      {isGetPaymentLoading ? "Loading..." : "GET CODE"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
