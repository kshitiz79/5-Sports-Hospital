'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';
import programsData from './../../../../public/programs.json';

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

const ProgramCard = ({ title, description, image, reverse }) => (
  <motion.div
    variants={itemVariants}
    className={`e p-6 sm:p-8  flex flex-col ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center `}
  >
    <div className="md:w-1/2 p-4 sm:p-6">
      <h3 className="text-2xl sm:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200">
        {title}
      </h3>
      <p className="mt-4 text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
    <div className="md:w-1/2 relative h-64 sm:h-80">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
    </div>
  </motion.div>
);

export default function Page() {
  return (
    <div className={`min-h-screen ${spaceGrotesk.variable}`}>
      {/* Header Section */}


      {/* Best Bit Section */}
     

      {/* Programs Section */}
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

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200"
          >
            PROGRAMS
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-2xl sm:text-3xl leading-relaxed mb-10 text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We have a number of programmes designed to offer high-quality physiotherapy and performance support to specific groups and individuals.
            <span className="text-green-500">*</span>.
          </motion.p>






      {/* Best Bit Section */}
    










          <div className="grid md:grid-cols-1 gap-8 sm:gap-10">
            {programsData.map((program, index) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                image={program.image}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
