'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const SuccessStories = () => {
  const { darkMode } = useTheme(); // Get Dark Mode State

  const athleteTestimonials = [
    { videoUrl: "https://www.youtube.com/embed/4CpdzPp4lsE", name: "Cristiano Ronaldo", sport: "Football" },
    { videoUrl: "https://www.youtube.com/embed/lsSC2vx7zFQ", name: "Serena Williams", sport: "Tennis" },
    { videoUrl: "https://www.youtube.com/embed/lsSC2vx7zFQ", name: "Usain Bolt", sport: "Athletics" },
  ];

  const recoveryStories = [
    { beforeImage: '/before1.jpg', afterImage: '/after1.jpg', description: 'Alex recovered from an ACL tear in 8 months.' },
    { beforeImage: '/before2.jpg', afterImage: '/after2.jpg', description: 'Lisa’s fractured ankle was rehabilitated fully.' },
    { beforeImage: '/before3.jpg', afterImage: '/after3.jpg', description: 'John regained full motion after a dislocated shoulder.' },
  ];

  const patientReviews = [
    { name: 'John Doe', review: 'Life-changing recovery! I can run again.' },
    { name: 'Jane Smith', review: 'Incredible care and professionalism.' },
    { name: 'Alice Johnson', review: 'Highly recommend for any sports injury!' },
    { name: 'Michael Brown', review: 'Amazing doctors and treatment plans.' },
    { name: 'Sarah Wilson', review: 'Rehabilitation here was a game-changer!' },
    { name: 'David Lee', review: 'Truly world-class sports rehab.' },
    { name: 'Emma Davis', review: 'I regained my full mobility quickly!' },
    { name: 'Chris Evans', review: 'The best sports hospital I’ve ever been to!' },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const reviewsPerPage = 4; // Adjust to show 4 reviews at a time

  // Function to scroll left (Previous Reviews)
  const prevReviews = () => {
    setStartIndex((prevIndex) =>
      prevIndex - reviewsPerPage >= 0 ? prevIndex - reviewsPerPage : patientReviews.length - reviewsPerPage
    );
  };

  // Function to scroll right (Next Reviews)
  const nextReviews = () => {
    setStartIndex((prevIndex) =>
      prevIndex + reviewsPerPage < patientReviews.length ? prevIndex + reviewsPerPage : 0
    );
  };

  return (
    <section className={`py-20 transition-colors duration-500 relative ${
      darkMode ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white' : 'bg-gray-100 text-gray-900'
    }`}>
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
            <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
              darkMode ? 'bg-green-600' : 'bg-green-700'
            }`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Success Stories</strong>
            </h2>
          </div>

          <p className={`w-full mx-auto mt-3 uppercase font-extrabold ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Real AtelethReal recovery Real sucess
          </p>
        </motion.div>

        {/* Athlete Testimonials */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-16">

     




<div className="flex justify-center">
<h3 className={`text-2xl font-semibold px-6 py-3 shadow-lg mb-6 text-center uppercase  ${
            darkMode ? 'bg-green-500 text-white' : 'bg-green-700 text-gray-900'
          }`}>Athlete Testimonials</h3> 
          </div>





          <div className="flex space-x-6 overflow-auto scrollbar-hide">
            {athleteTestimonials.map((athlete, index) => (
              <div key={index} className="rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-[320px] border border-gray-700 backdrop-blur-md bg-white/10">
                <iframe width="100%" height="200" src={athlete.videoUrl} title={athlete.name} frameBorder="0"
                  className="rounded-t-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-green-300">{athlete.name}</h4>
                  <p className="text-gray-400">{athlete.sport}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before & After Recovery Stories */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
        <div className="flex justify-center">
<h3 className={`text-2xl font-semibold px-6 py-3 shadow-lg mb-6 text-center uppercase  ${
            darkMode ? 'bg-green-500 text-white' : 'bg-green-700 text-gray-900'
          }`}>Recovery Stories</h3> 
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recoveryStories.map((story, index) => (
              <div key={index} className="rounded-xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-md border border-gray-700">
                <div className="relative group">
                  <img src={story.beforeImage} alt="Before" className="w-full h-48 object-cover transition-opacity duration-500 group-hover:opacity-0"/>
                  <img src={story.afterImage} alt="After" className="w-full h-48 object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
                <div className="p-4 text-center ">{story.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Patient Reviews Carousel */}
        <motion.div 
  initial={{ opacity: 0, y: 50 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {/* Section Title */}
  <div className="flex justify-center">
    <h3 className={`text-2xl sm:text-3xl font-semibold px-6 py-3 shadow-lg mb-6 text-center uppercase rounded-md ${
      darkMode ? 'bg-green-500 text-white' : 'bg-green-700 text-gray-900'
    }`}>
      Patient Reviews
    </h3>
  </div>

  {/* Reviews Container with Auto & Manual Scroll */}
  <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row justify-center">
    
    {/* Left Scroll Button */}
    <button 
      onClick={prevReviews} 
      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full text-white transition"
    >
      &lt;
    </button>

    {/* Reviews Grid (Mobile: 1, Tablet: 2, Desktop: 3-4) */}
    <div className="grid  lg:grid-cols-4 gap-6 mx-4 overflow-hidden w-full px-4">
      {patientReviews.slice(startIndex, startIndex + reviewsPerPage).map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className={`rounded-xl shadow-lg p-6 text-center border ${
            darkMode ? 'bg-gray-800 text-gray-200 border-gray-600' : 'bg-white text-gray-900 border-gray-300'
          }`}
        >
          <p className="text-lg italic">"{review.review}"</p>
          <p className="font-semibold mt-2 text-green-500">- {review.name}</p>
        </motion.div>
      ))}
    </div>

    {/* Right Scroll Button */}
    <button 
      onClick={nextReviews} 
      className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full text-white transition"
    >
      &gt;
    </button>

  </div>
</motion.div>


      </div>
    </section>
  );
};

export default SuccessStories;
