import React, { useState, useEffect } from 'react'
import { TiThMenu } from "react-icons/ti";
import {Link,  useLocation} from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation()

  useEffect(() => {
    // Scroll to the element with the ID from the fragment identifier
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location.hash])
  const menu = [
    {
      name:'Home',
      link:'/#home'
    },
    {
      name:'About',
      link:'/#about'
    },
    {
      name:'Properties',
      link:'/#properties'
    },
    {
      name:'Services',
      link:'/#services'
    },
    {
      name:'Testimonial',
      link:'/#testimonial'
    },
    {
      name:'Contact',
      link:'/#contact'
    }
  ]
  return (
   <header className='sticky top-0 z-50 bg-gray-100 dark:bg-slate-900 px-2 py-4 shadow-lg'>
     <div className='w-[95%] mx-auto'>
       <nav className='flex justify-between items-center gap-4 lg:px-10 px-4 py-2 '>
         <div>
          <h1 className='text-4xl font-bold text-black dark:text-white'>Real <span className='text-orange-600'>Estate</span></h1>
         </div>
         {/*desktop menu  */}
          <div>
            <ul className='lg:flex justify-center items-center gap-8 hidden'>
            {menu.map((item, index)=>(
                <li key={index} className='text-[15px] dark:text-white uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600 hover:text-white transition ease-in-out duration-500'>
                <Link  to={item.link} spy={true} offset={-100} smooth={true}>{item.name}</Link>
              </li>
            ))}
            </ul>
          </div>
          <button onClick={()=>setShow(!show)}
           className='bg-transparent text-xl outline-none cursor-pointer md:hidden block'>
              <TiThMenu />
              </button>
              {/* mobile menu */}

                 {
                  show ? <div className='md:hidden w-[180px] block absolute left-0 shadow-md top-0 bg-white h-screen z-30'>
                  <ul className='lg:flex justify-center items-center gap-8'>
                  {menu.map((item, index)=>(
                      <li key={index} className='text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 rounded-lg hover:bg-red-600 hover:text-white transition ease-in-out duration-500'>
                      <Link  to={item.link} spy={true} offset={-100} smooth={true}>{item.name}</Link>
                    </li>
                  ))}
                  </ul>
                </div> : ''
                 }
       </nav>
      </div>  
   </header>
  )
}

export default Navbar
