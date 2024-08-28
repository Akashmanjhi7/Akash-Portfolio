'use Client'

import { useGSAP } from "@gsap/react"
import { Power4, ScrollTrigger } from "gsap/all"
import gsap from "gsap/all"
import { useRef } from "react"



const Photos = () => {
const parent = useRef(null)
const first = useRef(null)
const second = useRef(null)
const third = useRef(null)
const fourth = useRef(null)
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const tl=gsap.timeline({
            scrollTrigger: {
                trigger:parent.current,
                start:"0 90%",
                scrub:3
            }
        })
       
        tl
        .to(first.current,{
            x:"40%",
            ease: Power4
        },"a")
        .to(second.current,{
            x:"50%",
            y:"50%",
            ease: Power4
        },"a")
        .to(third.current,{
            x:"-40%",
            y:"-20%",
            ease: Power4
        },"a")
        .to(fourth.current,{
            x:"-60%",
            ease: Power4
        },"a")

        

    })
  return (
    <div ref={parent} className='w-full h-[70vh] py-32 sm:h-[150vh] bg-white text-black  flex justify-center items-center overflow-hidden '>
    <div className='w-2/5 h-80 sm:w-auto sm:h-[70%] bg-red-400  relative  '>

        <div ref={first} className='absolute w-20 h-28 sm:w-40 sm:h-56   top-[1rem] -right-16 sm:top-[2rem] sm:-right-32'>
            <img className='w-full h-full object-cover' loading='lazy' src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)" alt="" />
        </div>
        <div ref={second} className='absolute w-32 h-32 sm:w-72 sm:h-72  -bottom-24 -right-24 sm:-bottom-52 sm:-right-52 '>
            <video autoPlay muted loop  className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"  />
        </div>
        <div ref={third} className='absolute  w-36 h-24 sm:w-80 sm:h-60 -bottom-12 -left-32 sm:-bottom-32 sm:-left-72'>
            <img className='w-full h-full object-cover' loading='lazy' src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)" alt="" />
        </div>
        <div ref={fourth} className='absolute  w-36 h-20 sm:w-96 sm:h-52 top-20 -left-28 sm:top-40 sm:-left-80'>
            <video autoPlay muted loop className='w-full h-full object-cover' src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"  />
        </div>
    <img className='w-full   h-full   object-cover'src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)" alt="" />
    </div>
  </div>
  )
}

export default Photos
