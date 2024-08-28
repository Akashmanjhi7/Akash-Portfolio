import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const Spread = () => {
  
  return (
    <div className='w-full  bg-white flex flex-col items-center gap-12 sm:gap-24 overflow-hidden '>
        <div  className='w-full flex justify-center items-center sm:text-[1vw]   gap-2  '>
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
        <h3>In the media</h3>
        </div>

        <div className=' text-center heading text-[8vh] sm:text-[10vw] leading-none tracking-tight overflow-hidden' >
          {["Spread","the News"].map((item,index)=>{
            return <h1 key={index} className="overflow-hidden " >
              <motion.span
              className='origin-left inline-block'
              initial={{rotate:90, y:"40%",opacity:0}}
              whileInView={{rotate:0, y:0, opacity:1}}
              transition={{ease:[0.22,1,0.36,1] ,duration:.6 , delay:index*.2 }}
              viewport={{once:true}}
              >{item}</motion.span>
              </h1>
          })}
            
            
        </div>

        <div className='para text-center w-2/3 sm:w-1/3 text-lg sm:text-[1.5vw]'>
            <p>Find out more about our work on these leading design and technology platforms.</p>
        </div>

        <Link href="#" className='link flex items-center gap-2'>
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="circle-outline w-4" data-v-5152decb=""><circle cx="25" cy="25" r="23" data-v-5152decb=""></circle></svg>
        <p className='border-b'>Browse all news</p>
        </Link>
    </div>
  )
}

export default Spread
