'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/arthritis.json';

// Font setup
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Data for the new Key Benefits section
const keyBenefits = [
  {
    number: "01",
    heading: "Treat early. Move longer.",
    description:
      "Joint preservation techniques work best when started early. By addressing arthritis before it progresses, we help you maintain mobility and avoid future surgical interventions.",
  },
  {
    number: "02",
    heading: "Restore without replacement.",
    description:
      "Through innovative methods like cartilage restoration, viscosupplementation, and regenerative therapy, we repair and rejuvenate joints without the need for joint replacement.",
  },
  {
    number: "03",
    heading: "Live pain-free, without downtime.",
    description:
      "Our non-invasive and minimally invasive solutions reduce pain and inflammation, allowing you to stay active and independent—without the extended recovery of surgery.",
  },
];


export default function SportsPsychologyPage() {
  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      {/* Sports Psychology Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h-2V4h-4V2h4V-2h2v2h4v2h-4z' fill='%239CA3AF' fill-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Breadcrumb Navigation */}
          <motion.nav
            variants={itemVariants}
            className="flex justify-center text-sm sm:text-base mb-6"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link
              href="/athletes"
              className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Orthopedic & Surgery
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-green-600 dark:text-green-500">Arthritis & Joint Preservation Technique</span>
          </motion.nav>

          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200"
          >
           Arthritis & Joint Preservation Technique
          </motion.h2>

          {/* Section Description */}
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl leading-relaxed mb-10 text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
           Arthritis doesn’t have to mean surgery. Our joint preservation techniques restore mobility, reduce pain, and slow degeneration—helping you stay active, naturally. Early intervention today can save your joints for the future.
            <span className="text-green-500">*</span>.
          </motion.p>

          {/* Sports Psychology Program Showcase */}
          {sportsPsychologyData.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 py-8 sm:py-12 px-4 sm:px-6   transition-shadow duration-300"
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl sm:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200 mb-4">
                  {service.title}
                </h3>
                <p className="text-base sm:text-xl font-medium text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
              <div className="md:w-1/2 relative h-64 sm:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              </div>
            </motion.div>
          ))}

          {/* Key Benefits Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200"
            >
              Key Benefits of Sports Psychology
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.number}
                  variants={itemVariants}
                  className="p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-500/20 transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <span className="inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-2xl sm:text-3xl font-bold">
                      {benefit.number}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold uppercase text-gray-900 dark:text-gray-100 mb-2 text-center">
                    {benefit.heading}
                  </h4>
                  <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8 mt-10">
        {/* Title */}
        <div>
          <h2 className="text-green-600 text-sm font-semibold uppercase tracking-widest">
            Arthritis & Joint Preservation Techniques
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Delay Surgery. Restore Movement.
          </h3>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
          Joint pain doesn’t always mean surgery. Our Joint Preservation Program focuses on early intervention strategies that can delay or even eliminate the need for joint replacement. We use a mix of <strong>viscosupplementation</strong> (joint lubrication injections), <strong>regenerative medicine</strong>, <strong>targeted physiotherapy</strong>, and <strong>biomechanics correction</strong> to restore mobility and reduce pain.
        </p>

        {/* Benefits List */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-semibold text-green-700 mb-2">Viscosupplementation</h4>
            <p className="text-gray-600">Injections that improve joint lubrication, reduce friction, and enhance shock absorption.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-semibold text-green-700 mb-2">Regenerative Medicine</h4>
            <p className="text-gray-600">Harness your body’s healing potential using PRP and stem cells to repair damaged tissues.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-semibold text-green-700 mb-2">Targeted Physiotherapy</h4>
            <p className="text-gray-600">Therapies personalized to strengthen muscles and improve joint support and function.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-semibold text-green-700 mb-2">Biomechanics Correction</h4>
            <p className="text-gray-600">Realigning posture and movement to reduce joint strain and prevent further deterioration.</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}