import React from "react";
import aboutImg from "../assets/images/about.jpg";
const About = () => {
  return (
    <section id="about" className="">
      <div className="lg:w-[95%] w-full mx-auto lg:px-30 px-10 py-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 justify-center gap-4">
          <div className="">
            <img
              src={aboutImg}
              alt=""
              className="rounded-xl lg:w-[500px] lg:h-[600px]"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-8">
            <div>
              <h1
                data-aos="zoom-in"
                className="uppercase text-xl font-semibold text-red-500 dark:text-orange-400 mb-4"
              >
                Who we are
              </h1>
              <h1
                data-aos="zoom-in"
                data-aos-delay="200"
                className="lg:text-6xl text-4xl dark:text-white text-black font-semibold  pr-0 lg:leading-[60px] leading:[60px] mb-4"
              >
                Find your next Home in Las Vegas
              </h1>
              <p
                data-aos="zoom-in"
                className="leading-relaxed text-xl text-black dark:text-gray-300 py-2"
              >
                Through our proprietary platform, WpResidence is changing how
                agents and clients navigate the process of finding or selling a
                home.
              </p>
              <div className="py-2">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  className="redBtn"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
