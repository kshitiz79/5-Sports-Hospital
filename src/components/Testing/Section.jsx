'use client';

import React from 'react';
import Image from 'next/image';

const testingData = [
  {
    title: 'VO₂ MAX & LACTATE THRESHOLD',
    description:
      'Receive an accurate measure of your cardiorespiratory fitness and assess your body’s lactate response to exercise. These insights help you understand and optimize your physiological capacity for training and performance.',
    image: '/images/vo2max.jpg', // You can replace this with a combined or representative image
    link: 'Vo2MaxTestSection',
  },
  {
    title: 'RESTING METABOLIC RATE & BODY COMPOSITION',
    description:
      'Understand your resting calorie requirement and assess your body composition to support your weight loss or muscle gain goals.',
    image: '/images/bodycomp.jpg',
    link: 'Vo2MaxTestSection',
  },
  {
    title: 'MUSCLE OXYGEN MONITORING',
    description:
      'Track muscle oxygen levels in real time to identify fatigue thresholds and optimize strength and conditioning workouts.',
    image: '/images/muscle-oxygen.jpg', // Replace with your image
    link: 'test-page',
  },
];

const Section = () => {
  return (
<section className="bg-gradient-to-b from-black to-gray-900 text-gray-900 dark:text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Performance Testing
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our range of physiological performance tests equip you with data-driven insights to tailor your training and enhance your overall performance.
          </p>
        </div>

        {/* Test Cards */}
        <div className="space-y-16">
          {testingData.map((test, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div className="md:w-1/2">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {test.title} <span className="text-green-500">→</span>
                </h3>
                <p className="text-gray-100 mb-3">{test.description}</p>
                <a
                  href={test.link}
                  className="text-green-500 font-semibold hover:underline"
                >
                  FIND OUT MORE
                </a>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={test.image}
                    alt={test.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
