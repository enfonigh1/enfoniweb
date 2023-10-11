import React from "react";
import register from "../assets/images/register.svg";
import chev from "../assets/images/chev_left.svg";
import logo from "../assets/images/enfoni.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
const AuthLayout = ({
  image = register,
  heading,
  loggins = true,
  children,
  footer = true,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const images = ["../assets/images/michaelabuah.svg"];

  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 relative lg:bg-none bg-[url(./assets/images/register.svg)] bg-no-repeat bg-cover bg-center h-[calc(100vh-20px)]">
        <div data-aos="fade" data-aos-duration="2000">
          <img src={image} alt="" className="h-screen lg:block hidden " />
        </div>
        <div>
          <button
            onClick={handleClick}
            className="sm:text-purple text-white flex items-center mt-3 ml-3"
          >
            <img src={chev} alt="" /> <span className="ml-2">Back</span>
          </button>
          <img
            src={logo}
            alt=""
            className="mx-auto"
            data-aos="fade"
            data-aos-duration="2000"
          />
          {loggins ? (
            <>
              <h1 className="font-bold text-center mt-10 lg:block hidden">
                {heading}
              </h1>
              <p className="text-xs text-gray-400 text-center lg:block hidden">
                Please enter your details
              </p>
              <div className="group w-72 px-2  py-5 h-8 bg-gray-400/40 mx-auto mt-4 rounded lg:flex hidden justify-between items-center">
                <NavLink
                  data-aos="fade-left"
                  data-aos-duration="1000"
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
                  data-aos="fade-right"
                  data-aos-duration="1000"
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
            </>
          ) : (
            <></>
          )}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="lg:h-72 bg-white lg:relative absolute bottom-0 left-0 right-0 h-96 rounded-tl-[50px] rounded-tr-[50px]"
          >
            {children}
          </div>
          {footer ? (
            <p className="text-center mt-10 text-xs lg:w-128 mx-auto text-gray-500 lg:block hidden">
              Your one stop online platform that offers souvenir merchandise
              sales, graduation gown booking services, graduation photoshoot
              bookings for universities in Ghana
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
