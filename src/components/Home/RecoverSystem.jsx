'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';

export default function RecoverySystem() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative transition-colors duration-500 py-16 ${darkMode ? 'bg-gradient-to-b from-gray-800 to-black text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      {/* Sticky Section */}
      <div className="sticky top-0 flex flex-col justify-center items-center z-10 px-6 w-full space-y-10 container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-2">
            {/* Brushstroke Background */}
            <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 -z-10 ${darkMode ? '' : 'bg-green-500'}`}></span>
            {/* Text with Shadow */}
            <h2 className="text-2xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Healing Being Transformed</strong>
            </h2>
          </div>

          <p className={`text-3xl md:text-1.5rem mx-auto mt-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Elite recovery methods are being made accessible to
            <br />all—<span className='text-green-500'> enabling faster healing </span>and <span className='text-green-500'>peak performance</span>.
          </p>
        </motion.div>

        {/* Therapy Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {/* TECAR Therapy */}
          <div className="text-center">
            <img src="/therapy1.png" alt="TECAR Therapy" className="w-full rounded-xl shadow-lg mb-4" />
            <h3 className="text-2xl font-extrabold text-yellow-500">TECAR THERAPY</h3>
            <p className="mt-2 text-lg">A revolutionary treatment that enhances tissue repair, reducing pain and accelerating healing through deep heat energy.</p>
          </div>

          {/* Laser Therapy */}
          <div className="text-center">
            <img src="/laser.jpg" alt="Laser Therapy" className="w-full rounded-xl shadow-lg mb-4" />
            <h3 className="text-2xl font-extrabold text-yellow-500">LASER THERAPY</h3>
            <p className="mt-2 text-lg">A non-invasive technique that promotes tissue regeneration, reduces inflammation, and speeds up recovery from injuries.</p>
          </div>

          {/* Shockwave Therapy */}
          <div className="text-center">
            <img src="/therapy3.png" alt="Shockwave Therapy" className="w-full rounded-xl shadow-lg mb-4" />
            <h3 className="text-2xl font-extrabold text-yellow-500">SHOCKWAVE THERAPY</h3>
            <p className="mt-2 text-lg">Uses high-energy sound waves to treat musculoskeletal pain, improve blood flow, and stimulate healing in damaged tissues.</p>
          </div>
        </div>

        {/* Vald Test & Machines */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-yellow-500 mb-6">Proud Partners with Vald Test</h2>
            <p className="text-lg mb-4">
              At 5 Sports Hospital, we use advanced testing technologies from Vald Test, ensuring precise diagnostics and optimized treatment plans for every athlete.
            </p>
            <img src="/vald.jpg" alt="Vald Test" className="mx-auto my-6 h-80 w-96" />
            <h3 className="text-xl font-semibold text-yellow-500">Advanced Machines for Testing</h3>
            <p className="text-lg mt-2">
              Our state-of-the-art testing equipment helps us assess performance, strength, and recovery in real-time, allowing us to deliver the most effective rehab solutions.
            </p>
          </motion.div>
        </div>

        {/* Firm Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-yellow-500 mb-6">Partnered with a Leading Firm</h2>
            <p className="text-lg mb-4">
              5 Sports Hospital proudly uses machines and recovery technology from a renowned US-based firm, ensuring world-class treatment for all athletes.
            </p>
            <img src="/test1.png" alt="Firm Logo" className="mx-auto my-6" />
            <p className="text-lg mt-2">
              By combining cutting-edge technology with expert care, we empower athletes to reach their fullest potential in record time.
            </p>
          </motion.div>
        </div>

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
            <h2 className="text-3xl md:text-4xl uppercase font-extrabold mb-6 text-yellow-500">
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
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-yellow-500">Here’s the Real Problem with Recovery Today:</h3>
            <p className="mb-3">
              Standard recovery methods don’t work for everyone. Generic programs, trendy techniques, and lack of
              personalized care result in re-injury and poor performance.
            </p>
            <h4 className="text-xl font-semibold mb-2">
              <span className="text-yellow-500">➔</span> Why Does This Matter?
            </h4>
            <p className="mb-3">
              Unless you're part of an elite system, you're often left guessing. That guesswork leads to missed
              opportunities and chronic injury.
            </p>
            <h4 className="text-xl font-semibold mb-2">
              <span className="text-yellow-500">➔</span> The Solution
            </h4>
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
