import Link from "next/link"


const Footer = () => {
  return (
    <div className="bg-[#080808] text-[#E0CCBB] w-full mt-4 px-6 py-16 overflow-hidden ">
        <div className="sm:max-w-screen-2xl  mx-auto flex flex-col gap-12 sm:gap-4   " >

            <div className="head  flex items-center justify-center sm:justify-between sm:gap-80  ">
                <div className="heading text-[8vh] sm:text-[8vw] leading-none z-50 " >
                    <h1>Our</h1>
                    <h1>Story</h1>
                </div>
            <div className="video overflow-hidden aspect-video   ">
                    <video
                    autoPlay loop muted
                    className="h-full w-full shrink-0 scale-[1.4] sm:scale-[1.3] z-40 " src="https://www.exoape.com/video/video-6.mp4"></video>
            </div>
            </div>
            <div className="para w-full sm:w-1/3 sm:text-2xl text-xl">
                <p>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
            </div>
            <div className="sm:py-8">
            <Link href="#" className='link flex items-center gap-2 text-[#E0CCBB]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeLinejoin="round" className="lucide lucide-circle w-4"><circle cx="12" cy="12" r="10"/></svg>
        <p className='border-b text-base'>Browse all news</p>
        </Link>
            </div>

            <div className="border border-[#E0CCBB]" />

            <div className="bottom-footer flex items-center  ">
                <ul className="capitalize w-1/2 flex flex-col gap-2 sm:gap-4">
                   <Link href="/work"> <li>Work</li></Link>
                   <Link href="/studio"> <li>studio</li></Link>
                   <Link href="/news"> <li>news</li></Link>
                   <Link href="/contact"> <li>contact</li></Link>
                </ul>

                <ul className="capitalize flex flex-col gap-2 sm:gap-4">
                   <Link href="/linkdin"> <li>linkedin</li></Link>
                   <Link href="/studio"> <li>Github</li></Link>
                   <Link href="/news"> <li>Twitter</li></Link>
                   <Link href="/contact"> <li>Instagram</li></Link>
                </ul>

                
            </div>
            </div>
    </div>
  )
}

export default Footer
