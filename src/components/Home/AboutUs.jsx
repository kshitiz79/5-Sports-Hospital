'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

export default function AboutUs() {
  const { darkMode } = useTheme(); // Get Dark Mode State

  return (
    <section className={`relative sticky top-0 transition-colors duration-500  overflow-hidden py-10 ${
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
              darkMode ? 'bg-green-600' : 'bg-green-700'
            }`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-2xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>About Us</strong>
            </h2>
          </div>

          <p className={`max-w-2xl mx-auto mt-4 uppercase font-semibold ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Learn more about our mission to redefine sports medicine and athlete care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mx-auto">
          
          {/* Left Column: Story and Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Story */}
            <p className={`text-lg leading-relaxed text-justify ${
              darkMode ? 'text-gray-300' : 'text-gray-800'
            }`}>
              At <span className={`font-semibold ${
                darkMode ? 'text-green-400' : 'text-green-700'
              }`}>5 Sports Hospital</span>, we are dedicated to revolutionizing sports medicine and rehabilitation. 
              Founded with a vision to provide **world-class care**, we have treated **500+ elite athletes** with a **20-year legacy** of excellence.
            </p>

            {/* Explainer Video */}
            <div className="relative group">
              <video
                className={`w-full rounded-lg shadow-lg border ${
                  darkMode ? 'border-gray-700' : 'border-gray-300'
                }`}
                poster="/about-video-poster.jpg" // Fallback image
                controls
              >
                <source src="/about-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg transition group-hover:bg-opacity-20">
                <Play className="w-14 h-14 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className={`text-3xl font-bold uppercase ${
              darkMode ? 'text-green-400' : 'text-green-700'
            }`}>
              Why Choose Us?
            </h3>
            <ul className="space-y-3">
              {[
                { title: '11 Specialized Sports Medicine Departments', desc: 'Comprehensive care for all your needs.' },
                { title: 'World-Class Rehabilitation Technology', desc: 'Cutting-edge tools for faster recovery.' },
                { title: 'Personalized Care for Every Athlete', desc: 'Tailored treatment plans to meet your goals.' },
                { title: '500+ Successful Injury Recoveries', desc: 'Proven track record of athlete recovery.' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <span className={`text-2xl ${
                    darkMode ? 'text-green-400' : 'text-green-700'
                  }`}>✔️</span>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                    <strong>{item.title}</strong> - {item.desc}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Animated Counters */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { count: "500+", label: "Athletes Treated" },
                { count: "20+", label: "Years of Expertise" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`text-center p-6 rounded-lg shadow-md transition ${
                    darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
                  }`}
                >
                  <h4 className={`text-4xl font-bold ${
                    darkMode ? 'text-green-300' : 'text-green-700'
                  }`}>{stat.count}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'} mt-2`}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
