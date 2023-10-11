import React from "react";
import Text from "./Text";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="lg:px-24 px-6" id="services">
      <h1 className="lg:text-5xl text-4xl font-bold mt-8 text-green text-center 2xl:text-8xl">
        Our Services
      </h1>
      <p className="lg:w-128 w-80 mx-auto text-center font-semibold mt-4 2xl:text-3xl 2xl:w-165 2xl:my-8">
        From personalised gown fittings to professional photography sessions, we
        ensure every detail is perfected.{" "}
      </p>
      <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-5 md:grid md:grid-cols-3 md:gap-5">
        <ServiceCard
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          heading="Graduation Photoshoot"
          description="Immortalize Your Milestone with Elegance and Style. With expert
        photographers and captivating backdrops, we promise memories that will
        last a lifetime."
        />
        <ServiceCard
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          heading="Graduation Gown"
          description="Discover Your Perfect Graduation Gown. We offer attire that embodies the significance of your accomplishment, ensuring you walk the stage in pride."
        />
        <ServiceCard
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1200"
          heading="Souvenir and Merchandise"
          description="Commemorate your educational journey with our carefully curated selection of keepsakes, designed to celebrate your achievement."
        />
      </div>
    </div>
  );
};

export default Services;
