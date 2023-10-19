import React from "react";
import Text from "./Text";
import ServiceCard from "./ServiceCard";
import gift from "../assets/images/gift.svg";
import hat from "../assets/images/hat.svg";
import photo from "../assets/images/photo.svg";
import { useSelector } from "react-redux";
import { userinfo } from "../app/features/authSlice/authSlice";

const Services = () => {

  const details = useSelector(userinfo)
  console.log(details)

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
        <ServiceCard
          route={details?.photoshoot ? "/select-frame" : "/details"}
          image={photo}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="0"
          heading="Graduation Photoshoot"
          description="Immortalize Your Milestone with Elegance and Style. With expert
        photographers and captivating backdrops, we promise memories that will
        last a lifetime."
        />
        <ServiceCard
        route="/details"
          image={hat}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="300"
          heading="Graduation Gown"
          description="Discover Your Perfect Graduation Gown. We offer attire that embodies the significance of your accomplishment, ensuring you walk the stage in pride."
        />
        <ServiceCard
          image={gift}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          heading="Souvenir and Merchandise"
          description="Commemorate your educational journey with our carefully curated selection of keepsakes, designed to celebrate your achievement."
        />
      </div>
    </div>
  );
};

export default Services;
