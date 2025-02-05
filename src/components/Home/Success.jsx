'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SuccessStories = () => {
  const athleteTestimonials = [
    {
      videoUrl: "https://www.youtube.com/embed/4CpdzPp4lsE", // Ensure embed URLs for proper display
      name: "Cristiano Ronaldo",
      sport: "Football",
    },
    {
      videoUrl: "https://www.youtube.com/embed/4CpdzPp4lsE",
      name: "Serena Williams",
      sport: "Tennis",
    },
    {
      videoUrl: "https://www.youtube.com/embed/lsSC2vx7zFQ",
      name: "Usain Bolt",
      sport: "Athletics",
    },
  ]

  const recoveryStories = [
    {
      beforeImage: 'https://media.post.rvohealth.io/wp-content/uploads/2022/09/woman-knee-brace-surgery-hospital-bed-1200x628-facebook-1200x628.jpg',
      afterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Lt5HQFgky_zCMaqeeLRXrSGerVArsrYl5RYyZOTPf1esvx6S6VcMDycy3_cPPMYWfNI&usqp=CAU',
      description: 'Alex recovered from a severe ACL tear in just 8 months with our specialized treatment.',
    },
    {
      beforeImage: 'https://media.post.rvohealth.io/wp-content/uploads/2022/09/woman-knee-brace-surgery-hospital-bed-1200x628-facebook-1200x628.jpg',
      afterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Lt5HQFgky_zCMaqeeLRXrSGerVArsrYl5RYyZOTPf1esvx6S6VcMDycy3_cPPMYWfNI&usqp=CAU',
      description: 'Lisa’s fractured ankle was rehabilitated with world-class therapy techniques.',
    },
    {
      beforeImage: 'https://media.post.rvohealth.io/wp-content/uploads/2022/09/woman-knee-brace-surgery-hospital-bed-1200x628-facebook-1200x628.jpg',
      afterImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Lt5HQFgky_zCMaqeeLRXrSGerVArsrYl5RYyZOTPf1esvx6S6VcMDycy3_cPPMYWfNI&usqp=CAU',
      description: 'John overcame a shoulder dislocation and regained full range of motion.',
    },
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
  const reviewsPerPage = 4;

  const nextReviews = () => {
    setStartIndex((prevIndex) =>
      prevIndex + reviewsPerPage < patientReviews.length
        ? prevIndex + reviewsPerPage
        : 0
    );
  };

  const prevReviews = () => {
    setStartIndex((prevIndex) =>
      prevIndex - reviewsPerPage >= 0
        ? prevIndex - reviewsPerPage
        : patientReviews.length - reviewsPerPage
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black relative text-white">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400">Success Stories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real athletes. Real recoveries. Real success.
          </p>
        </motion.div>

        {/* Athlete Testimonials */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-green-300">
            Athlete Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {athleteTestimonials.map((athlete, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg border border-gray-700 backdrop-blur-md bg-white/10">
                <iframe
                  width="100%"
                  height="220"
                  src={athlete.videoUrl}
                  title={athlete.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-green-300">{athlete.name}</h4>
                  <p className="text-gray-400">{athlete.sport}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before & After Recovery Stories */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-green-300">
            Recovery Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recoveryStories.map((story, index) => (
              <div key={index} className="rounded-xl shadow-lg overflow-hidden bg-white/10 backdrop-blur-md border border-gray-700">
                <div className="relative group">
                  <img src={story.beforeImage} alt="Before" className="w-full h-48 object-cover transition-opacity duration-500 group-hover:opacity-0"/>
                  <img src={story.afterImage} alt="After" className="w-full h-48 object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                </div>
                <div className="p-4 text-center text-gray-300">{story.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Patient Reviews Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center text-green-300 mb-6">
            Patient Reviews
          </h3>
          <div className="flex justify-center">
            <button onClick={prevReviews} className="bg-gray-700 px-4 py-2 rounded-l">
              &lt;
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-4">
              {patientReviews.slice(startIndex, startIndex + reviewsPerPage).map((review, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-6 text-center">
                  <p className="text-lg text-gray-300">"{review.review}"</p>
                  <p className="font-semibold mt-2 text-green-300">- {review.name}</p>
                </div>
              ))}
            </div>
            <button onClick={nextReviews} className="bg-gray-700 px-4 py-2 rounded-r">
              &gt;
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessStories;
