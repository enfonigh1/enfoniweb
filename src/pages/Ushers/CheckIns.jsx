import React, { useState } from "react";
import DashboardLayout from "../dashbordLayout";
import { usePaystackPayment } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";
import ReactCodeInput from "react-code-input";
import { useUsherCheckinsMutation } from "../../app/features/authSlice/authApiSlice";
import { authuser } from "../../app/features/authSlice/authSlice";
import { useSelector } from "react-redux";

const CheckIns = () => {
  const [full_name, setFullName] = useState("");
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [postcode, { isLoading }] = useUsherCheckinsMutation();

  const payment = usePaystackPayment({
    email: email || "info@enfonigh.com",
    amount: 200 * 100,
    publicKey: "pk_test_141b3eb35c4d93a67e8973362212a778be57b17e",
    currency: "GHS",
    firstname: full_name,
    phone: phone_number,
  });
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!full_name && !phone_number) {
      return toast.error("Please enter required fields");
    }
    const results = await payment();
    console.log(results);
  };

  const handleShadow = (e) => {
    switch (e) {
      case "1":
        setIsClicked1(true);
        setIsClicked2(false);
        setIsClicked3(false);
      case "2":
        setIsClicked2(true);
        setIsClicked1(false);
        setIsClicked3(false);
      case "3":
        setIsClicked3(true);
        setIsClicked2(false);
        setIsClicked1(false);
      default:
        setIsClicked3(false);
        setIsClicked2(false);
        setIsClicked1(false);
    }
  };

  const details = useSelector(authuser);
  const handleSubitCheckin = async (e) => {
    e.preventDefault();
    const results = await postcode({
      clientCode: details?.code,
      code: code,
    }).unwrap();
    if (results?.status === 200) {
      toast.success(results?.message);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  return (
    <DashboardLayout show={false}>
      <ToastContainer />
      <div className="h-screen flex justify-center items-center mx-auto">
        <form
          action=""
          className="bg-white shadow-lg rounded-lg lg:w-128 px-5 lg:mx-0 mx-5 flex flex-col justify-center items-center py-10"
        >
          <div className="flex flex-col mb-7">
            <label
              htmlFor=""
              className="font-bold text-gray-700 font-[poppins] mb-3"
            >
              Enter graduant's code
            </label>
            {/* <input
              required={true}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Please enter user code to check-in"
              type="text"
              className="lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50"
            /> */}
            <ReactCodeInput fields={6} onChange={(e) => setCode(e)} />
          </div>

          <button
            onClick={handleSubitCheckin}
            className="lg:w-96 w-72 px-4 h-12 shadow-lg text-white rounded-lg bg-gray-700"
          >
            {isLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CheckIns;
