'use client'

import { useGSAP } from "@gsap/react"
import gsap, { Power4 } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

const PlayReel = () => {
  const parent = useRef(null)
  const videodiv = useRef(null)
  const play = useRef(null)
  const reel = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top top",
        pin: true,
        scrub: 3,
      },
    })
    
    tl.to(videodiv.current, {
      width: "105%",
      height: "105%",
      ease: "power4.out", // Use a string for ease
    }, "a")
    .to(play.current, {
      x: "-150%",
      scale: 1,
      ease: "power4.out", // Use a string for ease
    }, "a")
    .to(reel.current, {
      x: "150%",
      scale: 1,
      ease: "power4.out", // Use a string for ease
    }, "a")
  })
  
  return (
    <div ref={parent} className="mt-32 py-24 sm:py-12 relative w-full h-screen bg-zinc-950 text-zinc-400">
      <div className="mt-5 sm:mt-0 overflow-hidden rounded-md sm:rounded-none z-20 w-full sm:w-[100vw] aspect-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <video 
          ref={videodiv}
          autoPlay muted loop
          className="w-40 sm:w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a">
        </video>
      </div>
      <div className="overlay z-50 w-full h-full flex flex-col items-center justify-between">
        <div className="w-full flex items-center justify-center gap-2">
          <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84="">
            <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path>
          </svg>
          <h3>Work In motion</h3>
        </div>
        <h1 className="flex justify-center items-center z-50 gap-24 sm:gap-[38vw] mt-12 text-6xl sm:text-[8vw] font-light">
          <div ref={play}>Play</div>
          <div ref={reel}>Reel</div>
        </h1>
        <p className="text-center w-2/3 text-sm sm:w-1/3 sm:text-sm sm:mt-26">Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
      </div>
    </div>
  )
}

export default PlayReel
