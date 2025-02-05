'use client';

import { PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <>
      <section
        className={`h-[100vh] flex items-center justify-center overflow-hidden sticky top-0 transition-colors duration-500 ${
          darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'
        }`}
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Video Background */}
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
          {/* Overlay */}
          <div className={`absolute inset-0 ${darkMode ? 'bg-black bg-opacity-60' : 'bg-gray-200 bg-opacity-70'}`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10  mb-20  md:mb-0 text-center px-4 uppercase">
          {/* Top Tagline */}
          <div
            className={`inline-block px-4 py-2 text-xs md:text-2xl   mb-3 font-bold tracking-wide ${
              darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-gray-100'
            }`}
          >
            India’s Premier Sports Medicine & Rehab Center
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-[11rem] font-bebas leading-tight tracking-[-0.04em]">
            <strong className={`${darkMode ? 'text-white' : 'text-black'} font-extrablack`}>SUCCESS</strong>
          </h1>
          <h2 className={`text-4xl md:text-6xl font-bebas ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <strong>IS A TEAM SPORT <span className="text-light-green">™</span></strong>
          </h2>

          {/* Subheading */}
          <p className={`text-lg md:text-2xl font-montserrat mt-6 max-w-3xl mx-auto ${
            darkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>
            India's first integrated sports medicine and rehab facility offering cutting-edge treatment and world-class rehabilitation.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center flex-col md:flex-row gap-4 animate-fade-in-up mt-14">
            <Link
              href="/book-appointment"
              className={`border-2 px-8 py-3 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2 ${
                darkMode
                  ? 'bg-dark-green text-white border-white hover:text-green-800 hover:bg-white'
                  : 'bg-green-600 text-white border-green-600 hover:bg-green-700'
              }`}
            >
              <PlayCircle className="w-6 h-6" />
              Book an Appointment
            </Link>
            <Link
              href="/free-consultation"
              className={`border-2 px-8 py-3 rounded-lg text-lg font-semibold transition flex items-center justify-center gap-2 ${
                darkMode
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              📞 Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
