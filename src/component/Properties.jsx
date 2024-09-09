import React from "react";
import featureOne from "../assets/images/feature-1.jpg";
import featureTwo from "../assets/images/feature-2.jpg";
import featureThree from "../assets/images/feature-3.jpg";
import featureFour from "../assets/images/feature-4.jpg";
import featureFive from "../assets/images/feature-5.jpg";
import featureSix from "../assets/images/feature-6.jpg";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

const Properties = () => {
  return (
    <section className="lg:w-[95%] w-full mx-auto lg:px-30 px-10 py-20 gap-20" id="properties">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1
          data-aos="zoom-in"
          className="uppercase text-xl font-semibold text-red-500 dark:text-orange-500 mb-2"
        >
          Properties
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="lg:text-6xl text-4xl dark:text-white text-black font-semibold  pr-0 lg:leading-[70px] leading:[70px] mb-4"
        >
          Explore the latest <br />
          properties available
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-8 mt-6">
        <div data-aos="zoom-in"
          data-aos-delay="200" className="bg-white dark:bg-slate-950 rounded-lg border border-gray-300 p-2">
          <div className="relative">
            <img src={featureOne} alt="" className="rounded-lg"/>
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1 mr-2">Sales</span>
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1">Active</span>
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="text-2xl font-bold dark:text-white leading-relaxed mb-2">
              Villa with Amazing View
            </h1>
            <h2 className="text-2xl text-red-600 dark:text-orange-500 font-bold mb-2">$ 213.23</h2>
            <p className="leading-relaxed dark:text-gray-300">
              Beautiful, updated, ground level Co-op apartment in the desirable
              Bay Terrace neighborhood.
            </p>

            <div className="flex justify-start items-center gap-4 mt-4 mb-4">
              <div className="flex justify-center items-center gap-2">
                <FaBath className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 3</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <IoBed className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 4 </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MdSpaceDashboard className="text-xl text-red-500 dark:text-orange-400"/>
                <span className="text-lg text-black dark:text-white"> 250 sq ft </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-8"> </div>
            <div className="grid grid-cols-2 justify-between items-center py-3">
            <div className="flex justify-center items-center gap-2">
                <FaUserCircle className="text-3xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> Alice Dream </span>
              </div>
              <div className="flex justify-center items-center gap-4">
              <IoShareSocialSharp className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaHeart className="text-3xl p-1 text-red-500 w-30 h-30 dark:text-orange-400 border border-gray-400" />
              <FaPlus  className="text-3xl p-1 text-red-500 w-30 h-30 dark:text-orange-400 border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
          data-aos-delay="300" className="bg-white rounded-lg border dark:bg-slate-950 border-gray-300 p-2">
          <div className="relative">
            <img src={featureTwo} alt="" className="rounded-lg"/>
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1 mr-2">Sales</span>
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1">Active</span>
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="text-2xl font-bold leading-relaxed mb-2 dark:text-white">
            Townhouse for Sale
            </h1>
            <h2 className="text-2xl text-red-600 dark:text-orange-500 font-bold mb-2">$ 213.23</h2>
            <p className="leading-relaxed dark:text-gray-300">
              Beautiful, updated, ground level Co-op apartment in the desirable
              Bay Terrace neighborhood.
            </p>

            <div className="flex justify-start items-center gap-4 mt-4 mb-4">
              <div className="flex justify-center items-center gap-2">
                <FaBath className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 3</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <IoBed className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 4 </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MdSpaceDashboard className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 250 sq ft </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-8"> </div>
            <div className="grid grid-cols-2 justify-between items-center py-3">
            <div className="flex justify-center items-center gap-2">
                <FaUserCircle className="text-3xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> Alice Dream </span>
              </div>
              <div className="flex justify-center items-center gap-4">
              <IoShareSocialSharp className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaHeart className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaPlus  className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
          data-aos-delay="400" className="bg-white rounded-lg dark:bg-slate-950 border border-gray-300 p-2">
          <div className="relative">
            <img src={featureThree} alt="" className="rounded-lg"/>
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1 mr-2">Sales</span>
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1">Active</span>
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="text-2xl font-bold leading-relaxed mb-2 dark:text-white">
            Duplex sea facing for rent
            </h1>
            <h2 className="text-2xl text-red-600 font-bold mb-2 dark:text-orange-500">$ 213.23</h2>
            <p className="leading-relaxed dark:text-gray-300">
              Beautiful, updated, ground level Co-op apartment in the desirable
              Bay Terrace neighborhood.
            </p>

            <div className="flex justify-start items-center gap-4 mt-4 mb-4">
              <div className="flex justify-center items-center gap-2">
                <FaBath className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 3</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <IoBed className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 4 </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MdSpaceDashboard className="text-xl text-red-500 dark:text-orange-400" />{" "}
                <span className="text-lg text-black dark:text-white"> 250 sq ft </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-8"> </div>
            <div className="grid grid-cols-2 justify-between items-center py-3">
            <div className="flex justify-center items-center gap-2">
                <FaUserCircle className="text-3xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> Alice Dream </span>
              </div>
              <div className="flex justify-center items-center gap-4">
              <IoShareSocialSharp className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaHeart className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaPlus  className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
          data-aos-delay="200" className="bg-white dark:bg-slate-950 rounded-lg border border-gray-300 p-2">
          <div className="relative">
            <img src={featureFour} alt="" className="rounded-lg"/>
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1 mr-2">Sales</span>
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1">Active</span>
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="text-2xl font-bold leading-relaxed mb-2 dark:text-white">
            Villa with Side View
            </h1>
            <h2 className="text-2xl text-red-600 font-bold mb-2 dark:text-orange-500">$ 213.23</h2>
            <p className="leading-relaxed dark:text-gray-300">
              Beautiful, updated, ground level Co-op apartment in the desirable
              Bay Terrace neighborhood.
            </p>

            <div className="flex justify-start items-center gap-4 mt-4 mb-4">
              <div className="flex justify-center items-center gap-2">
                <FaBath className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 3</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <IoBed className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 4 </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MdSpaceDashboard className="text-xl text-red-500 dark:text-orange-400" />{" "}
                <span className="text-lg text-black dark:text-white"> 250 sq ft </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-8"> </div>
            <div className="grid grid-cols-2 justify-between items-center py-3">
            <div className="flex justify-center items-center gap-2">
                <FaUserCircle className="text-3xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> Alice Dream </span>
              </div>
              <div className="flex justify-center items-center gap-4">
              <IoShareSocialSharp className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaHeart className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaPlus  className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
          data-aos-delay="300" className="bg-white dark:bg-slate-950 rounded-lg border border-gray-300 p-2">
          <div className="relative">
            <img src={featureFive} alt="" className="rounded-lg"/>
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1 mr-2">Sales</span>
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1">Active</span>
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="text-2xl font-bold leading-relaxed mb-2 dark:text-white">
            Awesome villa for rent
            </h1>
            <h2 className="text-2xl text-red-600 font-bold mb-2 dark:text-orange-500">$ 213.23</h2>
            <p className="leading-relaxed dark:text-gray-300">
              Beautiful, updated, ground level Co-op apartment in the desirable
              Bay Terrace neighborhood.
            </p>

            <div className="flex justify-start items-center gap-4 mt-4 mb-4">
              <div className="flex justify-center items-center gap-2">
                <FaBath className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 3</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <IoBed className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 4 </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MdSpaceDashboard className="text-xl text-red-500 dark:text-orange-400" />{" "}
                <span className="text-lg text-black dark:text-white"> 250 sq ft </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-8"> </div>
            <div className="grid grid-cols-2 justify-between items-center py-3">
            <div className="flex justify-center items-center gap-2">
                <FaUserCircle className="text-3xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black"> Alice Dream </span>
              </div>
              <div className="flex justify-center items-center gap-4">
              <IoShareSocialSharp className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaHeart className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaPlus  className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
          data-aos-delay="400" className="bg-white dark:bg-slate-950 rounded-lg border border-gray-300 p-2">
          <div className="relative">
            <img src={featureSix} alt="" className="rounded-lg"/>
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1 mr-2">Sales</span>
              <span className="bg-red-600 dark:bg-white dark:text-black text-white text-md rounded-full px-4 py-1">Active</span>
            </div>
          </div>
          <div className="py-6 px-4">
            <h1 className="text-2xl font-bold leading-relaxed mb-2 dark:text-white">
            Street Farm for sale
            </h1>
            <h2 className="text-2xl text-red-600 dark:text-orange-400 font-bold mb-2">$ 213.23</h2>
            <p className="leading-relaxed dark:text-gray-300">
              Beautiful, updated, ground level Co-op apartment in the desirable
              Bay Terrace neighborhood.
            </p>

            <div className="flex justify-start items-center gap-4 mt-4 mb-4">
              <div className="flex justify-center items-center gap-2">
                <FaBath className="text-xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> 3</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <IoBed className="text-xl text-red-500 dark:text-orange-400"/>
                <span className="text-lg text-black dark:text-white"> 4 </span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <MdSpaceDashboard className="text-xl text-red-500 dark:text-orange-400"/>{" "}
                <span className="text-lg text-black dark:text-white"> 250 sq ft </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 mt-8"> </div>
            <div className="grid grid-cols-2 justify-between items-center py-3">
            <div className="flex justify-center items-center gap-2">
                <FaUserCircle className="text-3xl text-red-500 dark:text-orange-400" />
                <span className="text-lg text-black dark:text-white"> Alice Dream </span>
              </div>
              <div className="flex justify-center items-center gap-4">
              <IoShareSocialSharp className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaHeart className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              <FaPlus  className="text-3xl p-1 text-red-500 dark:text-orange-400 w-30 h-30 border border-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
