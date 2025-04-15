'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const TestingSection = () => {
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

  return (
    <section
      className={`relative overflow-hidden py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black text-gray-900 dark:text-white ${spaceGrotesk.variable}`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h-2V4h-4V2h4V-2h2v2h4v2h-4z' fill='%239CA3AF' fill-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Breadcrumb */}
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
            <span className="text-green-600 dark:text-green-500">PROGRAMS</span>
          </motion.nav>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-5xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200"
          >
            PROGRAMS
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-4xl sm:text-3xl leading-relaxed mb-10 text-gray-700 dark:text-gray-300"
          >
            We have a number of programmes designed to offer high quality physiotherapy and performance support to specific groups and individuals.
            <span className="text-green-500">*</span>.
          </motion.p>

          {/* Video CTA */}
        
        </motion.div>
      </div>
    </section>
  );
};

export default TestingSection;


