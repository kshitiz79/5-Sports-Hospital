'use client';

import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className=" h-[100vh] flex  items-center justify-center text-white overflow-hidden sticky top-0 ">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
            poster="/banner.avif"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          {/* Overlay to darken the video */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 uppercase">
  {/* Top Tagline */}
  <div className="bg-green-700 inline-block px-4 py-2 text-white text-lg md:text-2xl font-bold tracking-wide">
    India’s Premier Sports Medicine & Rehab Center
</div>

  {/* Main Heading */}
  <h1 className="text-5xl md:text-[11rem] font-bebas text-white leading-tight tracking-[-0.1em]  ">
  <strong className='font-extrablack'> SUCCESS</strong> 
  </h1>
  <h2 className="text-4xl md:text-6xl  font-bebas text-white">
   <strong>IS A TEAM SPORT <span className="text-light-green">™</span></strong> 
  </h2>

  {/* Subheading */}
  <p className="text-lg md:text-2xl font-montserrat text-gray-200 mt-6 max-w-3xl mx-auto">
    India's first integrated sports medicine and rehab facility offering
    cutting-edge treatment and world-class rehabilitation.
  </p>
          <div className="flex items-center justify-center flex-col md:flex-row gap-4 animate-fade-in-up mt-14">
            <Link
              href="/book-appointment"
              className="bg-dark-green  text-white  border-2 border-white hover:text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-6 h-6" />
              Book an Appointment
            </Link>
            <Link
              href="/free-consultation"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
            >
              📞 Free Consultation
            </Link>
          </div>
        </div>
      </section>


    </>
  );
}
