'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import sportsPsychologyData from './../../../../public/surgical.json';

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
    heading: "Healing Beyond the Bone—Strength Starts from Within.",
    description: "Fractures aren’t just breaks in bones—they disrupt your entire rhythm. Our advanced fracture management combines precise diagnostics, expert orthopedic intervention, and personalized rehabilitation to ensure that your recovery doesn’t just focus on healing the bone but also rebuilding your strength and mobility.",
  },
  {
    number: "02",
    heading: "Personalized Recovery for Every Type of Injury.",
    description: "Whether it’s a complex trauma or a stress fracture, our tailored treatment plans ensure every fracture heals correctly the first time, minimizing future complications. We focus on restoring not just your bone health, but your performance and confidence.",
  },
  {
    number: "03",
    heading: "From Recovery to Performance—Rise Stronger.",
    description: "We don’t just help you recover from injuries; we help you rise back stronger. By integrating rehabilitation with performance-focused training, we ensure you come back ready to not only meet but exceed your previous capabilities.",
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
            <span className="text-green-600 dark:text-green-500">Surgical Second Option</span>
          </motion.nav>

          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200"
          >
            Surgical Second Option
          </motion.h2>

          {/* Section Description */}
          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl leading-relaxed mb-10 text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Surgery is a big decision—make it the right one. A second opinion isn’t about doubt; it’s about confidence. At our center, we offer unbiased, expert surgical reviews to ensure you fully understand your condition, explore all treatment options, and choose the path that truly serves your long-term health. 
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



        <div className="bg-gray-800 text-white py-16 px-6 md:px-20 mt-12">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-500 mb-4">Surgical Second Opinion</h2>
        <h3 className="text-2xl font-semibold text-white">
          Not Sure What to Do Next? We’ll Help You Decide.
        </h3>
      </div>

      {/* Introduction */}
      <div className="text-lg text-gray-300 mb-8">
        <p>
          Surgery can change your life—so let’s make sure it changes it for the better. At{' '}
          <span className="font-bold text-green-500">5 Sports Hospital</span>, we believe every patient deserves clarity
          before committing to the operating table. That’s why we offer comprehensive, unbiased second opinions for
          those who have been advised surgery elsewhere. No pressure, no hidden agendas—just expert insights from a
          panel of leading orthopedic, sports medicine, and joint preservation specialists.
        </p>
      </div>

      {/* What We Offer Section */}
      <div className="space-y-6 mb-12">
        <h4 className="text-2xl font-semibold text-white">What We Offer:</h4>
        <ul className="list-disc pl-8 text-lg space-y-4 text-gray-300">
          <li>✅ Thorough Review of existing medical reports, MRIs, X-rays, and prior consultations</li>
          <li>✅ In-Person or Virtual Evaluations based on your convenience</li>
          <li>✅ Cross-Specialist Insights from joint surgeons, sports orthopedists, and regenerative therapy experts</li>
          <li>✅ Conservative Care First – exploring non-surgical paths like physiotherapy, orthobiologics, or targeted rehabilitation before surgery</li>
          <li>✅ Personalized Treatment Roadmap tailored to your lifestyle, goals, and activity level</li>
        </ul>
      </div>

      {/* Why Consider a Second Opinion Section */}
      <div className="space-y-6 mb-12">
        <h4 className="text-2xl font-semibold text-white">Why Consider a Second Opinion?</h4>
        <ul className="list-disc pl-8 text-lg space-y-4 text-gray-300">
          <li>✅ You've been told surgery is the only option—but you want to explore alternatives</li>
          <li>✅ You're uncertain about the risks, recovery time, or results of a recommended procedure</li>
          <li>✅ You’ve had surgery in the past that didn’t deliver the results you expected</li>
          <li>✅ You're looking for advanced techniques like robotic surgery, arthroscopy, or regenerative therapy</li>
          <li>✅ You want reassurance that you're making the best decision for your long-term health</li>
        </ul>
      </div>

      {/* Our Promise to You Section */}
      <div className="bg-green-900/30 border-l-4 border-green-500 px-6 py-4 rounded-lg">
        <p className="text-2xl text-white font-bold">Our Promise to You:</p>
        <p className="text-lg text-gray-300 mt-2">
          We’re not here to rush you into surgery. We’re here to guide you through your options—with honesty, compassion,
          and experience. Whether you proceed with us or not, our goal is to empower you with confidence in your next step.
        </p>
      </div>
    </div>
{/* 
    <section className="bg-black py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">
          Surgical Second Opinion
        </h2>
        <p className="text-xl text-blue-600 font-semibold mb-4">
          Not Sure What to Do Next? We’ll Help You Decide.
        </p>
        <p className="text-gray-100 text-lg mb-6">
          Surgery is a big decision—make it an informed one. Our experts provide honest, independent reviews of your case to explore all options.
        </p>
        <p className="text-lg font-medium text-gray-100">
          We’re not here to sell surgery—we’re here to guide you toward your best outcome.
        </p>
      </div>
    </section> */}

      </section>
    </div>
  );
}