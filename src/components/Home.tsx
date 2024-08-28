'use client'

import { motion,stagger  } from "framer-motion";
import Link from "next/link"

const Home = () => {
  
  return (
    <div className="w-full relative  h-[133vh]  sm:h-[285vh] text-white overflow-hidden ">
      <div data-scroll data-scroll-speed="-1" className="picture w-full h-full">
        <img
          className="vintage-filter h-full  w-full  sm:h-full  object-cover "
          src="/images/akash.png"
          alt=""
          loading="eager"
        />
      </div>

      <div className=" text sm:w-full px-6 sm:px-16 absolute sm:top-[65vh] top-0 right-0 sm:text-4xl text-xl text-wrap">
        <div className="  font-semibold italic  sm:text-[6vh]  mt-[55vh] sm:mt-0  flex flex-col sm:leading-snug ">
          
          {["Our dreams have to be bigger." ,"Our ambitions higher .","Our commitment deeper.","And our efforts greater ."].map((item,index)=>{
            return  <p key={index} className="overflow-hidden " > <motion.span 
            initial={{rotate:90, y:"100%",opacity:0}}
            animate={{rotate:0, y:0, opacity:1}}
            transition={{ease:[0.22,1,0.36,1] ,duration:1.2 , delay:index*.2 }}
            className="inline-block origin-left">{item}</motion.span></p>
          })}
          
        </div>


        <div className="headings font-bold sm:text-[12vw] text-[7vh] flex flex-col  leading-none gap-3 sm:mt-36 mt-6">

          {["Mern", "Stack","Developer"].map((item,index)=>{
            return  <h1 key={index} className="uppercase overflow-hidden"> 
            <motion.span
            initial={{rotate:90, y:"40%",opacity:0}}
            whileInView={{rotate:0, y:0, opacity:1}}
            viewport={{once:true}}
            transition={{ease:[0.22,1,0.36,1] ,duration:0.8 , delay:index*.15 }}
            className="inline-block origin-left"
            > {item} </motion.span></h1>
          })}

          
        </div>

        <div className="para2 mt-20 tracking-tight leading-normal  sm:w-2/5 sm:text-[3.8vh]">
          <p className="">
            A passionate and enthusiastic MERN Stack Developer, committed to
            building modern, responsive web applications with a focus on
            innovation and user experience
          </p>
        </div>

        <div className="navigate w-full  flex  items-center justify-between text-lg sm:mt-16 sm:text-[2.5vh]   ">
          <div className="sm:mt-0 mt-4 w-1/4 ">
          <Link
  href="/vision"
  className="relative text-zinc-300 pb-2 hover:before:w-0 hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300 sm:mt-6"
>
  The Vision
</Link>

          </div>
          
          <div className="sm:flex items-end text-lg justify-between w-1/4 mr-20  hidden  ">
            <div className="route flex items-center justify-between gap-1 flex-col">
              <Link href={"/vision"}  className="relative text-zinc-300 hover:before:w-full hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300 sm:mt-6">
                Vision
              </Link>
              <Link href={"/eduaction"}  className="relative text-zinc-300 hover:before:w-full hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300 sm:mt-6">
                Education
              </Link>
              <Link href={"/skill"}  className="relative text-zinc-300  hover:before:w-full hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300 sm:mt-6">
                Skill
              </Link>
              <Link href={"/project"}  className="relative text-zinc-300 hover:before:w-full hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300 sm:mt-6">
                Project
              </Link>
            </div>
            <div className="flex items-center justify-between gap-2 flex-col">
              <Link
                href="mailto:manjhiakash00@gmail.com"
                 className="relative text-zinc-300 hover:before:w-full hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300 sm:mt-6"
              >
               Email
              </Link>
              <Link href="tel:+918700574739"  className="relative text-zinc-300  hover:before:w-full hover:before:right-0 before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[1px] before:bg-zinc-300 before:transition-all before:duration-300 sm:mt-6">
                Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
