'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Link from 'next/link';
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
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Sports Physiotherapy', desc: 'Recovery programs tailored for peak performance.' },
  { icon: <Microscope className="w-8 h-8" />, title: 'Sports Science', desc: 'Research-backed strategies for performance gains.' },
  { icon: <Utensils className="w-8 h-8" />, title: 'Sports Nutrition', desc: 'Customized diet plans for athlete performance.' },
  { icon: <Activity className="w-8 h-8" />, title: 'Exercise Physiology', desc: 'Biomechanical analysis and strength training.' },
  { icon: <Brain className="w-8 h-8" />, title: 'Sports Psychology', desc: 'Mindset training for mental toughness and may more.' },
  { icon: <Armchair className="w-8 h-8" />, title: 'Massage Therapy', desc: 'Specialized recovery for faster healing and many more.' },
  { icon: <X className="w-8 h-8" />, title: 'Sports Radiology', desc: 'Advanced imaging for precise diagnostics and many more.' },
  { icon: <Scissors className="w-8 h-8" />, title: 'Sports Cosmetology', desc: 'Scar care and aesthetic treatments and many more.' },
  { icon: <ToothIcon className="w-8 h-8" />, title: 'Sports Dentistry', desc: 'Oral health solutions for active lifestyles.' },
  { icon: <HeartPulse className="w-8 h-8" />, title: 'Athlete Medicine', desc: 'Comprehensive care for peak condition.' },
  { icon: <Bone className="w-8 h-8" />, title: 'Joint & Bone Care', desc: 'Orthopedic treatments to enhance mobility.' },
  { icon: <HeartPulse className="w-8 h-8" />, title: 'Sports Medicine', desc: 'Expert care for athletes and injury prevention.' },
  { icon: <Bone className="w-8 h-8" />, title: 'Orthopedic Care', desc: 'Bone and joint treatments, surgical and non-surgical.' },
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Physiotherapy', desc: 'Recovery programs tailored for peak performance.' },
  { icon: <Microscope className="w-8 h-8" />, title: 'Sports Science', desc: 'Research-backed strategies for performance gains.' },
  { icon: <Utensils className="w-8 h-8" />, title: 'Sports Nutrition', desc: 'Customized diet plans for athlete performance.' },
  { icon: <Activity className="w-8 h-8" />, title: 'Exercise Physiology', desc: 'Biomechanical analysis and strength training.' },
  { icon: <Brain className="w-8 h-8" />, title: 'Sports Psychology', desc: 'Mindset training for mental toughness and may more.' },
  { icon: <Microscope className="w-8 h-8" />, title: 'Sports Science', desc: 'Research-backed strategies for performance gains.' },
  { icon: <Utensils className="w-8 h-8" />, title: 'Sports Nutrition', desc: 'Customized diet plans for athlete performance.' },
  { icon: <Activity className="w-8 h-8" />, title: 'Exercise Physiology', desc: 'Biomechanical analysis and strength training.' },
  { icon: <Brain className="w-8 h-8" />, title: 'Sports Psychology', desc: 'Mindset training for mental toughness and may more.' },
];


export default function Services() {
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
  const smoothX = useSpring(x, { stiffness: 100, damping:70 });

  return (
    <section ref={sectionRef} className="relative min-h-[290vh]  bg-black text-white rounded-[20rem]">
      {/* Sticky Section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center bg-black z-10 rounded-3xl ">
        <div className="px-6 w-full">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block px-4 py-3 mt-20">
  {/* Brushstroke Background */}
  <span className="absolute inset-0 bg-green-700 w-full h-full rounded-lg skew-y-1 "></span>
  
  {/* Text with Shadow */}
  <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase drop-shadow-[5px_5px_0px_rgba(0,0,0,0.2)]">
   <strong>Our Specialized Services </strong> 
  </h2>
</div>
            <p className="max-w-2xl mx-auto mt-5 uppercase font-extrabold">Comprehensive sports medicine solutions backed by cutting-edge technology and expert care</p>
          </motion.div>

          <div ref={containerRef} className="relative w-full overflow-hidden">
      <motion.div style={{ x: smoothX }} className="flex space-x-8">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="group relative bg-gray-900 rounded-xl shadow-lg p-8 min-w-[430px] max-w-[430px] min-h-[550px] max-h-[550px] transition-all duration-300 ease-out overflow-hidden flex flex-col items-center text-center"
          >
            {/* Fixed Icon Container */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full bg-green-900 group-hover:bg-green-600 transition-colors duration-300 flex items-center justify-center shadow-md">
              {service.icon}
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center justify-between flex-1 mt-36 px-4">
               <h3 className="text-5xl font-bebas font-extrabold uppercase text-white leading-tight"><strong>{service.title}</strong> </h3>
              <p className="text-gray-400 uppercase mt-4 mb-20">{service.desc}</p>
            </div>

            {/* Fixed "Learn More" Button for Consistency */}
            <div className="w-full flex justify-center pb-5">
              <button className="px-6 py-3 uppercase bg-green-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-green-800 transition duration-300">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>

        </div>
      </div>

      {/* Next Section Moves Over */}
      <div className="relative bg-gray-800 text-white p-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Next Section</h2>
        <p>This section scrolls over the services section once all cards are visible.</p>
      </div>
    </section>
  );
}
