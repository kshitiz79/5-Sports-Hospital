'use client';

import { PlayCircle } from 'lucide-react';
import Link from 'next/link';
export default function Hero() {
  return (
    <>
    <section className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="/banner.avif"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-1 ">
        {/* Tagline */}

        <h1 className="text-4xl md:text-7xl font-montserrat-bold mb-6 animate-fade-in"> India's First</h1>
        <h2 className="text-4xl md:text-6xl font-montserrat-bold mb-6 animate-fade-in mt-2">
  <strong>Full SportsMedicine & Rehab Center</strong>
</h2>
<p className="text-2xl md:text-4xl font-montserrat-regular mb-3">
  Experience unparalleled<br />

</p>
<p className="text-2xl md:text-4xl font-montserrat-regular ">  patient care and
rehabilitation services</p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 animate-fade-in-up mt-14">
          <Link
            href="/book-appointment"
            className="bg-dark-green text-white hover:text-green-800  px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white transition flex items-center justify-center gap-2"
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

        {/* Optional: Search Bar */}
        
      </div>
      
    </section>
    <section>
    <div className="bg-light-green bg-opacity-70 py-3 mb-8 overflow-hidden">
          <div className=" whitespace-nowrap text-white">
            <span className="inline-block mx-4">🏥 100+ Athletes Treated</span>
            <span className="inline-block mx-4">🏅 Trusted by 10+ National Teams</span>
            <span className="inline-block mx-4">💪 Cutting-Edge Rehabilitation Technology</span>
            <span className="inline-block mx-4">🏥 100+ Athletes Treated</span>
            <span className="inline-block mx-4">🏅 Trusted by 10+ National Teams</span>
            <span className="inline-block mx-4">💪 Cutting-Edge Rehabilitation Technology</span>
          </div>
        </div>
    </section>

    </>
  );
}