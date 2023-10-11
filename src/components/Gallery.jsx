import React from "react";
import SimpleSlider from "./Carousel";
import ReviewCard from "./ReviewCard";
import ReviewCarousel from "./ReviewCarousel";
import Swiper3D from "./Swiper3D";

const Gallery = () => {
  return (
    <div className="md:px-24 px-6 mt-10 " id="gallery">
      <h1 className="text-center font-bold  md:text-5xl text-4xl text-green 2xl:text-8xl 2xl:mt-24">
        Gallery
      </h1>
      <p className="text-center mt-3 font-semibold 2xl:text-3xl 2xl:w-165 2xl:my-8 2xl:mx-auto">
        Browse Through Our Gallery of Unforgettable Graduation Moments.
      </p>
      {/* <div className="group flex mx-auto justify-between items-center w-96 mt-3">
        <button className="focus:bg-green bg-slate-400 rounded-md px-3 py-1 text-white/80">
          PHOTOSHOOTS
        </button>
        <button className="focus:bg-green bg-slate-400 rounded-md px-3 py-1 text-white/80">
          SOUVENIRS
        </button>
        <button className="focus:bg-green bg-slate-400 rounded-md px-3 py-1 text-white/80">
          MERCHANDISE
        </button>
      </div> */}
      <Swiper3D />
      <div className="md:mt-24  mt-10 mb-24">
        <div className="lg:grid lg:grid-cols-2 gap-4 lg:space-y-0 space-y-10 border-spacing-y-8">
          <div className="">
            <p className="text-green lg:text-5xl font-bold text-4xl text-center lg:text-left 2xl:text-7xl">
              TESTIMONIALS
            </p>
            <h1 className="text-green font-bold text-2xl my-3 text-center lg:text-left 2xl:text-4xl">
              Client Reviews{" "}
            </h1>
            <p
              className="text-justify 2xl:text-3xl"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              Hear From Our Graduates: Heartfelt Experiences Shared by Those
              We've Proudly Served. Discover how our meticulous attention to
              detail in gown fittings, the artistry of our photoshoots, and the
              exceptional quality of our merchandise have left an indelible mark
              on our clients.
              <p className="my-3">
                Read these genuine testimonials that reflect the joy, pride, and
                satisfaction of our graduates
              </p>
              <p>
                Join the chorus of voices celebrating their remarkable journey
                through our services, making their graduations truly
                unforgettable.
              </p>
            </p>
          </div>
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
