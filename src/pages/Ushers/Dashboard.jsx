import React, { useState } from "react";
import DashboardLayout from "../dashbordLayout";
import { usePaystackPayment } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);

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
              Client Name
            </label>
            <input
              required={true}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Andrews Opoku"
              type="text"
              className="lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor=""
              className="font-bold text-gray-700 font-[poppins] mb-3"
            >
              Client Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="aopoku255@gmail.com"
              type="text"
              className="lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50"
            />
          </div>
          <div className="flex flex-col mb-7">
            <label
              htmlFor=""
              className="font-bold text-gray-700 font-[poppins] mb-3"
            >
              Client Number
            </label>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              required={true}
              placeholder="0501311122"
              type="text"
              className="lg:w-96 w-72 px-4 text-gray-700 h-12 rounded-lg bg-transparent border border-solid border-gray-700/50 "
            />
          </div>
          <div className="flex self-start lg:px-5 lg:mx-5 space-x-2 mb-3 items-center">
            <input type="checkbox" className="h-5 w-5 accent-green" />
            <label htmlFor="">Cash</label>
          </div>
          <div className="lg:grid  lg:grid-cols lg:space-y-3 space-y-3 lg:space-x-3 lg:grid-cols-3 lg:justify-center mb-5 lg:items-center mx-auto">
            <div
              className={
                isClicked1
                  ? "border border-green border-solid rounded px-2 py-4 shadow-lg"
                  : "border border-green border-solid rounded px-2 py-4 "
              }
              onClick={() => handleShadow("1")}
            >
              <h4 className="font-bold text-green h-8 lg:text-[10px] text-center">
                Basic
              </h4>
              <div className="space-x-2 text-center">
                <input
                  type="radio"
                  name="price"
                  defaultChecked
                  className="accent-green"
                  aria-label=""
                />
                <label htmlFor="" className=" mx-auto">
                  GHC 200
                </label>
              </div>
            </div>
            <div
              className={
                isClicked2
                  ? "border border-green border-solid rounded px-2 py-4 shadow-lg"
                  : "border border-green border-solid rounded px-2 py-4"
              }
              onClick={() => handleShadow("2")}
            >
              <h4 className="font-bold text-green h-8 lg:text-[10px] text-center">
                Basic Wooden Frame
              </h4>
              <div className="space-x-2 text-center">
                <input type="radio" name="price" className="accent-green" />
                <label htmlFor="" className=" mx-auto">
                  GHC 500
                </label>
              </div>
            </div>
            <div
              className={
                isClicked3
                  ? "border border-green border-solid rounded px-2 py-4 shadow-lg"
                  : "border border-green border-solid rounded px-2 py-4"
              }
              onClick={() => handleShadow("3")}
            >
              <h4 className="font-bold text-green h-8 lg:text-[10px] text-center">
                Basic Mount Card
              </h4>
              <div className="space-x-2 text-center">
                <input type="radio" name="price" className="accent-green" />
                <label htmlFor="" className=" mx-auto">
                  GHC 350
                </label>
              </div>
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="lg:w-96 w-72 px-4 h-12 shadow-lg text-white rounded-lg bg-gray-700"
          >
            submit
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
