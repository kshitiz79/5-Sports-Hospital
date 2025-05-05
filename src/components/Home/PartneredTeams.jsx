'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const AthleteTruthSection = () => {
  const { darkMode } = useTheme(); // Get Theme State

  const truths = [
    {
      icon: './mango1.png',
      hoverIcon: './mango1-hover.png',
      title: 'It’s Not Just About Skills',
      desc: 'Without building strength, speed & you fall behind.',
      userImages: [
        '/1.png', 
        '/2.png', 
        '/3.png', 
      ],
    },
    {
      icon: './mango2.png',
      hoverIcon: './mango2-hover.png',
      title: 'Neglecting Recovery Makes You Slower',
      desc: 'Skipping recovery today leads to weakness, injuries, and reduced performance tomorrow.',
      userImages: [
        '/1.png',
        '/2.png',
        '/3.png',
      ],
    },
    {
      icon: './mango3.png',
      hoverIcon: './mango3-hover.png',
      title: 'Test your Performance Regularly',
      desc: 'Regularly texting your Heart & Lung performance like Vo2Max, Blood & Muscle Endurance helps you stay on top.',
      userImages: [
        '/1.png',
        '/2.png',
        '/3.png',
      ],
    },
  ];

  // Define animation directions for the three user images
  const userImageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (direction) => ({
      opacity: 1,
      scale: 1,
      x: direction === 'left' ? -170 : direction === 'right' ? 100 : -50,
      y: direction === 'up' ? -120 : -70   ,
      transition: { duration: 0.2, ease: 'easeOut' },
    }),
  };

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-black via-black to-gray-800 text-white'
          : 'bg-gray-100 text-gray-900'
      } relative`}
    >
      <div className="container mx-auto px-6 mt-20 md:mt-0">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block md:px-4 md:py-3 px-2 py-1">
            <span
              className={`absolute inset-0 ${
                darkMode ? '' : 'bg-green-500'
              } w-full h-full rounded-lg skew-y-1`}
            ></span>
            <h2 className="text-2xl md:text-5xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>The Truth Athletes Deserve</strong>
            </h2>
          </div>

          <p
            className={`mt-5 font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } text-3xl sm:front-size:1.5rem`}
          >
            Why are <span className='text-green-600'>athletes</span> not told these facts?
          </p>
        </motion.div>

        {/* Truth Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-4"
        >
          {truths.map((truth, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`cursor-pointer backdrop-blur-md border rounded-xl p-6 text-center transition-transform duration-300 hover:scale-95 hover:shadow-xl ${
                  darkMode
                    ? 'bg-white/10 border-gray-100'
                    : 'bg-white border-gray-300'
                } relative`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Static Icon (does not move or change) */}
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img
                    src={isHovered ? truth.hoverIcon : truth.icon}
                    alt={truth.title}
                    className="w-20 h-20 object-contain transition-all duration-300"
                  />
                  {/* User Images that pop out on hover */}
                  {truth.userImages.map((userImage, idx) => (
                    <motion.img
                      key={idx}
                      src={userImage}
                      alt={`User ${idx + 1}`}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full object-cover"
                      initial="hidden"
                      animate={isHovered ? 'visible' : 'hidden'}
                      variants={userImageVariants}
                      custom={
                        idx === 0 ? 'left' : idx === 1 ? 'right' : 'up'
                      }
                    />
                  ))}
                </div>
                <h3
                  className={`text-lg font-bold mb-2 uppercase ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {truth.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {truth.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AthleteTruthSection;