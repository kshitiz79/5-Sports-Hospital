'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook
import { FaCheckCircle, FaPhone } from 'react-icons/fa';
export default function AboutUs() {
  const { darkMode } = useTheme(); // Get Dark Mode State

  return (
    <section className={`relative sticky -top-32 transition-colors duration-500  overflow-hidden py-10 mb-10 ${
      darkMode ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-2">
            {/* Brushstroke Background */}
            <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-2 -z-10 ${
              darkMode ? '' : 'bg-yellow-500'
            }`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-2xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>About Us</strong>
            </h2>
          </div>

          <p className={`text-3xl md:text-1.5rem mx-auto mt-4 font-1.5rem ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Learn more about our mission
            <br /> to redefine <span className='text-green-500'>sports medicine</span> and <span className='text-green-500'>athlete care</span>.
          </p>
        </motion.div>

       
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2">
      <div className="bg-black h-[600px] flex items-center justify-center">
        <img
          src="/3.png"
          alt="jdj"
          className=""
        />
      </div>
      <div className="absolute top-4 left-4 bg-yellow-500 text-black px-6 py-2 font-bold text-lg">
        <span className="text-3xl">20+</span>
        <p className="text-sm">Training Programs</p>
      </div>
      <div className="absolute bottom-0 left-0 bg-green-500 w-full p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FaPhone className="text-black text-2xl" />
          <div>
            <p className="text-black font-bold">CALL US ANYTIME</p>
            <p className="font-bold italic text-black">9353555755</p>
          </div>
        </div>
      </div>
    </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-green-500 font-bold">ABOUT US</p>
          <h2 className="text-5xl font-black leading-tight">
            PIONEERING SPORTS MEDICINE <br /> FOR ATHLETES 
          </h2>
          <p className="text-gray-400 mt-4">
            Founded in 2024, 5 Sports Hospital has become a beacon of excellence in sports medicine and orthopedic care. Our visionary founder, DR POOJA JHADE and DR NATARAJ H M established a center that combines cutting-edge medical technology with personalized care, dedicated to helping athletes achieve peak performance.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>360 degree care for orthopedics and sports Atheletes all under one roof.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>State-of-the-art facilities and advanced diagnostic imaging.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Personalized treatment plans designed for athletes at all levels (beginners,semipro-atheletes and pro-atheletes).</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <span>Age-specific treatment plans from childhood (5+) to peak performance years.</span>
            </li>
          </ul>
          <button className="mt-6 bg-green-500 text-black font-bold py-3 px-6 text-lg">
            LEARN MORE
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
