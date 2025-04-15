"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contex/ThemeContext";

const servicesData = [
  {
    title: "Lab Tests and Diagnostics",
    description:
      "Explore sports-specific blood tests, V2 max tests, and other diagnostic services to assess and optimize athletic health.",
    icon: "🔬",
  },
  {
    title: "Performance Testing",
    description:
      "Discover athletic performance tests, muscle power assessments, and physiological evaluations for injury prevention and health improvement.",
    icon: "🏋️‍♂️",
  },
  {
    title: "Consultations and Treatments",
    description:
      "Find information about physiotherapy, orthopedics, and specialized treatments including sports surgery and injury rehab programs.",
    icon: "💪",
  },
  {
    title: "Niche Services for Athletes",
    description:
      "Access specialized programs such as sports science, athlete performance programs, and speed/agility training to enhance performance and recovery.",
    icon: "⚡",
  },
];

const ServicesPage = () => {
  const { darkMode } = useTheme();

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-10 pointer-events-none" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10 px-4"
      >
        <div className="inline-block px-6 py-4 mb-6 relative rounded-xl overflow-hidden">
          <div
            className={`absolute inset-0 rounded-xl blur-xl opacity-40 ${
              darkMode ? "bg-green-600" : "bg-green-500"
            }`}
          />
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white drop-shadow-xl">
            Elevate Your Performance
          </h2>
        </div>
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium uppercase tracking-wider ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Unlock your potential with expert insights and cutting-edge testing
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={`p-6 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-[1.03] hover:shadow-2xl backdrop-blur-md border border-opacity-30 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3
              className={`text-xl sm:text-2xl font-semibold mb-3 ${
                darkMode ? "text-green-400" : "text-green-600"
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`text-base sm:text-lg leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
