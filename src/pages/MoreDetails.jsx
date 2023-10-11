import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import NewInput from "../components/NewInput";
import Button from "../components/Button";
import { usePostRegisterMutation } from "../app/features/authSlice/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { registerDetails } from "../app/features/authSlice/authSlice";
import { useNavigate } from "react-router-dom";

const MoreDetails = () => {
  const [info, setInfo] = useState(JSON.parse(sessionStorage.getItem("auth")));
  const [details, setDetails] = useState({
    college_name: "",
    student_id: "",
    phone_number: "",
    date_of_graduation: "",
  });

  const [register, { isLoading }] = usePostRegisterMutation();
  const userdetails = useSelector(registerDetails);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await register({
        full_name: info?.full_name,
        email: info?.email,
        password: info?.password,
        college_name: details?.college_name,
        student_id: details?.student_id,
        phone_number: details?.phone_number,
        date_of_graduation: details?.date_of_graduation,
      }).unwrap();

      if (response?.status === 400) {
        toast.error(response?.data || response?.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (userdetails?.gown && userdetails?.photoshoot) {
        navigate("/select-frame");
      }
      if (userdetails?.gown) {
        navigate("/code");
      }
      if (userdetails?.photoshoot) {
        navigate("/select-frame");
      }
    } catch (error) {}
  };

  return (
    <AuthLayout loggins={false} footer={false}>
      <form action="" className="w-72 mx-auto mt-8 sm:pb-0 pb-10">
        <NewInput
          label="College"
          type="text"
          value={details.college_name}
          name="college_name"
          onChange={handleChange}
        />
        <NewInput
          label="Student ID"
          type="text"
          value={details.student_id}
          name="student_id"
          onChange={handleChange}
        />
        <NewInput
          label="Phone number"
          type="text"
          name="phone_number"
          value={details.phone_number}
          onChange={handleChange}
        />
        <NewInput
          label="Date of Graduation"
          type="date"
          value={details.date_of_graduation}
          name="date_of_graduation"
          onChange={handleChange}
        />
        <Button
          onClick={handleClick}
          name={isLoading ? "Loading" : "Proceed"}
          className="bg-purple shadow-lg text-white rounded-md py-2.5 block w-full mt-4"
        />
      </form>
      <ToastContainer />
    </AuthLayout>
  );
};

export default MoreDetails;
