import React from 'react'

const Contact = () => {
  return (
    <div>
       <section className="lg:w-[95%] w-full mx-auto dark:bg-slate-950 bg-red-100 rounded-lg lg:px-30 px-10 py-20 gap-20" id="contact">
     
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-8 mt-6">
        <div data-aos="zoom-in"
          data-aos-delay="200" className="shadow-md dark:bg-gray-800 bg-white rounded-xl  border-gray-300 p-8 border-b-[6px] border-b-red-500 dark:border-b-orange-400">
            <h1 className='py-2 text-2xl font-semibold mb-2 dark:text-white'>Send us a message today</h1>
           <form action="" className='w-full'>
              <div className='mb-3'>
                <input type="text" name="fullname" id="" placeholder='Enter full Name' className='border border-gray-300 bg-white p-2 rounded w-full dark:bg-slate-900'/>
              </div>
              <div className='mb-3'>
                <input type="text" name="email" id="" placeholder='Enter Email' className='border dark:bg-slate-900 border-gray-300 bg-white p-2 rounded w-full'/>
              </div>
              <div className='mb-3'>
                <input type="text" name="mobile" id="" placeholder='Enter Mobile No' className='border border-gray-300 bg-white p-2 rounded w-full dark:bg-slate-900'/>
              </div>
              <div className='mb-3'>
                <textarea name="" id="" rows={4} className='border dark:bg-slate-900 border-gray-300 bg-white p-2 rounded w-full' placeholder='Enter Message'></textarea>
              </div>
              <div className='mb-3'>
                <button className='redBtn w-full'>Send Mail</button>
              </div>
           </form>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
        <h1
          data-aos="zoom-in"
          className="uppercase text-xl font-semibold text-red-500 dark:text-orange-400 mb-2">
         Reach Us
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-4xl dark:text-white text-black font-semibold  pr-0 lg:leading-[50px] leading:[50px] mb-4">
         Get in touch with <br/>us today and our<br/> team will assist you
        </h1>
        <p  data-aos="zoom-in"
          data-aos-delay="200" className='leading-relaxed dark:text-gray-300'>Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.</p>
      </div>
   </div> 
    </section>
    </div>
  )
}

export default Contact
