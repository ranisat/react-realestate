import React from "react";
import userOne from "../assets/images/user-1.jpeg";
import userTwo from "../assets/images/user-2.jpeg";
import { FaStar } from "react-icons/fa";
const Testimonials = () => {
  return (
    <section className="lg:w-[95%] w-full mx-auto  rounded-lg lg:px-30 px-10 py-20 gap-20" id="testimonial">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1
          data-aos="zoom-in"
          className="uppercase text-xl font-semibold text-red-500 dark:text-orange-400 mb-2"
        >
          OUR CLIENTS
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="lg:text-6xl text-4xl text-black dark:text-white font-semibold  pr-0 lg:leading-[70px] leading:[70px] mb-4"
        >
          What are our clients
          <br />
          saying about us
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-8 mt-6">
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="shadow-md bg-white dark:bg-slate-900 rounded-xl  border-gray-300 p-8"
        >
          <div className="flex items-center justify-start mb-4 gap-4">
            <img src={userOne} alt="" className="rounded-full w-20 h-20" />
            <div>
              <h1 className="text-lg font-semibold dark:text-white">Dana Gilmore</h1>
              <p className="leading-relaxed text-gray-400 dark:text-white">Excellent team!</p>
            </div>
          </div>
          <div className="py-2">
            <p className="leading-relaxed text-sm text-gray-500 dark:text-gray-300">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication
            </p>
          </div>
          <div className="py-2 flex items-center justify-start text-orange-500 gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="shadow-md bg-white dark:bg-slate-900 rounded-xl  border-gray-300 p-8"
        >
          <div className="flex items-center justify-start mb-4 gap-4">
            <img src={userTwo} alt="" className="rounded-full w-20 h-20" />
            <div>
              <h1 className="text-lg font-semibold dark:text-white">Alex gilmore</h1>
              <p className="leading-relaxed text-gray-400 dark:text-gray-300">Excellent team!</p>
            </div>
          </div>
          <div className="py-2">
            <p className="leading-relaxed text-sm text-gray-500 dark:text-gray-300">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication
            </p>
          </div>
          <div className="py-2 flex items-center justify-start text-orange-500 gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="shadow-md bg-white dark:bg-slate-900 rounded-xl  border-gray-300 p-8"
        >
          <div className="flex items-center justify-start mb-4 gap-4">
            <img src={userOne} alt="" className="rounded-full w-20 h-20" />
            <div>
              <h1 className="text-lg font-semibold dark:text-white">Sivay Ashbi</h1>
              <p className="leading-relaxed text-gray-400 dark:text-gray-300">Excellent team!</p>
            </div>
          </div>
          <div className="py-2">
            <p className="leading-relaxed text-sm text-gray-500 dark:text-gray-300">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication
            </p>
          </div>
          <div className="py-2 flex items-center justify-start text-orange-500 gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="shadow-md bg-white dark:bg-slate-900 rounded-xl  border-gray-300 p-8"
        >
          <div className="flex items-center justify-start mb-4 gap-4">
            <img src={userTwo} alt="" className="rounded-full w-20 h-20 bg-conver" />
            <div>
              <h1 className="text-lg font-semibold dark:text-white">Albert adame</h1>
              <p className="leading-relaxed text-gray-400 dark:text-gray-300">Excellent team!</p>
            </div>
          </div>
          <div className="py-2">
            <p className="leading-relaxed text-sm text-gray-500 dark:text-gray-300">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication
            </p>
          </div>
          <div className="py-2 flex items-center justify-start text-orange-500 gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="shadow-md bg-white rounded-xl dark:bg-slate-900 border-gray-300 p-8"
        >
          <div className="flex items-center justify-start mb-4 gap-4">
            <img src={userOne} alt="" className="rounded-full w-20 h-20" />
            <div>
              <h1 className="text-lg font-semibold dark:text-white">Dana Gilmore</h1>
              <p className="leading-relaxed text-gray-400 dark:text-gray-300">Excellent team!</p>
            </div>
          </div>
          <div className="py-2">
            <p className="leading-relaxed text-sm text-gray-500 dark:text-gray-300">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication
            </p>
          </div>
          <div className="py-2 flex items-center justify-start text-orange-500 gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="shadow-md bg-white rounded-xl dark:bg-slate-900 border-gray-300 p-8"
        >
          <div className="flex items-center justify-start mb-4 gap-4">
            <img src={userOne} alt="" className="rounded-full w-20 h-20" />
            <div>
              <h1 className="text-lg font-semibold dark:text-white">Dana Gilmore</h1>
              <p className="leading-relaxed text-gray-400 dark:text-gray-300">Excellent team!</p>
            </div>
          </div>
          <div className="py-2">
            <p className="leading-relaxed text-sm text-gray-500 dark:text-gray-300">
              The WP Estate team did an outstanding job helping me buy my first
              home. The high level of service and dedication
            </p>
          </div>
          <div className="py-2 flex items-center justify-start text-orange-500 gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
