import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Images from "../components/Images";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to determine when to show the arrow button.
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    // Add a scroll event listener to the window.
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page when the arrow button is clicked.
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <Banner />
      <Services />
      <Gallery />
      <Pricing />
      <Images />
      <Footer />
      {showArrow && (
        <a
          href="#home"
          className="fixed left-10 bottom-5 bg-green text-white p-3 rounded-md"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-[2rem]" />
        </a>
      )}
      
    </div>
  );
};

export default Home;
