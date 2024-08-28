'use client'
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';
import Photos from '@/components/Photos';
import PlayReel from '@/components/PlayReel';
import Spread from '@/components/Spread';
import Work from '@/components/Work';

const Page = () => {

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.scroll-container'),
      smooth: true,
    });

    return () => {
      scroll.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="overflow-x-hidden scroll-container">
      <Navbar />
      <Home />
      <Work />
      <PlayReel /> 
      <Photos />
      <Spread />
      <Footer />
    </div>
  );
}

export default Page;
