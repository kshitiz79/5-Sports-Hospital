'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';

export default function RecoverySystem() {
  const { darkMode } = useTheme();

  return (
    <section
    
      className={`relative  transition-colors duration-500 py-16 ${
        darkMode ? 'bg-gradient-to-b from-gray-800 to-black text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      {/* Sticky Section */}
      <div className="sticky top-0 flex flex-col justify-center items-center z-10 px-6 w-full space-y-10  container mx-auto">






      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-2">
            {/* Brushstroke Background */}
            <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 -z-10 ${
              darkMode ? 'bg-green-600' : 'bg-green-500'
            }`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-2xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Healing Being Transformed</strong>
            </h2>
          </div>

          <p className={`max-w-2xl mx-auto mt-5 uppercase font-semibold ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
Elite recovery methods are being made accessible to all—enabling faster healing and peak performance.
          </p>
        </motion.div>










        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Left */}
          <div className="w-full md:w-1/2">
            <img src="/news1.jpg" alt="Recovery System" className="w-full rounded-xl shadow-lg" />
          </div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl uppercase font-extrabold mb-6">
              The Game-Changing Recovery System That Brings Athletes Back Stronger Than Ever
            </h2>
            <p className="mb-4">
              For years, the secrets of elite recovery and rehabilitation have been confined to professional sports
              circles. As an athlete, you’ve been left with generalized treatments or ineffective solutions. Until now.
            </p>
            <p>
              5 Sports Hospital’s Recovery System brings high-performance recovery to every athlete—regardless of
              sport—so you can recover faster, train harder, and perform at your peak.
            </p>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Image Right */}
          <div className="w-full md:w-1/2">
            <img src="/news2.png" alt="Why Recovery Matters" className="w-full rounded-xl shadow-lg skew-y-1 " />
          </div>

          {/* Text Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase">Here’s the Real Problem with Recovery Today:</h3>
            <p className="mb-3">
              Standard recovery methods don’t work for everyone. Generic programs, trendy techniques, and lack of
              personalized care result in re-injury and poor performance.
            </p>
            <h4 className="text-xl font-semibold mb-2">Why Does This Matter?</h4>
            <p className="mb-3">
              Unless you're part of an elite system, you're often left guessing. That guesswork leads to missed
              opportunities and chronic injury.
            </p>
            <h4 className="text-xl font-semibold mb-2">The Solution</h4>
            <p>
              5 Sports Hospital’s integrated system blends modern medical tech with personal rehab strategies—giving you
              the pro-level edge to return better than ever.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
