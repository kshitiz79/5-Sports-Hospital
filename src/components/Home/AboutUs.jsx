'use client';

import { Play } from 'lucide-react';

export default function AboutUs() {
  return (
<section className="section-class">
      <div className="container mx-auto px-6 ">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-gray-900 font-bold text-center mb-12">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start  mx-auto">
          {/* Left Column: Story and Video */}
          <div className="space-y-8">
            {/* Story */}
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              At <span className="font-semibold">5 Sports Hospital</span>, we are dedicated to revolutionizing sports medicine and rehabilitation. Founded with a vision to provide world-class care to athletes of all levels, our journey began with a simple mission: to help individuals achieve their peak performance and recover stronger than ever. With over 20 years of expertise, we have treated 500+ athletes, earning the trust of national teams and sports enthusiasts alike.
            </p>

            {/* Explainer Video */}
            <div className="relative">
              <video
                className="w-full rounded-lg shadow-lg"
                poster="/about-video-poster.jpg" // Fallback image
                controls
              >
                <source src="/about-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg hover:bg-opacity-20 transition">
                <Play className="w-12 h-12 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✔️</span>
                <span className="text-gray-700">
                  <strong>11 Specialized Sports Medicine Departments</strong> - Comprehensive care for all your needs.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✔️</span>
                <span className="text-gray-700">
                  <strong>World-Class Rehabilitation Technology</strong> - Cutting-edge tools for faster recovery.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✔️</span>
                <span className="text-gray-700">
                  <strong>Personalized Care for Every Athlete</strong> - Tailored treatment plans to meet your goals.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-dark-green mr-3">✔️</span>
                <span className="text-gray-700">
                  <strong>Personalized Care for Every Athlete</strong> - Tailored treatment plans to meet your goals.
                </span>
              </li>
              
            </ul>

            {/* Optional: Counters */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-4xl font-bold text-light-green">500+</h4>
                <p className="text-gray-600 mt-2">Athletes Treated</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-4xl font-bold text-light-green">20+</h4>
                <p className="text-gray-600 mt-2">Years of Expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}