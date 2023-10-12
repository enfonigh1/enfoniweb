import React from "react";
import logo from "../assets/logo.svg";
import notification from "../assets/images/icon _bell_.svg";
import logo2 from "../assets/images/enfoni.svg";
import knustlogo from "../assets/images/knustlogo.jpg";
import UG from "../assets/images/UG.svg";
import UCC from "../assets/images/UCC.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userinfo } from "../app/features/authSlice/authSlice";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const details = useSelector(userinfo);
  const handleOpenMenu = () => {
    // document.querySelector("div[role='dialog']").classList.toggle("hidden");
    setOpen(!open);
  };

  // function to handle opening of schools
  const handleOpenSchools = () => {
    document.querySelector("div[role='dialog']").classList.toggle("hidden");
  };

  return (
    <header className="bg-transparent">
      <nav
        className="mx-auto flex items-center justify-between lg:py-6"
        aria-label="Global"
      >
        <div className="lg:flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="lg:h-16 w-auto 2xl:h-28" src={logo2} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden" onClick={handleOpenMenu}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="false"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 2xl:text-3xl lg:text-white"
              aria-expanded="false"
            >
              Home
            </button>

            {/*  */}
          </div>

          <a
            href="#services"
            className="text-sm font-semibold leading-6 text-gray-900 2xl:text-3xl lg:text-white"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="text-sm font-semibold leading-6 text-gray-900 2xl:text-3xl lg:text-white"
          >
            Gallery
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold leading-6 text-gray-900 2xl:text-3xl lg:text-white"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 2xl:text-3xl lg:text-white"
          >
            About
          </a>

          <div class="hidden lg:flex lg:gap-x-12">
            <div class="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white 2xl:text-3xl"
                aria-expanded="false"
                onClick={handleOpenSchools}
              >
                Schools
                <svg
                  class="h-5 w-5 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              {/* <!--
          'Product' flyout menu, show/hide based on flyout menu state.

          Entering: "transition ease-out duration-200"
            From: "opacity-0 translate-y-1"
            To: "opacity-100 translate-y-0"
          Leaving: "transition ease-in duration-150"
            From: "opacity-100 translate-y-0"
            To: "opacity-0 translate-y-1"
        --> */}
              <div
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-white hidden"
                role="dialog"
                // data-aos="fade-down"
                // data-aos-duration="1000"
                aria-modal="false"
              >
                <div class="p-1">
                  <div class="group relative flex items-center gap-x-6 rounded-sm p-2 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-4 w-5 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img src={knustlogo} alt="" />
                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        KNUST
                        <span class="absolute inset-0"></span>
                      </a>
                      <p class=" text-gray-600">
                        Kwame Nkrumah University of Science and Technology
                      </p>
                    </div>
                  </div>
                  <div class="group relative flex items-center gap-x-6 rounded-sm p-2 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-6 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img src={UG} alt="" />
                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        UG
                        <span class="absolute inset-0"></span>
                      </a>
                      <p class=" text-gray-600">University of Ghana</p>
                    </div>
                  </div>
                  <div class="group relative flex items-center gap-x-6 rounded-sm p-2 text-sm leading-6 hover:bg-gray-50">
                    <div class="flex h-4 w-5 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <img src={UCC} alt="" />
                    </div>
                    <div class="flex-auto">
                      <a href="#" class="block font-semibold text-gray-900">
                        UCC
                        <span class="absolute inset-0"></span>
                      </a>
                      <p class=" text-gray-600">University of Cape Coast</p>
                    </div>
                  </div>
                </div>
                {/* <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a
                    href="#"
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      class="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Watch demo
                  </a>
                  <a
                    href="#"
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <svg
                      class="h-5 w-5 flex-none text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Contact sales
                  </a>
                </div> */}
                {/*  */}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {details?.name ? (
            <Link to="/dashboard" className="h-8 w-8 rounded-full bg-light-green flex justify-center items-center">
              {details?.image ? (
                <img
                  src=""
                  alt="profile"
                  className="h-full w-full bg-light-green rounded-full"
                />
              ) : (
                <h1 className="font-bold text-2xl text-green  ">
                  {details?.name[0]}
                </h1>
              )}
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900 lg:text-white 2xl:text-3xl"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      {open ? (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Enfoni</span>
                <img className="h-8 w-auto" src={logo2} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={handleOpenMenu}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      aria-controls="disclosure-1"
                      aria-expanded="false"
                    >
                      Home
                      {/* <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                --> */}
                      {/* <svg
                      className="h-5 w-5 flex-none"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg> */}
                    </button>
                    {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
                    {/* <div className="mt-2 space-y-2" id="disclosure-1">
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Analytics
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Engagement
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Security
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Integrations
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Automations
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Watch demo
                    </a>
                    <a
                      href="#"
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Contact sales
                    </a>
                  </div> */}

                    {/*  */}
                  </div>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Gallery
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Team
                  </a>
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Navbar;
