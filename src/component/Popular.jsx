import React from "react";
import OneImg from "../assets/images/1.jpeg";
import TwoImg from "../assets/images/2.jpeg";
import ThreeImg from "../assets/images/3.jpeg";
const Popular = () => {
  return (
    <section className="lg:w-[95%] w-full mx-auto lg:px-30 px-10 py-20 gap-20 bg-red-100 dark:bg-slate-950 rounded-lg">
      <div className=" flex items-center justify-center mb-[40px]">
        <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
        <div>
              <h1 data-aos="zoom-in" className="uppercase text-xl font-semibold text-red-500 dark:text-orange-400 mb-4">
                Popular Areas
              </h1>
              <h1 data-aos="zoom-in" data-aos-delay="200"
                className="lg:text-6xl text-4xl  text-black dark:text-white font-semibold  pr-0 lg:leading-[70px] leading:[70px] mb-4">
                Explore most popular areas
              </h1>
            </div>
          <div data-aos="zoom-in" data-aos-delay="200"  className="grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6">
             <div className="h-[400px] bg-cover bg-center rounded-xl " style={{backgroundImage:`url(${OneImg})`}}> </div>
             <div className="h-[400px] bg-cover bg-center rounded-xl " style={{backgroundImage:`url(${TwoImg})`}}> </div>
             <div className="h-[400px] bg-cover bg-center rounded-xl " style={{backgroundImage:`url(${ThreeImg})`}}> </div>
          </div>
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6">
           <div data-aos="slide-up" data-delay="200" className="flex justify-center lg:items-center gap-8">
             <h1 className="text-7xl text-black font-semibold dark:text-white">5K</h1>
             <h1 className="text-lg leading-relaxed text-gray-600 uppercase dark:text-gray-300">Active <br/> Listing</h1>
           </div>
           <div data-aos="slide-up" data-delay="200" className="flex justify-center lg:items-center gap-8">
             <h1 className="text-7xl text-black font-semibold dark:text-white">9K</h1>
             <h1 className="text-lg leading-relaxed text-gray-600 uppercase dark:text-gray-300">Solid <br/> Listing</h1>
           </div>
           <div data-aos="slide-up" data-delay="200" className="flex justify-center lg:items-center gap-8">
             <h1 className="text-7xl text-black font-semibold dark:text-white">6K</h1>
             <h1 className="text-lg leading-relaxed text-gray-600 uppercase dark:text-gray-300">Client <br/> We've served</h1>
           </div>
        </div>
    </section>
  );
};

export default Popular;
