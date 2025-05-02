'use client';

import React from 'react';

const services = [
  {
    title: "RESTING METABOLIC RATE TEST",
    price: "£80",
    duration: "Approximately 45 minutes",
    details: [
      "Before completing the test, we start with a short 5–10 minute consultation where our team learn to understand your goals and explain the process.",
      "To complete this test as accurately as possible, please arrive in a fasted state having avoided strenuous activity for the previous 12 hours.",
      "Following significant weight loss or another reason for a reset, this test provides an accurate understanding of your Resting Metabolic Rate (RMR), a crucial part of determining your daily caloric needs.",
    ],
    whatYouGet: [
      "Measured Resting Metabolic Rate",
      "Estimated total daily energy need",
      "Information about energy balance",
    ],
    readyToBook: "BOOK ONLINE",
  },
  {
    title: "BODY COMPOSITION ASSESSMENT",
    price: "£40",
    duration: "Approximately 30 minutes",
    details: [
      "Using skinfold and girth measurements to assess body fat % and composition.",
      "Objective body composition analysis to assess lean mass vs. fat mass and identify body recomposition opportunities.",
    ],
    whatYouGet: [
      "Body fat %",
      "Lean mass %",
      "Girth measurements",
    ],
    readyToBook: "BOOK ONLINE",
  },
  {
    title: "RESTING METABOLIC RATE TEST & BODY COMPOSITION ASSESSMENT",
    price: "£110",
    duration: "Approximately 60 minutes",
    details: [
      "Combines both tests for a complete analysis of your resting calorie needs and current body composition to support fat loss or performance goals.",
    ],
    whatYouGet: [
      "All from both tests combined",
    ],
    readyToBook: "BOOK ONLINE",
  },
];

const MetabolicServicesSection = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-green-600 text-sm font-bold mb-6">// OUR RESTING METABOLIC RATE & BODY COMPOSITION SERVICES</h2>

        {/* Service Cards */}
        <div className="space-y-12">
          {services.map((service, idx) => (
            <div key={idx} className="border-b border-gray-300 pb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  {/* <p><span className="text-green-600 font-semibold">PRICE</span> <br />{service.price}</p> */}
                  <p className="mt-4"><span className="text-green-600 font-semibold">DURATION</span> <br />{service.duration}</p>
                  <p className="mt-4 text-green-600 font-semibold">DETAILS</p>
                  <ul className="mt-1 text-gray-700 list-disc list-inside space-y-1">
                    {service.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-green-600 font-semibold">WHAT YOU’LL GET</p>
                  <ul className="mt-1 text-gray-700 list-disc list-inside space-y-1">
                    {service.whatYouGet.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-6 text-green-600 font-semibold">READY TO BOOK?</p>
                  <p className="font-bold text-gray-900">{service.readyToBook}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetabolicServicesSection;
