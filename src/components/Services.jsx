import React, { useEffect, useState } from "react";
import Text from "./Text";
import ServiceCard from "./ServiceCard";
import gift from "../assets/images/gift.svg";
import hat from "../assets/images/hat.svg";
import photo from "../assets/images/photo.svg";
import { useDispatch, useSelector } from "react-redux";
import { auth, authuser, userService, userinfo } from "../app/features/authSlice/authSlice";
import axios from "axios";

const Services = () => {

  const [data, setData] = useState([])
  const [icons, setIcons] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get("https://cdn.contentful.com/spaces/eiay889h63d6/entries?access_token=_ER0elHI8f-x6bMEay5J_14Ku1T-wa4pXfUcBaoF6Po&content_type=services")
      setData(response?.data?.items)
      setIcons(response?.data?.includes?.Asset)
      console.log(response)
    }
    fetchImages()
  }, [])

  const details = useSelector(authuser)
  // console.log(details)
  const userdetails = useSelector(userinfo)
  const disptach = useDispatch()

  const handleGown = () => {
    disptach(userService("gown"))
  }
  const handlePhoto = () => {
    disptach(userService("photo"))
  }

  console.log(icons)

  return (
    <div className="lg:px-24  px-6 bg-gray-100 py-10 pb-28" id="services">
      <h1 className="lg:text-5xl font-Poppins text-4xl font-[700] mt-8 text-green text-center 2xl:text-8xl">
        Our Services
      </h1>
      <p className="lg:w-128 w-80 mx-auto font-Poppins text-center  mt-4 2xl:text-3xl 2xl:w-165 2xl:my-8">
        From personalised gown fittings to professional photography sessions, we
        ensure every detail is perfected.{" "}
      </p>
      <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-3 md:gap-5">
        {
          data.map((item, index) =>  <ServiceCard
          label={index === 2 ? "Buy" :  userdetails?.photoshoot ? "Booked" : "Book"}
          onClick={handlePhoto}
            route={index === 2 ? "" : details?.photoshoot ? "/select-frame" : "/details"}
            image={icons[index]?.fields?.file?.url}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="0"
            heading={item?.fields?.header}
            // show={index === 2 ? false : true}
            description={item?.fields?.body?.content[0]?.content[0]?.value}
          />)
        }
       
        {/* <ServiceCard
          label={userdetails?.gown ? "Booked" : "Book"}
          onClick={handleGown}
          route={userdetails?.gown ? "" : "/details"}
          image={hat}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          heading="Graduation Gown"
          description="Discover Your Perfect Graduation Gown. We offer attire that embodies the significance of your accomplishment, ensuring you walk the stage in pride."
        />
        <ServiceCard
          image={gift}
          label="Book"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          heading="Souvenir and Merchandise"
          description="Commemorate your educational journey with our carefully curated selection of keepsakes, designed to celebrate your achievement."
        /> */}
      </div>
    </div>
  );
};

export default Services;
