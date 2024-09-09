import React, { useState } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
const Darkmode = () => {
  const [mode, setMode] = useState();

  const toggleMode = () =>{
   let changemode = document.body;
   changemode.classList.toggle('dark');
   setMode(mode => !mode)
  }
  return (
   <button className='rounded-full w-50 h-50' onClick={toggleMode}>{mode ? <IoMoonOutline /> : <IoSunnyOutline />}</button>
  )
}

export default Darkmode
