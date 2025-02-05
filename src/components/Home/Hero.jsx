'use client';

import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className=" h-[85vh] flex items-center justify-center text-white overflow-hidden sticky top-0 -z-10">
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
        <div className="relative z-10 text-center px-1  ">
        <h1 className="text-4xl md:text-7xl font-montserrat-bold mb-4 animate-fade-in bg-dark-green max-w-xl  ml-60 text-white  py-2 block">
  India's First
</h1>

<h2 className="text-4xl md:text-6xl font-montserrat-bold animate-fade-in bg-dark-green text-white px-4 py-2 block">
  <strong>Full SportsMedicine & Rehab Center</strong>
</h2>

          <p className="text-2xl md:text-4xl font-montserrat-regular mt-6 mb-3">
            Experience unparalleled
            <br />
          </p>
          <p className="text-2xl md:text-4xl font-montserrat-regular">
            patient care and rehabilitation services
          </p>

          <div className="flex items-center justify-center flex-col md:flex-row gap-4 animate-fade-in-up mt-14">
            <Link
              href="/book-appointment"
              className="bg-dark-green text-white hover:text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition flex items-center justify-center gap-2"
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
