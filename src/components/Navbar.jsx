import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import notification from "../assets/images/icon _bell_.svg";
import logo2 from "../assets/images/enfoni.svg";
import knustlogo from "../assets/images/knustlogo.jpg";
import UG from "../assets/images/UG.svg";
import UCC from "../assets/images/UCC.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth, authuser, logout, openSchool, openService, openschool, openservice, userInfo, userService, userinfo } from "../app/features/authSlice/authSlice";
import { BsFillTriangleFill } from "react-icons/bs";
import {MdAddAPhoto} from "react-icons/md"
import {TiInfoLargeOutline} from "react-icons/ti"
import {GiShirt} from "react-icons/gi"
import { useFetchSingleUserMutation } from "../app/features/authSlice/authApiSlice";

const Navbar = ({}) => {
  const [open, setOpen] = React.useState(false);
  const [isOpenService, setIsOpenService] = React.useState(false);
  const [fetchUser] = useFetchSingleUserMutation()

  const details = useSelector(authuser);
  // console.log(details)
 
  const handleOpenMenu = () => {
    document.querySelector("div[role='alert']").classList.toggle("hidden");
    // setOpen(!open);
  };

  const handleBlur = () => {
    // setOpen(false)
    // dispatch(openService(false))
  }

  // function to handle opening of schools
  const handleOpenSchools = () => {
    // document.querySelector("div[role='dialog']").classList.toggle("hidden");
    dispatch(openSchool(true))
    dispatch(openService(false))
    setIsDash(false)
  };
  // function to handle opening of schools
  const handleOpenService = () => {
    // document.querySelector("div[role='alertdialog']").classList.toggle("hidden");
    dispatch(openService(true))
    dispatch(openSchool(false))
    setIsDash(false)
  };

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    window.location.reload()
  }

  const [isDash, setIsDash] = useState(false)
  const handleDashOpen = () => {
    setIsDash(!isDash)
    dispatch(openService(false))
    dispatch(openSchool(false))
  }

  const handleGown = () => {
    dispatch(userService("gown"))
  }
  const handlePhoto = () => {
    dispatch(userService("photo"))
  }
  const openserv = useSelector(openservice)
  const opensch = useSelector(openschool)

  // console.log(openserv, opensch)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetchUser({id: details?.user_id})
        
        dispatch(userInfo({...response?.data?.data}))
      } catch (error) {
        
      }
    }
    fetchUserInfo()
  }, [details])

  const loggedininfo = useSelector(userinfo)

  return (
    <header className="bg-transparent lg:px-28 px-6">
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
        <div className="flex lg:hidden" onClick={handleOpenMenu} >
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

          <div class="lg:flex lg:gap-x-12">
            <div class="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white 2xl:text-3xl"
                aria-expanded="false"
                onClick={handleOpenService}
                // onBlur={handleBlur}
              >
                Services
                <svg
                  className="h-5 w-5 flex-none text-white "
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

            {/*  */}
            {
              openserv ? <div
              class="absolute -left-8 top-full z-10 mt-3  w-52 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-white"
           
            >
              <div class="p-1">
               {
                loggedininfo?.gown === true ? <></> :  <div class="group relative flex items-center gap-x-6 rounded-sm p-2 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-4 w-5 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <GiShirt size={35}/>
                </div>
                <div class="flex-auto">
                  <Link to="/details" class="block font-semibold text-gray-900" onClick={handleGown}>
                    Book A Gown
                    <span class="absolute inset-0"></span>
                  </Link>
                  {/* <p class=" text-gray-600">
                    Kwame Nkrumah University of Science and Technology
                  </p> */}
                </div>
              </div>
               }
               {
                loggedininfo?.photoshoot === true ? <></> :  <div class="group relative flex items-center gap-x-6 rounded-sm p-2 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-6 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <MdAddAPhoto size={30}/>
                </div>
                <div class="flex-auto">
                  <Link to="/details" class="block font-semibold text-gray-900" onClick={handlePhoto}>
                    Book A Photoshoot
                    <span class="absolute inset-0"></span>
                  </Link>
                  {/* <p class=" text-gray-600">University of Ghana</p> */}
                </div>
              </div>
               }
               {
                loggedininfo?.photoshoot === true && loggedininfo?.gown === true ?  <div class="group relative flex items-center gap-x-6 rounded-sm p-2 text-sm leading-6 hover:bg-gray-50">
                <div class="flex h-6 w-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <TiInfoLargeOutline size={30}/>
                </div>
                <div class="flex-auto">
                  <Link to="" class="block font-semibold text-gray-900" onClick={handlePhoto}>
                    No more service
                    <span class="absolute inset-0"></span>
                  </Link>
                  {/* <p class=" text-gray-600">University of Ghana</p> */}
                </div>
              </div> : <></>
               }
               
              </div>
            </div> : <></>
            }

            </div>
          </div>

          <div class="lg:flex lg:gap-x-12">
            <div class="relative">
              <button
                type="button"
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white 2xl:text-3xl"
                // aria-expanded="false"
                onClick={handleOpenSchools}
              >
                Schools
                <svg
                  className="h-5 w-5 flex-none text-white "
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

              {
                opensch ? <div
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-white"
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
              </div> : <></>
              }

            </div>
          </div>

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

          


        <div className="lg:flex lg:flex-1 lg:justify-end">
          {details?.name ? (
            <Link to="" onClick={handleDashOpen} className="h-8 w-8 rounded-full bg-light-green flex flex-col relative justify-center items-center">
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

             {isDash ?  <div className="absolute z-50 shadow-2xl bg-white w-24 top-10  flex flex-col  p-2 text-xs rounded-md">
              <BsFillTriangleFill className="absolute -top-2 text-white right-0 left-0 flex justify-center items-center mx-auto"/>
                <Link to="/my-photoshoots" className="hover:bg-green hover:text-white py-2 rounded-md px-2 font-bold text-green transition-all duration-500">Dashboard</Link>
                <Link to="" onClick={handleLogout} className="hover:bg-red-500 hover:text-white py-2 rounded-md px-2 text-red-500 font-bold transition-all duration-500">Logout</Link>
              </div> : <></>}
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
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
   
        <div className="lg:hidden hidden" role="alert">
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
                      onClick={handleOpenMenu}
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
                  onClick={handleOpenMenu}
                    href="#services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Services
                  </a>
                  <a
                   onClick={handleOpenMenu}
                    href="#gallery"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Gallery
                  </a>
                  <a
                   onClick={handleOpenMenu}
                    href="#pricing"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Pricing
                  </a>
                  {/* <a
                   onClick={handleOpenMenu}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                
                  <a
                   onClick={handleOpenMenu}
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Schools
                  </a> */}
                </div>
                <div className="py-6">
                 {details?.name ? <Link to="/order-history" className=" font-bold flex justify-between items-center space-x-2">
                <div className="flex space-x-2 items-center">
                <Link to="" className="h-10 w-10 bg-light-green rounded-full font-bold flex justify-center items-center">
                  <h1>{details?.name[0]}</h1>
                 </Link>
                <div className="flex flex-col leading-tight">
                <p>{details?.name?.split(" ")[0]}</p>
                 {/* <p>{details?.name?.split(" ")[1]}</p> */}
                </div>
                </div>
                <Link to="" className="text-red-500" onClick={handleLogout}>Logout</Link>
                 </Link> :  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>}
                </div>
              </div>
            </div>
          </div>
        </div>
   
     
    </header>
  );
};

export default Navbar;
