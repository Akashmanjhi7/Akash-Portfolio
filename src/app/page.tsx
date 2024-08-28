'use client'
import Footer from "@/components/Footer"
import Home from "@/components/Home"
import Navbar from "@/components/Navbar"
import Photos from "@/components/Photos"
import PlayReel from "@/components/PlayReel"
import Spread from "@/components/Spread"
import Work from "@/components/Work"
import LocomotiveScroll from 'locomotive-scroll'

const page = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="overflow-x-hidden ">
      <Navbar/>
      <Home/>
      <Work/>
      <PlayReel/> 
    <Photos/>
    <Spread/>
    <Footer/>
    </div>
  )
}

export default page
