'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';
import Image from 'next/image';

const MeetOurExperts = () => {
  const { darkMode } = useTheme();

  const teamMembers = [
    {
      name: "Dr Pooja Jhade",
      role: "Certified Posture Expert",
      image: "/doctor.png",
      expertise: [
        "Posture Reformation",
        "Anti-Gravity Rehabilitation",
        "Sports Injury Prevention",
        "Musculoskeletal Collapse Prevention",
      ],
      collaborations: [
        "Indian Premier League (IPL)",
        "International Tennis Federation (ITF)",
        "Corporate Wellness Programs",
      ],
    },
    {
      name: "Dr Nataraj H M",
      role: "Knee & Shoulder Specialist HOD-Orthopaedics",
      image: "/doctor2.png",
      expertise: [
        "Robotic Knee Replacement",
        "Robotic Partial Knee Replacement",
        "Computer Assisted Surgeries",
        "Shoulder Dislocation Surgeries",
        "Arthroscopy",
        "ACL Reconstruction",
        "Meniscus Repair",
        "Rotator Cuff Repair",
        "Fracture Surgeries",
      ],
      collaborations: [],
    },
  ];

  return (
    <section
      className={`py-20 transition-colors relative duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3">
            {/* Brushstroke Background */}
            <span
              className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
                darkMode ? 'bg-green-600' : 'bg-green-500'
              }`}
            ></span>

            {/* Text with Shadow */}
            <h2 className="text-2xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Meet Our Experts</strong>
            </h2>
          </div>

          <p
            className={`w-full mx-auto mt-6 uppercase font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Our highly skilled specialists are here to help you achieve peak
            performance and recovery.
          </p>
        </motion.div>

        {/* Experts Grid: 2 columns on medium+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              // Example of a simple fade-in animation
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col sm:flex-row rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {/* Image on the left */}
              <div className="w-full sm:w-1/2 h-[250px] sm:h-auto">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>

              {/* Text on the right */}
              <div className="p-6 w-full sm:w-1/2 text-left">
                <h4
                  className={`font-bold text-lg md:text-xl ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {member.name.toUpperCase()}
                </h4>
                <p className="text-lime-500 text-sm md:text-base mb-4">
                  {member.role}
                </p>

                {/* Expertise */}
                <div className="mb-4">
                  <h5
                    className={`font-bold text-sm md:text-base ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Expertise:
                  </h5>
                  <ul
                    className={`list-disc pl-5 text-xs md:text-sm space-y-1 ${
                      darkMode ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    {member.expertise.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Collaborations */}
                {member.collaborations.length > 0 && (
                  <div>
                    <h5
                      className={`font-bold text-sm md:text-base ${
                        darkMode ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      Collaborations:
                    </h5>
                    <ul
                      className={`list-disc pl-5 text-xs md:text-sm space-y-1 ${
                        darkMode ? 'text-white' : 'text-gray-700'
                      }`}
                    >
                      {member.collaborations.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurExperts;
