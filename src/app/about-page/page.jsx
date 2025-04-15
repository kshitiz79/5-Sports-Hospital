'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';
import { Space_Grotesk } from 'next/font/google';

import { Mail, Phone, MapPin } from 'lucide-react';


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

export default function AboutUs() {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-space-grotesk transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } ${spaceGrotesk.variable}`}
    >
      <div className="max-w-10px mx-auto relative z-10">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 tracking-tight bg-clip-text text-transparent bg-white"
        >
          About Us
        </motion.h1>

        {/* 5 Sports Hospital Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-semibold mb-6 text-green-600 dark:text-green-400"
          >
            5 Sports Hospital
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300"
          >
            At 5 Sports, we redefine sports medicine with a focus on unlocking athletic potential. Our team, with over 18 years of expertise, delivers innovative diagnostics, rapid recovery protocols, and personalized injury prevention strategies.
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { title: 'Real Expertise', desc: 'Decades of sports science experience.' },
              { title: 'Advanced Equipment', desc: 'Cutting-edge tools for precise assessments.' },
              { title: 'Personalized Care', desc: 'Tailored programs for your goals.' },
              { title: 'Innovative Medicine', desc: 'V2 Max and muscle function testing.' },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-green-500 text-2xl">●</span>
                <div>
                  <strong className="text-green-600 dark:text-green-400 text-xl sm:text-2xl">{item.title}</strong>
                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">{item.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-gray-700 dark:text-gray-300"
          >
            Partner with us to achieve peak performance through world-class care.
          </motion.p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-semibold mb-6 text-green-600 dark:text-green-400"
          >
            Our Founders
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300"
          >
            Dr. Nataraj H M and Dr. Pooja Rai are pioneers transforming sports medicine and postural care with global recognition.
          </motion.p>

          {/* Founder 1 */}
          <motion.div
            variants={itemVariants}
            className="mb-10 p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Dr. Nataraj H M – Orthopaedic Visionary
            </h3>
            <ul className="space-y-4">
              {[
                'Excellence in Orthopaedic Surgery (2022) – Awarded by Ms. Mrunal Thakur.',
                'Excellence in Orthopaedics & Robotic Surgery (2023) – Recognized by Health Minister Sri Dinesh Gundurao.',
                'International training in Robotic Surgery (Singapore) and Shoulder Surgery (South Korea).',
                'Specializes in knee & shoulder surgeries, robotic knee replacements, and sports injuries.',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 text-lg">➔</span>
                  <span className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Founder 2 */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-green-600 dark:text-green-400">
              Dr. Pooja Rai – India’s Leading Posture Expert
            </h3>
            <ul className="space-y-4">
              {[
                'Founder of Posture Clinic (2016) – India’s first specialized Posture Clinic.',
                'Founder of Stance Active (2019) – India’s first Injury Prevention Studio.',
                'Trusted by over 1 Lakh Indians for posture correction and musculoskeletal health.',
                'Runs awareness campaigns with corporates on posture and injury prevention.',
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 text-lg">➔</span>
                  <span className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-gray-700 dark:text-gray-300"
          >
            Our founders’ vision drives the future of sports medicine with excellence and innovation.
          </motion.p>
        </motion.div>
      </div>
      <div className="container mx-auto max-w-4xl mt-10"> 
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative inline-block px-3 py-2">
            <span className={`absolute inset-0 ${darkMode ? '' : 'bg-green-500'} w-full h-full rounded-lg skew-y-1`}></span>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Get in Touch</strong> 
            </h2>
          </div>
          <p  className={`text-3xl md:font-size-1.5rem mx-auto mt-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Have questions? Reach out to us! We're here to help you.
          </p>
        </motion.div>

        {/* Contact Form & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`border rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 w-full ${
              darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
            }`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-500' : 'text-green-700'}`}>
              Send us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full border p-3 rounded-md outline-none transition ${
                  darkMode ? 'bg-white/10 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-400 focus:border-green-500'
                }`}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full border p-3 rounded-md outline-none transition ${
                  darkMode ? 'bg-white/10 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-400 focus:border-green-500'
                }`}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className={`w-full border p-3 rounded-md outline-none transition ${
                  darkMode ? 'bg-white/10 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-400 focus:border-green-500'
                }`}
                required
              ></textarea>
              <button
                type="submit"
                className={`w-full font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-md ${
                  darkMode
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-500' : 'text-green-700'}`}>
              Contact Details
            </h3>
            <p className={`mb-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Our support team is available for queries and appointments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>9353555855</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>fivesportshospital@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className={`w-12 h-12 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Site No 40 & 41, 1st floor MPS Building, Ambedkar Nagar Mullur Sarjapur Road, Carmelram Bangalore, Karnataka - 560035 IN</p>
              </div>

              {/* Google Maps */}
              <div className="mt-6 w-full">
                <iframe
                  title="Google Maps Location"
                  className="w-full h-40 sm:h-48 md:h-56 rounded-xl shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799132815!2d-74.25986715568886!3d40.69767006778708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18fbbfbd%3A0x8c0b2a7d0b7b3c02!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629289997811!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}