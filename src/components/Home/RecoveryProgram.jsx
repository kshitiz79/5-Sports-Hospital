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
    {
      id: "06",
      title: "Bounce Back Faster, Feel Great in Less Time",
      paragraph:
        "We know that fatigue doesn’t just impact your performance; it also makes you more prone to injury. Our recovery system is designed to minimize downtime, so you can feel great and recover quickly, keeping you at the top of your game week after week.",
      image: "/apple6.png",
    },
  ],
};

export default function RecoveryProgram() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-20 transition-colors relative duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3">
            <span
              className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
                darkMode ? 'bg-green-600' : 'bg-green-500'
              }`}
            ></span>
            <h2 className="text-2xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Athletes Recovery Program</strong>
            </h2>
          </div>

          <p
            className={`w-full mx-auto mt-6 uppercase font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            5 Sports Hospital | Your Personal Recovery Specialist, Tailoring Your Path to Full Recovery Each Week
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-16 justify-between">
          {contentData.sections.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className="w-full md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-96 h-auto rounded-lg shadow-md"
                  />
                </div>

                {/* Text */}
                <div
                  className={`w-full md:w-2/3 ${
                    isEven ? 'text-right' : 'text-left'
                  }`}
                >
                  <h3 className="text-xl md:text-2xl lg:text-4xl font-extrabold mb-4 uppercase">
                    <span className="text-green-500">{item.id}</span> {item.title}
                  </h3>
                  <p
                    className={`text-xl ${
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
