import React, { useEffect, useState } from "react";
import register from "../assets/images/register.svg";
import chev from "../assets/images/chev_left.svg";
import logo from "../assets/images/enfoni.svg";
import user from "../assets/images/icon _user_.svg";
import mail from "../assets/images/mail.svg";
import password from "../assets/images/icon _lock key_.svg";

import Input from "../components/Input";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { auth, registerDetails } from "../app/features/authSlice/authSlice";
import { usePostRegisterMutation } from "../app/features/authSlice/authApiSlice";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const register_details = useSelector(registerDetails);
  const [visible, setVisible] = useState(false)
  const [details, setDetails] = useState({
    full_name: "",
    email: "",
    password: "",
    gown: false,
    photoshoot: false,
  });

  const navigate = useNavigate();
  const [register, { isLoading }] = usePostRegisterMutation();
  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setDetails({ ...details, [name]: value });
  };
  console.log(details);

  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!details.full_name || !details.email || !details.password) {
      toast("Please enter all fields");
    } else {
      if (details?.gown || details?.photoshoot) {
        // const response = await register({ ...details }).unwrap();
        dispatch(auth({ ...details }));
          navigate("/details");
     
      } else {
        try {
          const response = await register({ ...details   }).unwrap();
          console.log(response);
          if (response?.status === 400) {
            toast.error(response?.data || response?.message, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          if (response?.status === 200) {
            setTimeout(() => {
              navigate("/verify");
            }, 4000);
            toast.success(response?.message);
            // toast.success(response?.message);
          }
        } catch (error) {
          throw error;
        }
      }
    }
  };

  const passreg =  /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const [validPass, setValidPass] = useState(false)
  useEffect(() => {
    const result = passreg.test(details.password);
    console.log(result)
    setValidPass(result);
  }, [details.password]);

  const handleShow= () => {
    setVisible(!visible)
  }

  return (
    <AuthLayout heading="Create an account" footer={false}>
      <h1 className="sm:hidden font-bold text-center">
        Create an account
      </h1>
      <p className="text-xs text-gray-400 text-center lg:hidden">
        Please enter your details
      </p>
      <div className="group w-72 px-2 py-2 mt-2 bg-gray-400/40 mx-auto lg:mt-4 rounded lg:hidden justify-between items-center">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "bg-white rounded text-sm py-1.5 px-12 text-black"
              : "text-sm py-1.5 px-12 text-black/70"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "bg-white rounded text-sm py-1.5 px-12 text-black"
              : "text-sm py-1.5 px-12 text-black/70"
          }
        >
          Signup
        </NavLink>
      </div>
      <form
        onSubmit={handleClick}
        action=""
        className="mx-auto w-72 mt-8 sm:pb-0 pb-10"
      >
        {/* <div className="flex mb-4 justify-center items-center">
          <div className="flex">
            <input
              type="checkbox"
              name="gown"
              id=""
              className="accent-green w-5 h-5"
              
              onChange={handleChange}
            />
            <label htmlFor="" className="mx-2 text-sm">
              Gown booking
            </label>
          </div>
          <div className="flex mx-4">
            <input
              type="checkbox"
              name="photoshoot"
              id=""
              className="accent-green w-5 h-5"
              onChange={handleChange}
            />
            <label htmlFor="" className="mx-2 text-sm">
              Photoshoot
            </label>
          </div>
        </div> */}
        <Input
          label="Full Name"
          logo={user}
          type="text"
          // autoFocus={true}
          name="full_name"
          onChange={handleChange}
          value={details?.full_name}
          required={true}
        />
        <Input
          label="Email Address"
          logo={mail}
          type="email"
          name="email"
          onChange={handleChange}
          value={details?.email}
        />
        <Input
          label="Password"
          logo={password}
          type={visible ? "text" : "password"}
          name="password"
          onChange={handleChange}
          value={details?.password}
          show={true}
          handleClick={handleShow}
        />
        {details?.password && !validPass ? <p className="text-red-500 mb-2 text-[10px] ">password must be atleast 8 characters and must contain 1 uppercase letter, 1 number and 1 special character</p> : <></>}
        
        <button className="bg-purple shadow-lg text-white rounded-md py-2.5 block w-full mt-4 disabled:opacity-40 ">
          {details?.gown  || details?.photoshoot
            ? "Proceed"
            : isLoading
            ? "Loading..."
            : "Signup"}
        </button>
      </form>
      <ToastContainer />
    </AuthLayout>
  );
};

export default Register;
