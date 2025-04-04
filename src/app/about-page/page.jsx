'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';

export default function AboutUs() {
  const { darkMode } = useTheme();

  // Animation variants for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className={`min-h-screen py-16 px-6 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-16 uppercase tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          About Us
        </motion.h1>

        {/* 5 Sports Hospital Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="w-full px-8 py-5 font-bold text-xl bg-gradient-to-r from-green-500 to-green-600 text-white uppercase tracking-wide">
            5 Sports Hospital
          </div>
          <motion.div variants={itemVariants} className="p-8">
            <p className="mb-6 text-lg leading-relaxed">
              At 5 Sports, we’re not your typical sports clinic. Our team of passionate, highly skilled doctors—with over 18 years of experience in sports medicine—pushes the boundaries of athletic performance. We focus on empowering athletes to reach their peak potential, recover faster, and prevent injuries through cutting-edge diagnostics and personalized care.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0">
              {[
                { title: 'Real Expertise', desc: 'Decades of sports science experience back every test, diagnosis, and treatment.' },
                { title: 'State-of-the-Art Equipment', desc: 'Twenty advanced machines assess muscle power, blood tests, and more.' },
                { title: 'Personalized Care', desc: 'Custom programs tailored to your needs, goals, and challenges.' },
                { title: 'Innovation in Medicine', desc: 'V2 Max testing, muscle assessments, and organ function tests for optimal health.' },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
                >
                  <span className="text-green-500">●</span>
                  <div>
                    <strong className="text-green-500">{item.title}:</strong> <span className="text-black">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-lg">
              At 5 Sports, we’re your partner in success—where expertise meets advanced diagnostics for peak performance.
            </p>
          </motion.div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="w-full px-8 py-5 font-bold text-xl bg-gradient-to-r from-green-500 to-green-600 text-white uppercase tracking-wide">
            Our Founders
          </div>
          <motion.div variants={itemVariants} className="p-8">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Trailblazers in Orthopaedic and Posture Care
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Excellence in sports medicine and postural rehabilitation is led by our founders, Dr. Nataraj H M and Dr. Pooja Rai. Their dedication has built a globally recognized legacy.
            </p>

            {/* Founder 1 */}
            <motion.div whileHover={{ x: 10 }} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-green-500">
                Dr. Nataraj H M – Orthopaedic Visionary
              </h3>
              <ul className="space-y-3 pl-0">
                {[
                  'Excellence in Orthopaedic Surgery (2022) – Awarded by Ms. Mrunal Thakur.',
                  'Excellence in Orthopaedics & Robotic Surgery (2023) – Recognized by Health Minister Sri Dinesh Gundurao.',
                  'International training in Robotic Surgery (Singapore) and Shoulder Surgery (South Korea).',
                  'Specializes in knee & shoulder surgeries, robotic knee replacements, and sports injuries.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500">➔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Founder 2 */}
            <motion.div whileHover={{ x: 10 }}>
              <h3 className="text-2xl font-semibold mb-4 text-green-500">
                Dr. Pooja Rai – India’s Leading Posture Expert
              </h3>
              <ul className="space-y-3 pl-0">
                {[
                  'Founder of Posture Clinic (2016) – India’s first specialized Posture Clinic.',
                  'Founder of Stance Active (2019) – India’s first Injury Prevention Studio.',
                  'Trusted by over 1 Lakh Indians for posture correction and musculoskeletal health.',
                  'Runs awareness campaigns with corporates on posture and injury prevention.',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-green-500">➔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <p className="mt-6 text-lg">
              Our founders’ pioneering work and global collaborations have earned them international acclaim.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}