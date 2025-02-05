'use client'

import React from 'react';
import { motion } from 'framer-motion';

const MeetOurExperts = () => {
  const experts = [
    {
      image: '/images/doctor1.jpg', // Replace with actual image paths
      name: 'Dr. John Doe',
      specialties: 'Sports Medicine, Orthopedics',
      consultationLink: '/book-consultation/dr-john-doe', // Link to booking page
    },
    {
      image: '/images/doctor2.jpg',
      name: 'Dr. Jane Smith',
      specialties: 'Physiotherapy, Rehabilitation',
      consultationLink: '/book-consultation/dr-jane-smith',
    },
    {
      image: '/images/doctor3.jpg',
      name: 'Dr. Alex Johnson',
      specialties: 'Sports Nutrition, Performance Coaching',
      consultationLink: '/book-consultation/dr-alex-johnson',
    },
    {
      image: '/images/doctor4.jpg',
      name: 'Dr. Emily White',
      specialties: 'Exercise Physiology, Injury Prevention',
      consultationLink: '/book-consultation/dr-emily-white',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400">Meet Our Experts</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our highly skilled specialists are here to help you achieve peak performance and recovery.
          </p>
        </motion.div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-400"
                />
                <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
              </div>

              {/* Expert Details */}
              <h3 className="text-xl font-semibold text-green-300">{expert.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{expert.specialties}</p>

              {/* Booking Button */}
              <a
                href={expert.consultationLink}
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md"
              >
                Book Consultation
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurExperts;
