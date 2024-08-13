import React from 'react'
import { BiLogoGmail } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className='h-16 bg-black border-b border-gray-800 flex justify-center items-center'>
      <BiLogoGmail className='bg-white w-12 h-7' /> <h1 className='text-xl font-light text-white mx-2 font-mono'>REACHINBOX</h1>
    </div>
  )
}

export default Navbar