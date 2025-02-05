'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const features = [
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Trusted by Elite Athletes & Teams',
    description: 'Preferred by top athletes and professional sports teams for our specialized care.'
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: '11 Specialized Medical Fields',
    description: 'A multidisciplinary team offering cutting-edge treatments across multiple domains.'
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Advanced Diagnostic & Treatment Technology',
    description: 'Equipped with the latest innovations for precise assessment and faster recovery.'
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'World-Class Rehab & Performance Center',
    description: 'A state-of-the-art facility designed for rehabilitation, fitness, and peak performance.'
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Proven Recovery Success',
    description: 'Over 100+ athletes successfully rehabilitated and returned to peak condition.'
  }
];

export default function WhyChooseUs() {
  const { darkMode } = useTheme(); // Get Dark Mode State

  return (
    <section className={`relative py-20 transition-colors duration-500 ${
      darkMode ? 'bg-gradient-to-b from-black to-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className=" mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3">
            {/* Brushstroke Background */}
            <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
              darkMode ? 'bg-green-600' : 'bg-green-700'
            }`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Why Choose Us?</strong>
            </h2>
          </div>

          <p className={`w-full mx-auto mt-6 uppercase font-extrabold ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Discover what makes us the **#1 Sports Medicine & Rehabilitation Center** in India.
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative overflow-hidden w-full py-6">
          <motion.div
            className="flex space-x-6 w-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 90,
              ease: "linear"
            }}
          >
            {[...features, ...features].map((feature, index) => ( // Duplicate for smooth looping
              <motion.div
                key={index}
                className={`relative group flex-shrink-0 rounded-2xl shadow-lg p-6 min-w-[300px] max-w-[300px] transition-all duration-300 hover:shadow-green-500/50 ${
                  darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
                }`}
              >
                {/* Icon */}
                <div className={`mb-4 flex items-center justify-center w-16 h-16 rounded-full group-hover:scale-110 transition-transform ${
                  darkMode ? 'bg-green-600' : 'bg-green-700'
                }`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className={`text-xl  uppercase font-semibold mb-2 ${
                  darkMode ? 'text-green-400' : 'text-green-700'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
