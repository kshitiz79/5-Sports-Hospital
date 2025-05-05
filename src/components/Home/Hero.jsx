'use client';

import React from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

// Mock ThemeContext
const useTheme = () => ({ darkMode: true });

const directions = [
  { x: -50, y: 0 }, 
  { x: 50, y: 0 }, 
  { x: 0, y: -50 },
  { x: 0, y: 50 }, 
];

const getRandomDirection = () => {
  return directions[Math.floor(Math.random() * directions.length)];
};

const Letter = ({ char, darkMode }) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    const direction = getRandomDirection();
    controls.start({
      x: [direction.x, 0],
      y: [direction.y, 0],
      opacity: [0, 1],
      transition: { duration: 0.3, ease: 'easeOut' },
    });
  };

  return (
    <motion.span
      className={`inline-block ${
        darkMode ? 'text-white' : 'text-black'
      } font-extrabold`}
      onHoverStart={handleHoverStart}
      animate={controls}
      initial={{ opacity: 1, x: 0, y: 0 }}
    >
      {char}
    </motion.span>
  );
};

const AnimatedText = ({ text, darkMode }) => {
  return (
    <h1 className="text-5xl md:text-[4rem] font-bold leading-tight tracking-[-0.04em] uppercase">
      <strong>
        {text.split('').map((char, index) => (
          <Letter key={index} char={char} darkMode={darkMode} />
        ))}
      </strong>
    </h1>
  );
};

const HeroPage = () => {
  const { darkMode } = useTheme();
  const { scrollYProgress } = useScroll();

  // Video transformations
  const width = useTransform(scrollYProgress, [0, 0.3], ['18rem', '100vw']);
  const height = useTransform(scrollYProgress, [0, 0.3], ['19rem', '100vh']);

  const x = useTransform(scrollYProgress, [0, 0.3], ['40rem', '0rem']);
  const y = useTransform(scrollYProgress, [0, 0.2], ['-18rem', '0rem']);
  const rotate = useTransform(scrollYProgress, [0, 0.3], ['-12deg', '0deg']);

  const handleBookAppointment = () => {
    window.location.href = 'https://kivihealth.com/clinic/fives-sport-hospital-';
  };

  return (
    <section
      style={{ fontFamily: 'Space Grotesk' }}
      className={`relative w-screen  min-h-[150vh]  overflow-x-hidden ${spaceGrotesk.variable} ${
        darkMode ? 'bg-black text-white' :   ' bg-black text-gray-900'
      } transition-colors duration-500`}
    >
      {/* "5 SPORTS HOSPITAL" Text */}
      <div className="flex items-center h-[50vh] justify-center text-[6rem] z-10 font-extrabold ">
        <span className="mx-9">INDIA'S</span>
        <span className="relative z-20">1st</span>
        <span className="mx-6">            EVER           





            
        </span>
        <span className="relative z-20 mx-2">HEALTH</span>
      </div>

      {/* Animated Video Background */}
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-[100vh] object-cover"
        style={{
          width,
          height,
          rotate,
          x,
          y,
 
          zIndex: 5,

        }}
      >
        <source src="/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Overlay */}


      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-screen text-center px-4 " >
      <div
        className={`absolute inset-0 ${
          darkMode ? 'bg-black bg-opacity-40' : 'bg-gray-600 bg-opacity-50'
        } -z-20`}
      ></div>
        <div>
          {/* Top Tagline */}
          <div
            className={`inline-block px-4 py-2 text-xs md:text-xl mb-3 font-bold tracking-wide rounded-lg ${
              darkMode ? 'bg-green-700 text-white' : 'bg-green-600 text-gray-100'
            }`}
          >
            Athlete Recovery & Sports Performance Enhancement
          </div>
          <br />
          <div
            className={`inline-block px-4 py-2 text-xs md:text-4xl mb-3 font-bold tracking-wide rounded-lg ${
              darkMode
                ? 'text-white bg-yellow-500'
                : 'bg-gray-600 text-gray-100'
            }`}
            style={{ fontFamily: 'Space Grotesk' }}
          >
            First time in India 360 Deg Care All under one roof.
          </div>

          {/* Main Heading with Animated Text */}
          <AnimatedText text="Diagnose &nbsp;&nbsp; Test&nbsp; &nbsp;Elevate" darkMode={darkMode} />

          {/* Subheading */}
          <p
            className={`text-lg md:text-2xl mt-4 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-200' : 'text-gray-950'
            }`}
          >
            India’s first integrated sports medicine & rehab center—enhancing
            performance, speeding recovery, and preventing injuries.
          </p>

          {/* Button */}
          <div className="flex items-center justify-center mt-10">
            <button
              onClick={handleBookAppointment}
              className={`border-2 px-8 py-3 rounded-lg text-3xl font-semibold transition flex items-center justify-center gap-2 ${
                darkMode
                  ? 'bg-green-700 text-white border-white hover:text-green-800 hover:bg-white'
                  : 'bg-green-600 text-white border-green-950 hover:bg-green-700'
              }`}
            >
              <CalendarCheck className="w-8 h-8" />
              Book an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Extra Content Space */}
  
    </section>
  );
};

export default HeroPage;