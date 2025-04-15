'use client';


import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook
import React, { useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});


const AppointmentModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
   
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full relative z-50">
        <div className="flex justify-between items-center p-4 border-b">
          <h4 className="text-xl font-bold">Appointment Details</h4>
          <button className="text-gray-600 text-3xl leading-none" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="p-4">
          <iframe
            src="https://kivihealth.com/iam/pooja.rai.f6ip143zmtdj/bookslot"
            width="100%"
            height="500"
            style={{ border: 'none' }}
            title="Appointment Booking"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const { darkMode } = useTheme();

  return (
    <>
      <section style={{ fontFamily: 'Space Grotesk' }}
        className={`h-[100vh] flex items-center justify-center overflow-hidden sticky top-0 transition-colors duration-500 {spaceGrotesk.variable} ${darkMode ? 'bg-black text-white' : ' text-gray-900'
          }`}
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Video Background */}
          <div className="relative w-full h-screen overflow-hidden">
            <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
              <source src="/video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>



          {/* Overlay */}
          <div className={`absolute inset-0 ${darkMode ? 'bg-black bg-opacity-60' : 'bg-gray-600 bg-opacity-70'}`}></div>
        </div>

        {/* Content */}
        <div className="relative z-10  mb-20  md:mb-0 text-center px-4 ">
          {/* Top Tagline */}
          <>
            <div
              className={`inline-block px-4 py-2 text-xs md:text-xl mb-3 font-bold tracking-wide rounded-lg ${darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-gray-100'
                }`}
            >
              Athlete Recovery & Sports Performance Enhancement
            </div>
            <br />
            <div
              className={`inline-block px-4 py-2 text-xs md:text-4xl mb-3 font-bold tracking-wide rounded-lg ${darkMode ? ' text-white bg-rounded bg-yellow-500' : 'bg-gray-600 text-gray-100'
                }`}
                style={{ fontFamily: 'Space Grotesk' }}>
              UNLOCK A NEW LEVEL OF
            </div>
          </>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-[9rem] font-bebas leading-tight tracking-[-0.04em]">
            <strong className={`${darkMode ? 'text-white' : 'text-black'} font-extrablack`}> PERFORMANCE</strong>
          </h1>
          {/* <h2 className={`text-4xl md:text-6xl font-bebas ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <strong>IS A TEAM SPORT <span className="text-light-green">™</span></strong>
          </h2> */}

          {/* Subheading */}
          <p className={`text-lg md:text-2xl mt-4 max-w-2xl mx-auto ${darkMode ? 'text-gray-200' : 'text-gray-950'
            }`}>
            India’s first integrated sports medicine & rehab center— enhancing performance, speeding recovery, and preventing injuries.


          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center flex-col md:flex-row gap-4 animate-fade-in-up mt-10">

            <button
              onClick={() => setShowModal(true)}
              className={`border-2 px-8 py-3 rounded-lg text-3xl font-semibold transition flex items-center justify-center gap-2 ${darkMode
                  ? 'bg-dark-green text-white border-white hover:text-green-800 hover:bg-white'
                  : 'bg-green-600 text-white border-green-950 hover:bg-green-700'
                }`}
            >
             <CalendarCheck className="w-8 h-8" />
              Book an Appointment
            </button>

           
          </div>
        </div>
        <AppointmentModal show={showModal} onClose={() => setShowModal(false)} />
      </section>
    </>
  );
}
