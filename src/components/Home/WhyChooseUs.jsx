'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: 'Trusted by Elite Athletes & Teams',
    description: 'Preferred by top athletes and professional sports teams for our specialized care.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: '11 Specialized Medical Fields',
    description: 'A multidisciplinary team offering cutting-edge treatments across multiple domains.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: 'Advanced Diagnostic & Treatment Technology',
    description: 'Equipped with the latest innovations for precise assessment and faster recovery.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: 'World-Class Rehab & Performance Center',
    description: 'A state-of-the-art facility designed for rehabilitation, fitness, and peak performance.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-green-500" />,
    title: 'Proven Recovery Success',
    description: 'Over 100+ athletes successfully rehabilitated and returned to peak condition.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 sticky top-0 fixed text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">Why Choose Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what makes us the **#1 Sports Medicine & Rehabilitation Center** in India.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 120 }}
              className="relative group bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-green-500/50"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-16 h-16 bg-green-800/50 rounded-full group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-green-300">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-300">{feature.description}</p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
