import React from 'react'
import { LuHome } from "react-icons/lu";
import { MdPersonSearch } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaInbox } from "react-icons/fa";
import { LuBarChart2 } from "react-icons/lu";

const OneboxNavbar = () => {
  return (
    <div className='w-16 h-auto bg-black border-r border-gray-600'>
        <div className='flex flex-col gap-10 items-center mt-14'>
            <p className='text-gray-300 text-3xl'><LuHome /></p>
            <p className='text-gray-300 text-3xl'><MdPersonSearch /></p>
            <p className='text-gray-300 text-3xl'><IoMdMail /></p>
            <p className='text-gray-300 text-3xl'><BsFillSendFill /></p>
            <p className='text-gray-300 text-3xl'><GiHamburgerMenu /></p>
            <p className='text-gray-300 text-3xl'><FaInbox /></p>
            <p className='text-gray-300 text-3xl'><LuBarChart2 /></p>
        </div>
    </div>
  )
}

export default OneboxNavbar