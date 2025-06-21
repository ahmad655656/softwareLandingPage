'use client'
import { NavLinks } from '@/constant/constants'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import {CgClose} from 'react-icons/cg'
const MobileNav = ({showNav, closeNav} : {showNav: boolean, closeNav: () => void}) => {

  return (
    <div>
     {/* OverLay */}
    <div className={`${showNav ? "w-full" : "w-0"} fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 h-svh `}></div>
    {/* MobileNav */}
    <div className={`${showNav ? "flex" :  "hidden"} text-white w-[88%] sm:w-[60%] bg-blue-900 space-y-6 z-[1050] justify-center flex-col h-full fixed transform transition-all duration-500 delay-300`}>
      {NavLinks.map((link, index) => {
        return (
          <ScrollLink key={index} to={link.url}><p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] '>
            {link.Label}
            </p></ScrollLink>
        )
      })}
      {/* Cross icon for close the navbar */}
      <CgClose onClick={() => closeNav()} className='absolute top-[0.7rem] right-[1.4rem] cursor-pointer sm:w-8 sm:h-8 w-6 h-6 ' />
    </div>
    </div>
  )
}

export default MobileNav