import React from "react";
import DashboardLayout from "./dashbordLayout";
import DashBoardHeader from "../components/dashboardHeader";
import { FaBarsStaggered } from "react-icons/fa6";
import { Menu } from "../components/Menu";
import Popup from "../components/popupmenu";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
const MyAccount = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [isOPen, setISOpen] = React.useState(false);

  function handleOpen() {
    setToggleMenu(true);
  }

  function handleClose() {
    setToggleMenu(false);
  }

  return (
    <DashboardLayout>
      {toggleMenu ? (
        <Menu closeMenu={handleClose} />
      ) : (
        <div className="w-full relative top-[88px]">
          <DashBoardHeader />
          <div className="block fixed z-[10001] top-7 left-4 md:hidden" onClick={handleOpen}><FaBarsStaggered /></div>
        </div>
      )}
    </DashboardLayout>
  )
}
export default MyAccount;
