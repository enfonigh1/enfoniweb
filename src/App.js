import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MoreDetails from "./pages/MoreDetails";
import Error from "./pages/Error";
import Code from "./pages/Code";
import SelectFrame from "./pages/SelectFrame";
import AdminLayout from "./pages/AdminLayout";

import OrderHistory from "./pages/OrderHistory";
import SavedItems from "./pages/SavedItems";
import MyPhotoshoots from "./pages/MyPhotoshoots";
import Frames from './pages/frames';
import Protected from "./hooks/Protected";
import AdminDataTable from "./components/AdminDataTable";
import Emailsent from "./pages/Emailsent";
import Verified from "./pages/Verified";
import Aos from "aos";
import ForgottenPassword from "./pages/ForgottenPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyCode from "./pages/VerifyCode";
import UshersHome from "./pages/Ushers/Home";
import UsherLogin from "./pages/Ushers/Login";
import UsherDashboard from "./pages/Ushers/Dashboard";
import Dashboard from "./pages/Ushers/Dashboard";
import ProtectedUsher from "./hooks/ProtectedUsher";
import SameDayBooking from "./pages/SameDayBooking";

function App() {


  return (
    <>
      <Router>
        <Routes>

          {/* FREE ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Emailsent />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/ushers/signup" element={<UshersHome />} />
          <Route path="/ushers/login" element={<UsherLogin />} />
          <Route path="/ushers/dashboard" element={<UsherLogin />} />
          <Route path="/ushers/home" element={<Dashboard />} />
          <Route path="/same-day-booking" element={<SameDayBooking />} />
          <Route path="/admin" element={<AdminDataTable />} />


          {/* PROTECTED ROUTES */}
          < Route element={<Protected />}>
            <Route path="/dashboard" element={<OrderHistory />} />
            <Route path="/details" element={<MoreDetails />} />
            <Route path="/code" element={<Code />} />
            <Route path="/select-frame" element={<SelectFrame />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/saved-items" element={<SavedItems />} />
            <Route path="/my-photoshoots" element={<MyPhotoshoots />} />
            <Route path="/frames" element={<Frames />} />

          </Route>

          {/* Usher Protected Routes */}
          <Route element={<ProtectedUsher />}>


          </Route>
          {/* 404 PAGE */}
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


