'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook
import { HeartPulse, Bone, Dumbbell, Microscope, Utensils, Activity, Brain, Armchair, X, Scissors } from 'lucide-react';

// Custom Tooth Icon
const ToothIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C7.03 2 4 5.53 4 9.9c0 4.37 2.08 6.26 3.26 9.43.45 1.23 1.46 3.42 2.74 3.42 1.09 0 1.68-1.26 2-2.34.32 1.08.91 2.34 2 2.34 1.28 0 2.29-2.19 2.74-3.42C17.92 16.16 20 14.27 20 9.9 20 5.53 16.97 2 12 2z"/>
  </svg>
);

const services = [
  { icon: <HeartPulse className="w-8 h-8" />, title: 'Sports Medicine', desc: 'Expert care for athletes and injury prevention.' },
  { icon: <Bone className="w-8 h-8" />, title: 'Orthopedic Care', desc: 'Bone and joint treatments, surgical and non-surgical.' },
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Physiotherapy', desc: 'Recovery programs tailored for peak performance.' },
  { icon: <Microscope className="w-8 h-8" />, title: 'Sports Science', desc: 'Research-backed strategies for performance gains.' },
  { icon: <Utensils className="w-8 h-8" />, title: 'Sports Nutrition', desc: 'Customized diet plans for athlete performance.' },
  { icon: <Activity className="w-8 h-8" />, title: 'Exercise Physiology', desc: 'Biomechanical analysis and strength training.' },
  { icon: <Brain className="w-8 h-8" />, title: 'Sports Psychology', desc: 'Mindset training for mental toughness.' },
  { icon: <Armchair className="w-8 h-8" />, title: 'Massage Therapy', desc: 'Specialized recovery for faster healing.' },
  { icon: <X className="w-8 h-8" />, title: 'Sports Radiology', desc: 'Advanced imaging for precise diagnostics.' },
  { icon: <Scissors className="w-8 h-8" />, title: 'Sports Cosmetology', desc: 'Scar care and aesthetic treatments.' },
  { icon: <ToothIcon className="w-8 h-8" />, title: 'Sports Dentistry', desc: 'Oral health solutions for active lifestyles.' },
  { icon: <HeartPulse className="w-8 h-8" />, title: 'Sports Medicine', desc: 'Expert care for athletes and injury prevention.' },
  { icon: <Bone className="w-8 h-8" />, title: 'Orthopedic Care', desc: 'Bone and joint treatments, surgical and non-surgical.' },
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Physiotherapy', desc: 'Recovery programs tailored for peak performance.' },
  { icon: <Microscope className="w-8 h-8" />, title: 'Sports Science', desc: 'Research-backed strategies for performance gains.' },
  { icon: <Utensils className="w-8 h-8" />, title: 'Sports Nutrition', desc: 'Customized diet plans for athlete performance.' },
  { icon: <Activity className="w-8 h-8" />, title: 'Exercise Physiology', desc: 'Biomechanical analysis and strength training.' },
  { icon: <Brain className="w-8 h-8" />, title: 'Sports Psychology', desc: 'Mindset training for mental toughness.' },
];

export default function Services() {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Track scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Sticks when reaching the top
  });

  // Total width required for scrolling (number of cards * card width)
  const totalCards = services.length;
  const cardWidth = 320; // Including spacing
  const totalScrollDistance = totalCards * cardWidth;

  // Transform animation: Moves the cards from right to left
  const x = useTransform(scrollYProgress, [0, 1], ["100%", `-${totalScrollDistance}px`]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 70 });

  return (
    <section
      ref={sectionRef}
      className={`relative min-h-[250vh] transition-colors duration-500 ${
        darkMode ? 'bg-gradient-to-b from-gray-800 to-black text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center z-10">
        <div className="px-6 w-full">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block px-4 py-3 mt-10">
              <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
                darkMode ? 'bg-green-600' : 'bg-green-700'
              }`}></span>
              <h2 className="text-2xl md:text-5xl font-extrabold uppercase drop-shadow-lg relative">
                <strong>Our Specialized Services</strong>
              </h2>
            </div>
            <p className={`max-w-2xl mx-auto mt-5 uppercase font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Comprehensive sports medicine solutions backed by cutting-edge technology.
            </p>
          </motion.div>

          {/* Horizontal Scroll Section */}
          <div ref={containerRef} className="relative w-full overflow-x-auto sm:overflow-hidden">
            <motion.div
              style={{ x: smoothX }}
              className="flex space-x-4 sm:space-x-8 px-4 sm:px-0"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group relative rounded-xl shadow-lg p-6 sm:p-8 min-w-[90%] sm:min-w-[450px] max-w-[90%] sm:max-w-[450px] transition-all duration-300 ease-out overflow-hidden flex flex-col items-center text-center ${
                    darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
                  }`}
                >
                  
                  {/* Fixed Icon */}
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 sm:w-28 sm:h-28 rounded-full shadow-md flex items-center justify-center ${
                    darkMode ? 'bg-green-600' : 'bg-green-700'
                  }`}>
                    {service.icon}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col items-center justify-between flex-1 mt-28 sm:mt-36 px-4">
                    <h3 className="text-3xl sm:text-5xl font-bebas font-extrabold uppercase leading-tight">
                      <strong>{service.title}</strong>
                    </h3>
                    <p className={`mt-4 mb-10 sm:mb-20 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{service.desc}</p>
                  </div>

                  {/* Learn More Button */}
                  <button className={`px-4 sm:px-6 py-3 uppercase font-medium rounded-lg transition duration-300 ${
                    darkMode ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-green-700 hover:bg-green-800 text-white'
                  }`}>
                    Learn More
                  </button>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
