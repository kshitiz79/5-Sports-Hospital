"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';

const contentData = {
  sections: [
    {
      id: "01",
      title: "A Personal Recovery Specialist Who Designs Your Journey Every Week",
      paragraph:
        "When you have a dedicated team that understands your unique needs, every step of your recovery becomes purposeful. We're here to guide you, offering a plan tailored specifically to your goals, pushing you to reach new milestones without compromising your health.",
      image: "/apple1.png",
    },
    {
      id: "02",
      title: "Recovery Driven by Insights and Real Data",
      paragraph:
        "We don’t guess; we measure. With the latest recovery technology, we’re able to assess your individual needs, providing data-backed insights that lead to quicker healing and stronger results. Your recovery journey is built on real-time information, ensuring you recover effectively, not just quickly.",
      image: "/apple2.png",
    },
    {
      id: "03",
      title: "Strength That Translates Directly to the Field",
      paragraph:
        "Our goal isn’t just to help you heal—it’s to make you stronger than before. Every recovery session is designed with performance in mind, so when you step back into your sport, you’ll feel the difference where it counts—on the field.",
      image: "/apple3.png",
    },
    {
      id: "04",
      title: "React Faster and Move with More Power When It Matters Most",
      paragraph:
        "In those high-pressure moments, milliseconds count. That’s why our recovery program includes methods to enhance your reaction time and build explosive power, helping you stay sharp and make that game-changing move when it matters.",
      image: "/apple4.png",
    },
    {
      id: "05",
      title: "Speed That Shifts the Momentum of the Game",
      paragraph:
        "When it comes to sports, speed can be the ultimate game-changer. Through our specialized recovery and conditioning program, we focus on improving your agility and overall speed—giving you that advantage in every sprint and play.",
      image: "/apple5.png",
    },

  ],
};



export default function RecoveryProgram() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-24 transition-colors duration-500 relative ${
        darkMode
          ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="relative inline-block px-6 py-4">
            <span
              className={`absolute inset-0 w-full h-full rounded-xl skew-y-1 opacity-40 ${
                darkMode ? '' : ''
              }`}
            ></span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wide relative">
              Athletes Recovery Program
            </h2>
          </div>

          <p
            className={`mt-6 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            <span className='text-green-500'>
            5 Sports Hospital </span> | Your Personal Recovery Specialist, Tailoring Your Path to Full Recovery Each Week
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-28">
          {contentData.sections.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 relative group">
                  <img
                    src={item.image}
                    alt={`Illustration for ${item.title}`}
                    className="w-full h-auto rounded-full shadow-2xl transform transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text */}
                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? 'text-left' : 'text-left'
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 uppercase leading-tight">
                    <span className="text-yellow-400">{item.id}</span>{' '}
                    <span className="text-green-500">{item.title}</span>
                  </h3>
                  <p
                    className={`text-lg md:text-xl leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {item.paragraph}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
