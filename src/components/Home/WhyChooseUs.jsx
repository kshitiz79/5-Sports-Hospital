'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-dark-green" />,
    title: 'Trusted by Elite Athletes & Teams',
    description: 'We are the preferred choice for top athletes and professional sports teams across the country.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-dark-green" />,
    title: 'Multidisciplinary Approach with 11 Specialties',
    description: 'Our team of experts collaborates across 11 specialized fields to deliver comprehensive care.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-dark-green" />,
    title: 'Cutting-edge Medical Technology & Equipment',
    description: 'We use the latest medical advancements to ensure accurate diagnosis and effective treatment.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-dark-green" />,
    title: 'State-of-the-Art Rehab & Fitness Center',
    description: 'Our world-class facilities are designed to help you recover faster and perform better.'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-dark-green" />,
    title: '100+ Successful Injury Recovery Cases',
    description: 'Proven track record of helping athletes return to peak performance after injuries.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-class">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what makes us the leading sports medicine and rehabilitation center in India.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              {/* Icon */}
              <div className="mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}