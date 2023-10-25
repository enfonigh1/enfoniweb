import React, { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import michael from "../assets/images/register.svg";
import Input from "../components/Input";
import mail from "../assets/images/mail.svg";
import password from "../assets/images/icon _lock key_.svg";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { usePostLoginMutation } from "../app/features/authSlice/authApiSlice";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { auth} from "../app/features/authSlice/authSlice";
import { useDispatch } from "react-redux";
// import { useH } from "react-router-dom";

const Login = () => {
  // const { register, handleSubmit } = useForm();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [login, { isLoading }] = usePostLoginMutation();
  const [visible, setVisible] = useState(false)
  const [isVerified, setIsVerified] = useState(true)
  const navigate = useNavigate();
  const disptach = useDispatch();
  const location = useLocation();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails({ ...details, [name]: value });
  };

  // const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ ...details }).unwrap();
      console.log(response)
      console.log(response)
      if(response?.verified === false){

        toast.error("Please verify your email to continue");
        return;
      }
      if (response?.status === 200) {
        setTimeout(() => {
          const from = location?.state?.from?.pathname || "/";
          navigate(from, { replace: true });
        }, 4000);
        toast.success(response?.message);
      }
      if (response?.status === 400) {
        toast.error(response?.data || response?.message);
      }
      if (response?.verified === false) {
        setIsVerified(false)
      }
      disptach(auth({ ...response }));
      
    } catch (error) {
      
      console.log(error)
    }
  };

  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <AuthLayout image={michael} heading="Welcome" toastContainer={true}>
      {/* <ToastContainer /> */}
      <h1 className="sm:hidden font-bold text-center mt-4">Welcome</h1>
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
      <form action="" className="mx-auto w-72 mt-8" onSubmit={handleSubmit}>
        {/* <Input label="Full Name" logo={user} type="text" /> */}
        <Input
          label="Email Address"
          logo={mail}
          type="email"
          required={true}
          name="email"
          value={details.email}
          onChange={handleChange}
          // autoFocus={true}
        />

        <Input
          label="Password"
          logo={password}
          type={visible ? "text" : "password"}
          name="password"
          onChange={handleChange}
          value={details.password}
          required={true}
          show={true}
          handleClick={handleClick}
        />
        <div className="flex justify-between items-center">
          <div></div>
        <Link to="/forgotten-password" className="block text-xs text-blue">Forgotten password</Link>
        </div>
        <button className="bg-blue shadow-lg text-white rounded-md py-2.5 block w-full mt-4">
        {isLoading ? "Loading..." : "Login"}
        </button>
        {/* {
          setIsVerified ? <></> : <button  className="bg-blue shadow-lg text-white rounded-md py-2.5 block w-full mt-4">
          Resend Verification Email
        </button>
        } */}
      </form>
      <p className="text-center mt-10 text-xs lg:w-128 mx-auto text-gray-500 lg:hidden sm:px-0 px-10 sm:pb-0 pb-10">
        Your one stop online platform that offers souvenir merchandise sales,
        graduation gown booking services, graduation photoshoot bookings for
        universities in Ghana
      </p>
    </AuthLayout>
  );
};

export default Login;
