import React from "react";
import logo from "../assets/logo.svg";
import notification from "../assets/images/icon _bell_.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userinfo } from "../app/features/authSlice/authSlice";

const Navbar = () => {
  const details = useSelector(userinfo);
  
  return (
    <header className="">
      <nav
        className="mx-auto flex  items-center justify-between py-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src={logo} alt="" />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white 2xl:text-3xl"
              aria-expanded="false"
            >
              Home
            </button>
          </div>

          <a
            href="#services"
            className="text-sm font-semibold leading-6 text-white 2xl:text-3xl"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="text-sm font-semibold leading-6 text-white 2xl:text-3xl"
          >
            Gallery
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold leading-6 text-white 2xl:text-3xl"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-sm font-semibold leading-6 text-white 2xl:text-3xl"
          >
            About
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white 2xl:text-3xl"
          >
            Team
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white 2xl:text-3xl"
          >
            Contact
          </a>
        </div>
        <div className="hidden lg:flex space-x-3 lg:flex-1 lg:justify-end align-middle">
          <img src={notification} alt="" className="" />

          {/* <!-- Profile dropdown --> */}
          <div className="relative">
            <div>
              <button
                type="button"
                className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Open user menu</span>
                {/* <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <span className="w-8 h-8 flex justify-center items-center font-bold text-purple text-2xl bg-white rounded-full">
                  {details?.name ? details.name[0] : <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> }
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
