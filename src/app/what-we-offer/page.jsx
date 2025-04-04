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
  const { darkMode } = useTheme(); // Destructure darkMode from the theme context

  return (
    <section
      className={`py-24 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16 relative z-10"
      >
        <div className="relative inline-block px-6 py-4 mb-6 bg-opacity-20 backdrop-blur-sm rounded-lg">
          <span
            className={`absolute inset-0 w-full h-full rounded-lg ${
              darkMode ? "bg-green-600" : "bg-green-500"
            }`}
          ></span>
          <h2 className="text-2xl md:text-5xl font-extrabold uppercase tracking-tight drop-shadow-md relative">
            Elevate Your Performance
          </h2>
        </div>
        <p
          className={`max-w-3xl mx-auto text-sm md:text-lg font-semibold uppercase tracking-wider ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Unlock your potential with expert insights and cutting-edge testing
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {servicesData.map((service, index) => (
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
            key={index}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
