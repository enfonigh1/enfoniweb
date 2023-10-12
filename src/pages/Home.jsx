import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Images from "../components/Images";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Services />
      <Gallery />
      <Pricing />
      <Images />
      <Footer />
    </div>
  );
};

export default Home;
