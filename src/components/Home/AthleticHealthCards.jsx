"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contex/ThemeContext";

// JSON-like data for all cards with equal content in "Why It Matters" and "Who Benefits"
const cardData = [
  {
    id: "cardiac",
    title: "Cardiac Health",
    highlight: "Heart + Lungs  = Your Endurance Power",
    test: "Comprehensive Health Assessment",
    why: "Efficient heart and lung function = Better endurance, recovery, and overall stamina for peak performance.",
    who: "Endurance athletes, long-distance runners, cyclists, and those focused on improving stamina and aerobic capacity.",
    extra: `We provide comprehensive testing to optimize your endurance. Understand your limits and create a plan to perform better, recover faster, and dominate your game. Ready to elevate? Contact us today!`,
  },
  {
    id: "muscle",
    title: "Muscle Health",
    highlight: "Muscles + Strength Training = Explosive Power",
    test: "Biomechanics Assesments",
    why: "Strong muscles = Increased sprinting speed, higher jumps, and more explosive movements to maximize athletic.",
    who: "Sprinters, weightlifters, power athletes, and anyone looking to improve their raw strength and explosiveness.",
    extra: `Maximize your strength with targeted assessments. We help you build explosive power, recover quickly, and stay ahead of the competition. Ready to dominate? Contact us now!`,
  },
  {
    id: "organ",
    title: "Organ Health",
    highlight: "Organs + Function = Peak Athletic Performance",
    test: "Comprehensive Health Assessment",
    why: "Optimal organ function = Enhanced recovery, better performance, and sustained energy to push your limits.",
    who: "Athletes in all sports, including those in recovery phases, and individuals looking to optimize their body functions for better performance.",
    extra: `- Body Composition Analysis: Optimize fat, muscle, and bone density.
- Sports-Specific Blood Tests: Fine-tune nutrition and recovery with detailed biomarkers.
- Organ Function Tests: Ensure your heart, liver, and kidneys operate at peak levels for faster recovery and sustained performance.
Why It Matters: A healthy body recovers faster and performs longer. Let’s build your winning strategy!`,
  },
];

const AthleticHealthCards  = () => {
  const [expanded, setExpanded] = useState({});
  const { darkMode } = useTheme();

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white"
      } relative `}
    >


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
              darkMode ? "" : "bg-green-500"
            }`}
          ></span>
          <h2 className="text-2xl md:text-5xl font-extrabold uppercase tracking-tight drop-shadow-md relative">
            Elevate Your Performance
          </h2>
        </div>
        <p
          className={`max-w-3xl mx-auto text-3xl md:text-1.5rem font-semibold tracking-wider ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <span className="text-green-500">
          Unlock your potential </span> with expert
          insights<br /> and <span className="text-green-500">  cutting-edge testing </span>
        </p>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200/50 backdrop-blur-sm ${
                darkMode
                  ? "bg-black border-gray-700/50 shadow-green-400/50"
                  : "bg-white/90 text-gray-800"
              }`}
            >
              <h2 className="text-xl font-bold mb-4 uppercase tracking-tight drop-shadow-sm text-center">
                {card.title}
              </h2>
              <p className="leading-relaxed text-gray-100 text-center">
                <strong className="text-green-600">{card.highlight}</strong>
                <br />
                <br />
                <span className="font-medium">Test:</span> {card.test}
                <br />
                <span className="font-medium">Why It Matters:</span> {card.why}
                <br />
                
              </p>

              {expanded[card.id] ? (
                <div className="mt-4 text-gray-600 whitespace-pre-line">
                  <p className="leading-relaxed">{card.extra}</p>
                  <button
                    onClick={() => toggleExpand(card.id)}
                    className="mt-3 inline-block mx-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
                  >
                    Read Less
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => toggleExpand(card.id)}
                  className="mt-8     ml-24 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-300 w-2/5"
                >
                  Read More
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AthleticHealthCards;
