'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Work = () => {
  const [work, setWork] = useState([
    {
      heading: "Columbia Pictures",
      subHeading: "Celebrating a Century of Cinema",
      video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      image: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
    },
    {
      heading: "Rino & Pelle",
      subHeading: "Effortless chic lifestyle",
      video: "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      image: "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
    },
    {
      heading: "Aebele Interiors",
      subHeading: "Luxurious design experience",
      video: "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      image: "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)"
    },
    {
      heading: "Pixelflakes",
      subHeading: "Architectural marketing agency",
      video: "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      image: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
    }
  ]);

  return (
    
    <div className="w-full relative">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-16">
        <div className="featured mt-20 flex items-center gap-3 sm:hidden">
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
          <h1 className="capitalize">Featured Projects</h1>
        </div>

        <div className="featuredForPc mt-5">
       
          <h1 className="text-[9vh] sm:text-[32vh] leading-none tracking-tighter mb-5 overflow-hidden">
           <motion.span 
           initial={{rotate:90 , y:"40%" ,opacity:0}}
           whileInView={{rotate:0, y:0 ,opacity:1}}
           viewport={{once:true}}
           transition={{ease:[0.22,1,0.36,1]}}
           className='inline-block origin-left '> Work</motion.span>
            </h1>
          <p className=" sm:hidden text-lg text-zinc-600">Highlights of cases that I passionately built with forward-thinking clients and friends over the years.</p>
        </div>

        <div className="elems w-full mt-12 min-h-screen overflow-hidden hidden sm:block">
          <div data-scroll data-scroll-speed="-.15" className="flex items-start gap-40 h-full w-full   ">
            {/* LEFT */}
            <div className="px-16 w-1/2 h-full">
              <div className="h-[45vw] ml-20 w-full">
                <div className="h-full w-full overflow-hidden relative">
                  <video autoPlay loop muted className="h-full w-full  scale-[1.4] relative left-0 top-0 " src={work[0].video} ></video>
                  <motion.img
                  initial={{opacity:1}}
                  whileHover={{opacity:0}}
                  className="h-full w-full object-cover object-center sm:absolute sm:left-0 sm:top-0 " src={work[0].image} alt="" loading='lazy' />
                </div>
                <div className="flex items-center mt-1 gap-2">
                  <strong>{work[0].heading}</strong>
                  <p>{work[0].subHeading}</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="section h-full w-1/3 ">
              <div>
                <div className="featured  z-[999] flex items-center gap-3 hover">
                  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                  <h1 className="capitalize">Featured Projects</h1>
                </div>
                <p className=" mt-20 text-xl text-zinc-900">Highlights of cases that I passionately built with forward-thinking clients and friends over the years.</p>
              </div>

              <div className="mt-60 h-[36vw] w-[26vw]">
                <div className="h-full w-full overflow-hidden relative">
                  <video autoPlay loop muted className="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 " src={work[1].video}></video>
                  <motion.img 
                  initial={{opacity:1}}
                  whileHover={{opacity:0}}
                  className="h-full w-full object-cover object-center sm:absolute sm:left-0 sm:top-0 " src={work[1].image} alt="" loading='lazy' />
                </div>
                <div className="flex items-center mt-1 gap-2">
                  <strong>{work[1].heading}</strong>
                  <p>{work[1].subHeading}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-52  h-full w-full  ">
            {/* LEFT */}
            <div className="section w-full h-full ">
              <div className="h-[36vw]  mt-96 w-[26vw]">
                <div className="h-full w-full overflow-hidden relative">
                  <video autoPlay loop muted className="h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-125 " src={work[3].video}></video>
                  <motion.img
                  initial={{opacity:1}}
                  whileHover={{opacity:0}}
                  className="h-full w-full object-cover object-center sm:absolute sm:left-0 sm:top-0 " src={work[3].image} alt="" loading='lazy' />
                </div>
                <div className="flex items-center mt-1 gap-2">
                  <strong>{work[3].heading}</strong>
                  <p>{work[3].subHeading}</p>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="px-16 h-full w-full   pr-80">
              <div className="h-[45vw] w-[35vw]">
                <div className="h-full w-full overflow-hidden relative">
                  <video autoPlay loop muted className="h-full relative w-full scale-110" src={work[2].video}></video>
                  <motion.img 
                  initial={{opacity:1}}
                  whileHover={{opacity:0}}
                  className="h-full w-full object-cover object-center sm:absolute sm:left-0 sm:top-0 " src={work[2].image} alt="" loading='lazy' />
                </div>
                <div className="flex items-center mt-1 gap-2">
                  <strong>{work[2].heading}</strong>
                  <p>{work[2].subHeading}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobileElems w-full mt-12 flex flex-col gap-4 sm:hidden md:hidden">
          {work.map((item, index) => (
            <div key={index} className="w-full h-full">
              <div className="w-full">
                <div className="w-full overflow-hidden">
                  <video autoPlay loop muted className="h-full w-full sm:hidden" src={item.video}></video>
                  <img className="h-full w-full hidden object-cover object-center" src={item.image} alt="" loading='lazy' />
                </div>
              </div>
              <div className="flex items-center text-sm mt-1 gap-2">
                <strong>{item.heading}</strong>
                <p>{item.subHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
