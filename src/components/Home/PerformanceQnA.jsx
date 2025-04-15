'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';

const qaData = [
  {
    question: 'How can you improve athletic health performance?',
    answer:
      'Athletic health performance is enhanced when consistent, science-based training protocols are followed, and adequate recovery is provided.',
    image: './mmm3.png',
    hoverImage: './mmm1-hover.png',
  },
  {
    question: 'How can you optimize muscle performance?',
    answer:
      'Muscle performance is maximized by incorporating progressive overload techniques, ensuring balanced nutrition, and prioritizing structured rest intervals.',
    image: './mmm2.png',
    hoverImage: './mmm2-hover.png',
  },
  {
    question: 'How can you maintain overall body resilience?',
    answer:
      'Overall body resilience is sustained by combining functional training with regular mobility work, while proactive injury prevention methods are practiced.',
    image: './mmm1.png',
    hoverImage: './mmm3-hover.png',
  },
];

export default function PerformanceQnA() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-10 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-800 via-black to-black text-white'
          : 'bg-gray-100 text-gray-900'
      } relative`}
    >
      <div className="container mx-auto px-6 md:mt-0">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3 mb-4">
            <span
              className={`absolute inset-0 w-full h-full rounded-lg ${
                darkMode ? '' : 'bg-green-500'
              }`}
            ></span>
            <h2 className="text-xl md:text-5xl font-extrabold uppercase drop-shadow-lg relative">
              Unlock Your Potential
            </h2>
          </div>
          <p
            className={`max-w-2xl mx-auto text-3xl md:text-1.5rem font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <span className='text-green-600'>
            Empower 
            </span> your game with
            <br /> insights provided
          </p>
        </motion.div>

        {/* Q&A Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {qaData.map((item, i) => {
            const [isHovered, setIsHovered] = useState(false);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`p-6 rounded-2xl bg-black shadow-md duration-300 transition-all ${
                  darkMode ? 'border-gray-100' : 'border-gray-300'
                } shadow-green-400 hover:shadow-yellow-400`}
              >
                {/* Image that changes on hover */}
                <div className="flex justify-center mb-4">
                  <img
                    src={isHovered ? item.hoverImage : item.image}
                    alt={item.question}
                    className="w-20 h-20 rounded-full object-cover transition-transform duration-300"
                  />
                </div>

                {/* Question */}
                <h3
                  className={`text-center text-lg md:text-xl font-bold uppercase mb-4 ${
                    darkMode ? 'text-green-400' : 'text-green-700'
                  }`}
                >
                  {item.question}
                </h3>

                {/* Answer */}
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  {item.answer}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
