'use client'
import { NavLinks } from '@/constant/constants'
import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { GrTechnology } from 'react-icons/gr'
import ThemeToogler from '@/components/Helper/ThemeToogler'
const Navbar = ({openNav} : {openNav: () => void}) => {
  const [navBg, setNavBg] = useState(false)
  useEffect(() => {
    const handleNav = () => {
      if (window.scrollY >= 50) {
        setNavBg(true)
    }
    else{
      setNavBg(false)
    }
  }
  window.addEventListener('scroll', handleNav)
  handleNav()

  return () => window.removeEventListener('scroll', handleNav)
  }, [])
  return (
    <div className={`${!navBg ? "bg-blue-950" : "fixed "} transition-all duration-200 h-[12vh] z-[100] fixed w-full bg-blue-500`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto '>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-col'>
                    <GrTechnology className='w-6 h-6 text-white' />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold '>DevTech</h1>
            </div>
            {/* Navlinks */}
            <div className='lg:flex hidden space-x-10 flex-row items-center'>
            {NavLinks.map((link, index) => {
              return (
                <ScrollLink smooth to={link.url} spy key={index} className='text-white text-lg cursor-pointer hover:text-pink-300 font-semibold transition-all duration-200'>
                <p>{link.Label}</p>
                </ScrollLink>
              )
            })}
            </div>
            {/* buttons */}
            <div className='flex items-center space-x-4'>
              {/* ist button create account button */}
              <a href="#" className='px-5 py-2.5 relative rounded group font-medium text-white inline-block'>
                <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500'></span>
                <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500'></span>
                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500'></span>
                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500'></span>
                <span className='relative'>Create Account</span>
              </a>
              {/* ThemeToggler */}
              <ThemeToogler />
              {/* Burger Menu */}
              <HiBars3BottomRight onClick={() => openNav()} className='text-white w-8 h-8 cursor-pointer lg:hidden' />
            </div>
        </div>
    </div> 
  )
}

export default Navbar