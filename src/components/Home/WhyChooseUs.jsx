'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext';

const features = [
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Trusted by Elite Athletes & Teams',
    description: 'Preferred by top athletes and professional sports teams for our specialized care.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: '11 Specialized Medical Fields',
    description: 'A multidisciplinary team offering cutting-edge treatments across multiple domains.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Advanced Diagnostic & Treatment Technology',
    description: 'Equipped with the latest innovations for precise assessment and faster recovery.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'World-Class Rehab & Performance Center',
    description: 'A state-of-the-art facility designed for rehabilitation, fitness, and peak performance.',
  },
  {
    icon: <CheckCircle className="w-10 h-10" />,
    title: 'Proven Recovery Success',
    description: 'Over 100+ athletes successfully rehabilitated and returned to peak condition.',
  },
];

export default function WhyChooseUs() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`relative py-20 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-black to-gray-900 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="relative inline-block px-4 py-2 mb-4">
            <span
              className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
                darkMode ? 'bg-green-600' : 'bg-green-500'
              }`}
            ></span>
            <h2 className="text-2xl md:text-5xl font-extrabold uppercase drop-shadow-lg relative tracking-wide">
              <strong>Why Choose Us?</strong>
            </h2>
          </div>

          <p
            className={`max-w-2xl mx-auto mt-4 text-base md:text-lg font-semibold tracking-wide ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Discover what makes us the <span className="text-green-500">#1 Sports Medicine & Rehab Center</span> in India.
          </p>
        </motion.div>

        {/* Horizontal Scroll (Marquee Style) */}
        <div className="relative overflow-hidden w-full py-4">
          <motion.div
            className="flex space-x-8 w-full"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: 'linear',
            }}
          >
            {[...features, ...features].map((feature, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 w-[280px] md:w-[300px] p-6 rounded-2xl transition-transform duration-300 shadow-xl hover:scale-105 group ${
                  darkMode
                    ? 'bg-white/10 border border-gray-700 backdrop-blur-md'
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className={`mb-5 flex items-center justify-center w-16 h-16 rounded-full shadow-md ${
                      darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold uppercase tracking-tight mb-3 ${
                      darkMode ? 'text-green-400' : 'text-green-700'
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
