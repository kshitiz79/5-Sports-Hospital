"use client"

import React, { useState } from 'react';

const SuccessStories = () => {
  const athleteTestimonials = [
    {
      videoUrl: 'https://www.youtube.com/embed/YOUR_ATHLETE_1_VIDEO_ID', // Replace with actual video IDs
      name: 'Athlete 1 Name',
      sport: 'Sport 1',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/YOUR_ATHLETE_2_VIDEO_ID',
      name: 'Athlete 2 Name',
      sport: 'Sport 2',
    },
    // ... more athletes
  ];

  const recoveryStories = [
    {
      beforeImage: '/images/before_1.jpg', // Replace with actual image paths
      afterImage: '/images/after_1.jpg',
      description: 'Patient 1 recovery story...',
    },
    {
      beforeImage: '/images/before_2.jpg',
      afterImage: '/images/after_2.jpg',
      description: 'Patient 2 recovery story...',
    },
    {
        beforeImage: '/images/before_1.jpg', // Replace with actual image paths
        afterImage: '/images/after_1.jpg',
        description: 'Patient 1 recovery story...',
      },
      {
        beforeImage: '/images/before_2.jpg',
        afterImage: '/images/after_2.jpg',
        description: 'Patient 2 recovery story...',
      },
    // ... more stories
  ];

  const patientReviews = [
    { name: 'John Doe', review: 'Amazing service and great care!' },
    { name: 'Jane Smith', review: 'Highly recommend this facility!' },
    { name: 'Alice Johnson', review: 'The doctors are very professional.' },
    { name: 'Michael Brown', review: 'A top-notch rehabilitation center!' },
    { name: 'Sarah Wilson', review: 'Helped me recover quickly.' },
    { name: 'David Lee', review: 'Exceptional support and treatment!' },
    { name: 'Emma Davis', review: 'Fantastic experience with the staff!' },
    { name: 'Chris Evans', review: 'I feel much better after my visit.' },
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
    <section className="section-class">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>

        {/* Athlete Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Athlete Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {athleteTestimonials.map((athlete, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <iframe
                  width="100%"
                  height="200"
                  src={athlete.videoUrl}
                  title={athlete.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="p-4 bg-white">
                  <h4 className="font-semibold">{athlete.name}</h4>
                  <p className="text-gray-600 text-sm">{athlete.sport}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before & After Recovery Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Recovery Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {recoveryStories.map((story, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img
                    src={story.beforeImage}
                    alt="Before"
                    className="w-full h-48 object-cover"
                  />
                  <img
                    src={story.afterImage}
                    alt="After"
                    className="w-full h-48 object-cover absolute inset-0 opacity-0 hover:opacity-100 transition duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Reviews Carousel */}
        <div>
        <h3 className="text-2xl font-semibold text-center mb-6">Patient Reviews</h3>
      
      <div className="flex justify-center">
        <button
          onClick={prevReviews}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-l"
        >
          &lt;
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-4">
          {patientReviews.slice(startIndex, startIndex + reviewsPerPage).map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <p className="text-lg text-gray-700">"{review.review}"</p>
              <p className="font-semibold mt-2">- {review.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={nextReviews}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-r"
        >
          &gt;
        </button>
      </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;