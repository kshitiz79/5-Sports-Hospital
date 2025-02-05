'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const PartneredTeams = () => {
  const { darkMode } = useTheme(); // Get Theme State

  const partners = [
    { logo: './team.png', name: 'National Football League' },
    { logo: 'https://static.vecteezy.com/system/resources/previews/023/579/934/non_2x/illustration-of-soccer-logo-it-s-for-champion-concept-png.png', name: 'Olympic Training Center' },
    { logo: 'https://static.vecteezy.com/system/resources/previews/023/579/934/non_2x/illustration-of-soccer-logo-it-s-for-champion-concept-png.png', name: 'World Athletics Federation' },
    { logo: 'https://static.vecteezy.com/system/resources/previews/023/579/934/non_2x/illustration-of-soccer-logo-it-s-for-champion-concept-png.png', name: 'International Tennis Federation' },
    { logo: 'https://static.vecteezy.com/system/resources/previews/023/579/934/non_2x/illustration-of-soccer-logo-it-s-for-champion-concept-png.png', name: 'Premier Basketball League' },
  ];

  const testimonials = [
    {
      image: '/images/athlete1.jpg',
      quote: 'The expertise and training facilities here have completely transformed my performance!',
      name: 'Michael Johnson',
      sport: 'Track & Field',
    },
    {
      image: '/images/athlete2.jpg',
      quote: 'A game-changer for my injury recovery! Top-tier medical care.',
      name: 'Serena Williams',
      sport: 'Tennis',
    },
    {
      image: '/images/athlete3.jpg',
      quote: 'Our entire team trusts this institution for world-class rehabilitation!',
      name: 'Cristiano Ronaldo',
      sport: 'Football',
    },
  ];

  return (
    <section className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-b from-black via-black   to-gray-800 text-white' : 'bg-gray-100 text-gray-900'} relative clip-path-custom`}>

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
            <span className={`absolute inset-0 ${darkMode ? 'bg-green-600' : 'bg-green-700'} w-full h-full rounded-lg skew-y-1`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Our Partnered Teams</strong> 
            </h2>
          </div>

          <p className={`max-w-2xl mx-auto mt-5 uppercase font-extrabold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Collaborating with elite sports organizations to revolutionize athlete healthcare & performance.
          </p>
        </motion.div>

        {/* Partner Logos Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`backdrop-blur-md border rounded-xl shadow-lg flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300 ${
                darkMode ? 'bg-white/10 border-gray-700' : 'bg-white border-gray-300'
              }`}
            >
              <img src={partner.logo} alt={partner.name} className="w-24 h-auto mx-auto" />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex justify-center">
            <h3 className={`text-2xl font-semibold px-6 py-3 shadow-lg mb-6 text-center uppercase  ${
              darkMode ? 'bg-green-500 text-white' : 'bg-green-700 text-gray-900'
            }`}>
              What Our Partnered Athletes Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 ${
                  darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
                }`}
              >
                {/* Top Image (Athlete in Action) */}
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-56 object-cover" />

                {/* Quote Section */}
                <div className="p-6 text-center flex flex-col items-center relative">
                  {/* Quote Icon with Background */}
                  <div className="absolute -top-8 w-16 h-16 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: darkMode ? '#22C55E' : '#16A34A' }}>
                    <span className="text-4xl text-black font-bold">“</span>
                  </div>

                  {/* Quote */}
                  <p className={`italic mt-10 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{testimonial.quote}</p>

                  {/* Name */}
                  <h4 className={`mt-6 text-lg font-extrabold uppercase ${darkMode ? 'text-white' : 'text-gray-900'}`}>{testimonial.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PartneredTeams;
