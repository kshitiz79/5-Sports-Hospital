'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="relative sticky top-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white rounded-3xl overflow-hidden py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-400">About Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn more about our mission to redefine sports medicine and athlete care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mx-auto">
          {/* Left Column: Story and Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Story */}
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              At <span className="font-semibold text-green-400">5 Sports Hospital</span>, we are dedicated to revolutionizing sports medicine and rehabilitation. 
              Founded with a vision to provide **world-class care**, we have treated **500+ elite athletes** with a **20-year legacy** of excellence.
            </p>

            {/* Explainer Video */}
            <div className="relative group">
              <video
                className="w-full rounded-lg shadow-lg border border-gray-700"
                poster="/about-video-poster.jpg" // Fallback image
                controls
              >
                <source src="/about-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg transition group-hover:bg-opacity-20">
                <Play className="w-14 h-14 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-green-400">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                { title: '11 Specialized Sports Medicine Departments', desc: 'Comprehensive care for all your needs.' },
                { title: 'World-Class Rehabilitation Technology', desc: 'Cutting-edge tools for faster recovery.' },
                { title: 'Personalized Care for Every Athlete', desc: 'Tailored treatment plans to meet your goals.' },
                { title: '500+ Successful Injury Recoveries', desc: 'Proven track record of athlete recovery.' }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-green-400 text-2xl">✔️</span>
                  <span className="text-gray-300">
                    <strong>{item.title}</strong> - {item.desc}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Animated Counters */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { count: "500+", label: "Athletes Treated" },
                { count: "20+", label: "Years of Expertise" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 bg-white/10 backdrop-blur-md border border-gray-700 rounded-lg shadow-md"
                >
                  <h4 className="text-4xl font-bold text-green-300">{stat.count}</h4>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
