'use client'
import { motion } from 'framer-motion';
import { Power4 } from 'gsap/all';
import Link from 'next/link';
import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {
  
  return (
    <nav className='w-full fixed z-[999]'>
    <div className='max-w-screen text-zinc-300 text-xl mx-auto py-5 sm:py-10 px-6 sm:px-16  flex items-center justify-between'>
     <motion.div
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{delay:1, ease: Power4.easeInOut }}
     >
       <h1 className='logo sm:text-5xl font-semibold'>Akash</h1>
       </motion.div>
      
      <motion.div 
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{delay:1, ease: Power4.easeInOut }}
      className='sm:hidden'>
        <IoMenuSharp/>
      </motion.div>

      <div className='hidden sm:flex gap-14 sm:text-sm'>
  {["Skills", "Project", "Education"].map((item, index) => (
  <motion.div
  key={index}
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{delay:1, ease: Power4.easeInOut }}
  >
<Link 
       
      href={`/${item}`} 
      className='relative text-zinc-300 pb-2 hover:before:w-full hover:before:right-0 before:content-[""] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300'
    >
      {item}
    </Link>
  </motion.div>  
  ))}
</div>

    </div> 
    </nav> 
  )
}

export default Navbar
