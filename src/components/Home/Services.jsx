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
  { icon: <HeartPulse className="w-8 h-8" />, title: 'Sports & Exercise Medicine', desc: 'Comprehensive care for athletic performance and injury prevention' },
  { icon: <Bone className="w-8 h-8" />, title: 'Orthopedics', desc: 'Advanced surgical and non-surgical bone/joint treatments' },
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Physiotherapy & Rehabilitation', desc: 'Customized recovery programs for optimal results' },
  { icon: <Microscope className="w-8 h-8" />, title: 'Sports Science & Research', desc: 'Evidence-based performance optimization strategies' },
  { icon: <Utensils className="w-8 h-8" />, title: 'Sports Nutrition', desc: 'Personalized diet plans for peak performance' },
  { icon: <Activity className="w-8 h-8" />, title: 'Exercise Physiology', desc: 'Biomechanical analysis and conditioning programs' },
  { icon: <Brain className="w-8 h-8" />, title: 'Sports Psychology', desc: 'Mental toughness training and performance coaching' },
  { icon: <Armchair className="w-8 h-8" />, title: 'Sports Massage Therapy', desc: 'Enhanced recovery through specialized techniques' },
  { icon: <X className="w-8 h-8" />, title: 'Sports Radiology', desc: 'Advanced imaging for accurate diagnosis' },
  { icon: <Scissors className="w-8 h-8" />, title: 'Sports Cosmetology', desc: 'Scar management and aesthetic treatments' },
  { icon: <ToothIcon className="w-8 h-8" />, title: 'Sports Dentistry', desc: 'Oral health solutions for athletic needs' },
  { icon: <HeartPulse className="w-8 h-8" />, title: 'Sports & Exercise Medicine', desc: 'Comprehensive care for athletic performance and injury prevention' },
  { icon: <Bone className="w-8 h-8" />, title: 'Orthopedics', desc: 'Advanced surgical and non-surgical bone/joint treatments' },
  
  
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
    <section ref={sectionRef} className="relative min-h-[200vh] bg-black text-white rounded-[20rem]">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Specialized Services</h2>
            <p className="max-w-2xl mx-auto">Comprehensive sports medicine solutions backed by cutting-edge technology and expert care</p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div ref={containerRef} className="relative w-full overflow-hidden">
            <motion.div style={{ x: smoothX }} className="flex space-x-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group relative bg-gray-900 rounded-xl shadow-lg p-8 min-w-[300px] max-w-[300px] transition-all duration-300 ease-out overflow-hidden flex-shrink-0"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-900 group-hover:bg-green-600 transition-colors duration-300 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.desc}</p>
                  <Link href="#" className="inline-flex items-center text-light-green hover:text-dark-green font-medium transition-colors">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
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
