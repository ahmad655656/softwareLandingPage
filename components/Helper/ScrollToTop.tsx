'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisiblity = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            }
            else{
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisiblity)

        return () => window.removeEventListener('scroll', toggleVisiblity) 
    }, [])

    // scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div className='fixed bottom-4 animate-pluse right-4 '>
        {isVisible && (
            <button onClick={scrollToTop} className='bg-pink-500 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none '>
               <FaArrowUp />
            </button>
        )}
    </div>
  )
}

export default ScrollToTop