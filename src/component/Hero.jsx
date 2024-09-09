import React, { useEffect } from "react";
import Heroimg from "../assets/images/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: "ease-in-since",
      delay: 100,
    });
  }, []);
  return (
    <>
      <section
        className="w-[95%] h-[600px] mx-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 gap-7 "
        style={{ backgroundImage: `url(${Heroimg})` }}
      >
        <h1
          data-aos="zoom-in"
          className="text-6xl  text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading:[70px]"
        >
          Find your next Home in Las Vegas
        </h1>
        <p
          data-aos="zoom-in"
          className="leading-relaxed text-xl text-white lg:pr-[500px] pr-0"
        >
          Through our proprietary platform, WpResidence is changing how agents
          and clients navigate the process of finding or selling a home.
        </p>
      </section>
      {/* form section */}
      <div id="home">
        <div
          data-aos="zoom-in"
          id="#form"
          className="lg:w-[80%] w-full mx-auto grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-xl -mt-14 bg-white dark:bg-slate-900 shadow-md"
        >
          <div className="w-full">
            <h1 className="text-black dark:text-white uppercase font-medium mb-2">Location</h1>
            <input
              type="text"
              placeholder="Enter address, state, city"
              className="border-b-[1px] rounded border-b-slate-400 dark:bg-slate-950  p-2 w-full"
            />
          </div>
          <div className="w-full">
            <h1 className="text-black uppercase font-medium mb-2 dark:text-white">Type</h1>
            <select
              name=""
              id=""
              className="border-b-[1px] text-gray-500 border-b-slate-400 rounded dark:bg-slate-950 p-2 w-full"
            >
              <option value="">Select Property</option>
              <option value="">Rentals</option>
              <option value="">Sales</option>
              <option value="">Commercial</option>
            </select>
          </div>
          <div className="w-full">
            <h1 className="text-black uppercase font-medium mb-2 dark:text-white">Category</h1>
            <select
              name=""
              id=""
              className="border-b-[1px] text-gray-500 border-b-slate-400 dark:bg-slate-950 rounded p-2 w-full"
            >
              <option value="">Property Category</option>
              <option value="">Apartment</option>
              <option value="">Duplex</option>
              <option value="">Condos</option>
              <option value="">House</option>
              <option value="">Villas</option>
            </select>
          </div>
          <div className="w-full text-center">
            <button className="redBtn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
