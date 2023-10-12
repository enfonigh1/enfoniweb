import { useState } from "react";
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
import MyAccount from "./pages/MyAccount";

import OrderHistory from "./pages/OrderHistory";
import SavedItems from "./pages/SavedItems";
import MyPhotoshoots from "./pages/MyPhotoshoots";
import Frames from './pages/frames';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details" element={<MoreDetails />} />
          <Route path="/code" element={<Code />} />
          <Route path="/select-frame" element={<SelectFrame />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/dashboard" element={<OrderHistory />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/saved-items" element={<SavedItems />} />
          <Route path="/my-photoshoots" element={<MyPhotoshoots />} />
          <Route path="/frames" element={<Frames />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


