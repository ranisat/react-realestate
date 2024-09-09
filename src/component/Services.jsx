import React from 'react'
import { TbHomeCog } from "react-icons/tb";
import { MdBalance } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa6";
import { MdPhotoCamera } from "react-icons/md";
const Services = () => {

  return (
    <section className="lg:w-[95%] w-full mx-auto dark:bg-slate-950 bg-red-100 rounded-lg lg:px-30 px-10 py-20 gap-20" id="services">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1
          data-aos="zoom-in"
          className="uppercase text-xl font-semibold text-red-500 dark:text-orange-400 mb-2">
         our servies
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="lg:text-6xl text-4xl dark:text-white text-black font-semibold  pr-0 lg:leading-[70px] leading:[70px] mb-4">
         Top real estate <br/>
         services available
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-8 mt-6">
        <div data-aos="zoom-in"
          data-aos-delay="200" className="shadow-md  bg-white dark:bg-slate-900 rounded-xl hover:bg-red-200 transition ease-out duration-300 border border-gray-300 p-8 border-b-[6px] border-b-red-500 dark:border-b-orange-400">
           <div className='w-24 h-24 hover:bg-white dark:bg-gray-700 rounded-full  bg-red-100 flex flex-col items-center justify-center mb-4'>
           <TbHomeCog className='text-4xl font-semibold text-red-500 dark:text-orange-400'/>
           </div>
           <div className='py-2'>
            <h1 className='text-2xl font-semibold dark:text-white'>Sell Your Home</h1>
           </div>
           <div className='py-2'>
            <p className='leading-relaxed text-xl dark:text-gray-300'>We sell your home at the best market price</p>
           </div>
           <div className='py-2'>
             <h1 className='font-semibold underline text-red-600 text-xl dark:text-white'>Read More</h1>
           </div>
        </div>

        <div data-aos="zoom-in"
          data-aos-delay="200" className="shadow-md dark:bg-slate-900 bg-white rounded-xl hover:bg-red-200 transition ease-out duration-300 border border-gray-300 p-8 border-b-[6px] border-b-red-500 dark:border-b-orange-400">
           <div className='w-24 h-24 hover:bg-white dark:bg-gray-700 rounded-full bg-red-100 flex flex-col items-center justify-center mb-4'>
           <FaHome className='text-4xl font-semibold text-red-500 dark:text-orange-400'/>
           </div>
           <div className='py-2'>
            <h1 className='text-2xl font-semibold dark:text-white'>Home loans</h1>
           </div>
           <div className='py-2'>
            <p className='leading-relaxed text-xl dark:text-gray-300'>We offer you free consultancy to get a loan</p>
           </div>
           <div className='py-2'>
             <h1 className='font-semibold underline text-red-600 text-xl dark:text-white'>Read More</h1>
           </div>
        </div>

        <div data-aos="zoom-in"
          data-aos-delay="200" className="shadow-md bg-white dark:bg-slate-900 rounded-xl hover:bg-red-200 transition ease-out duration-300 border border-gray-300 p-8 border-b-[6px] border-b-red-500 dark:border-b-orange-400">
           <div className='w-24 h-24 hover:bg-white dark:bg-gray-700 rounded-full bg-red-100 flex flex-col items-center justify-center mb-4'>
           <MdBalance className='text-4xl font-semibold text-red-500 dark:text-orange-400'/>
           </div>
           <div className='py-2'>
            <h1 className='text-2xl font-semibold dark:text-white'>Legal services</h1>
           </div>
           <div className='py-2'>
            <p className='leading-relaxed text-xl dark:text-gray-300'>Expert legal help for all related property items</p>
           </div>
           <div className='py-2'>
             <h1 className='font-semibold underline text-red-600 text-xl dark:text-white'>Read More</h1>
           </div>
        </div>

        <div data-aos="zoom-in"
          data-aos-delay="200" className="shadow-md bg-white dark:bg-slate-900 rounded-xl hover:bg-red-200 transition ease-out duration-300 border border-gray-300 p-8 border-b-[6px] border-b-red-500 dark:border-b-orange-400">
           <div className='w-24 h-24 hover:bg-white dark:bg-gray-700 rounded-full bg-red-100 flex flex-col items-center justify-center mb-4'>
           <FaSearch className='text-4xl font-semibold text-red-500 dark:text-orange-400'/>
           </div>
           <div className='py-2'>
            <h1 className='text-2xl font-semibold dark:text-white'>Home inspection</h1>
           </div>
           <div className='py-2'>
            <p className='leading-relaxed text-xl dark:text-gray-300'>We make sure you get what you were promised</p>
           </div>
           <div className='py-2'>
             <h1 className='font-semibold underline text-red-600 text-xl dark:text-white'>Read More</h1>
           </div>
        </div>

        <div data-aos="zoom-in"
          data-aos-delay="200" className="shadow-md bg-white dark:bg-slate-900 rounded-xl hover:bg-red-200 transition ease-out duration-300 border  border-gray-300 p-8 border-b-[6px] border-b-red-500 dark:border-b-orange-400">
           <div className='w-24 h-24 hover:bg-white dark:bg-gray-700 rounded-full bg-red-100 flex flex-col items-center justify-center mb-4'>
           <FaCalendarPlus className='text-4xl font-semibold text-red-500 dark:text-orange-400'/>
           </div>
           <div className='py-2'>
            <h1 className='text-2xl font-semibold dark:text-white'>Evaluation</h1>
           </div>
           <div className='py-2'>
            <p className='leading-relaxed text-xl dark:text-gray-300'>We offer you free evaluation to get a mortgage loan</p>
           </div>
           <div className='py-2'>
             <h1 className='font-semibold underline text-red-600 text-xl dark:text-white'>Read More</h1>
           </div>
        </div>
        <div data-aos="zoom-in"
          data-aos-delay="200" className="shadow-md bg-white dark:bg-slate-900 rounded-xl hover:bg-red-200 transition ease-out duration-300 border border-gray-300 p-8 border-b-[6px] border-b-red-500 dark:border-b-orange-400">
           <div className='w-24 h-24 hover:bg-white dark:bg-gray-700 rounded-full bg-red-100 flex flex-col items-center justify-center mb-4'>
           <MdPhotoCamera className='text-4xl font-semibold text-red-500 dark:text-orange-400'/>
           </div>
           <div className='py-2'>
            <h1 className='text-2xl font-semibold dark:text-white'>Photoshoot</h1>
           </div>
           <div className='py-2'>
            <p className='leading-relaxed text-xl dark:text-gray-300'>We prepare your home visual presentation</p>
           </div>
           <div className='py-2'>
             <h1 className='font-semibold underline text-red-600 text-xl dark:text-white'>Read More</h1>
           </div>
        </div>
      
      </div>
      <div className='text-center mt-8'>
        <button className='redBtn'>Load more</button>
      </div>
    </section>
  )
}

export default Services
