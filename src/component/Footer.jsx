import React from 'react'
import Darkmode from './Darkmode'
import { FiChevronsUp } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialTwitter } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import { FaRegBuilding } from "react-icons/fa";
import { IoPhonePortraitSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Feauter from '../assets/images/feature-5.jpg'
import FeauterSix from '../assets/images/feature-6.jpg'

const Footer = () => {
  return (
    <section className="bg-slate-900 py-10 lg:px-20 px-10">
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 border-b border-b-gray-400 pb-4">
        <div>
          <div className="my-3">
            <h1 className="text-3xl text-white font-semibold">About Us</h1>
          </div>
          <div>
            <p className="leading-relaxed text-white dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos eius laborum nobis dolores minima incidunt quidem,
              sunt voluptatibus amet enim.
            </p>
          </div>
          <div className='flex items-start justify-start gap-4 mt-4'>
            <div className='w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center'>
            <FaFacebookF />
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center'>
            <IoLogoInstagram />
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center'>
            <TiSocialTwitter />
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center'>
            <CiYoutube />
            </div>
          </div>
        </div>
        <div>
          <div className="my-3">
            <h1 className="text-3xl text-white font-semibold">Contact Us</h1>
          </div>
          <div className='mt-4'>
            <p className='text-white py-1 flex items-center'><FaRegBuilding className='mr-1'/> 10845 Griffith Peak Dr, Las Vegas, NV 89135</p>
            <p className='text-white py-1 flex items-center'><IoPhonePortraitSharp className='mr-1'/> +91 879 098 8901</p>
            <p className='text-white py-1 flex items-center'><IoPhonePortraitSharp className='mr-1'/> +91 123 678 0912</p>
            <p className='text-white py-1 flex items-center'><MdOutlineEmail className='mr-1'/> office23@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="my-3">
            <h1 className="text-3xl text-white font-semibold">Latest Post</h1>
          </div>
          <div className='mt-4'>
            <div className='flex items-center justify-start gap-2 mb-2'>
              <img src={Feauter} alt="" className='rounded-lg w-24 h-20'/>
              <div>
                <p className='text-white '>Villa with amazing view</p>
                <p className='text-gray-400'>$ 278.98</p>
              </div>
            </div>
            <div className='flex items-center justify-start gap-2 mt-2'>
              <img src={FeauterSix} alt="" className='rounded-lg w-24 h-20'/>
              <div>
                <p className='text-white '>Sea View Villa</p>
                <p className='text-gray-400'>$ 278.98</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-4 text-center'>
         <h1 className='text-white text-md leading-2'>Copyright Real Estate, All Rights Reserved</h1>
      </div>
      <div className="fixed right-3 z-80 bottom-80 bg-orange-600 text-white flex flex-col items-center justify-center text-3xl text-center rounded-full w-[50px] h-[50px]">
        <Darkmode />
      </div>
      <div className="fixed right-3 z-80 bottom-10 bg-red-600 text-white flex flex-col items-center justify-center text-3xl text-center rounded-full w-[50px] h-[50px]">
        <FiChevronsUp />
      </div>
    </section>
  );
}

export default Footer
