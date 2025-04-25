'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext';
import { Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

// Reusable Section Wrapper Component
const SectionWrapper = ({ children, className }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className}`}
  >
    {children}
  </motion.section>
);

export default function AboutUs() {
  const { darkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`min-h-screen font-space-grotesk transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} ${spaceGrotesk.variable}`}>
      {/* Hero Section */}
      <SectionWrapper className={`bg-gradient-to-br ${darkMode ? 'from-gray-900 to-gray-800' : 'from-green-50 to-white'}`}>
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h-2V4h-4V2h4V-2h2v2h4v2h-4z' fill='%239CA3AF' fill-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <motion.nav variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex justify-center text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-green-600 dark:text-green-500">About Us</span>
          </motion.nav>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400 dark:from-green-400 dark:to-green-200">About Us</motion.h2>
          <motion.p variants={itemVariants} className="text-lg sm:text-xl leading-relaxed mb-10 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At 5 Sports, we redefine sports medicine with a focus on unlocking athletic potential. Our team, with over 18 years of expertise, delivers innovative diagnostics, rapid recovery protocols, and personalized injury prevention strategies.
          </motion.p>
          <motion.button variants={itemVariants} className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${darkMode ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}>Watch Our Story</motion.button>
        </div>
      </SectionWrapper>

      {/* 5 Sports Hospital Section */}
      <SectionWrapper className="bg-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`rounded-2xl shadow-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} transform hover:shadow-3xl transition-all duration-300`}>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">Why Choose 5 Sports?</motion.h2>
            <motion.ul variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: '360° Ortho & Sports Care', desc: 'All-in-one orthopedic & sports performance services—diagnostics to recovery under one roof.' },
                { title: 'Elite-Grade Facilities', desc: 'State-of-the-art diagnostics and training tech used by pros around the globe.' },
                { title: 'Athletes of All Levels', desc: 'Tailored programs for beginners, semi-pro, and professional athletes.' },
                { title: 'Pediatric to Pro Coverage', desc: 'Age-specific treatment plans from childhood (5+) to peak performance years.' },
              ].map((item, index) => (
                <motion.li key={index} variants={itemVariants} className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-opacity-10 hover:bg-green-100 dark:hover:bg-gray-700 transition-colors duration-200 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-green-50'}`}>
                  <span className="text-green-500 text-2xl">●</span>
                  <div>
                    <strong className="text-green-600 dark:text-green-400 text-lg sm:text-xl">{item.title}</strong>
                    <p className="text-gray-700 dark:text-gray-300 text-base">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={itemVariants} className="mt-8 text-lg text-gray-700 dark:text-gray-300">Partner with us to achieve peak performance through world-class care.</motion.p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Founder Section */}
      <SectionWrapper className={`bg-gradient-to-b ${darkMode ? 'from-gray-900 to-gray-800' : 'from-white to-green-50'}`}>
        <div className="container mx-auto max-w-5xl">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`rounded-2xl shadow-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold mb-6 text-green-600 dark:text-green-400">Our Founders</motion.h2>
            <motion.p variants={itemVariants} className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">Dr. Nataraj H M and Dr. Pooja Jhade are pioneers transforming sports medicine and postural care with global recognition.</motion.p>

            {/* Dr. Nataraj Profile Card */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-blue-900'} text-white shadow-lg mb-10`}
            >
              <div className="relative -top-16 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/doctor2.png" // Update this to the actual image path
                  alt="Dr. Nataraj H M"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">Dr. Nataraj H M</h3>
                <p className="text-gray-300 text-base">HOD and Senior Consultant, Orthopaedics</p>
                <p className="mt-4 text-base leading-relaxed max-w-2xl mx-auto">
                  Dr. Nataraj H M is a leading orthopedic surgeon specializing in robotic knee replacement, arthroscopic surgeries, and sports injury treatments. With pioneering achievements like Southeast Asia’s first Zimmer-Biomet robotic knee surgery and extensive training in Italy, Singapore, and South Korea, he brings cutting-edge expertise to 5 Sports.
                </p>
              </div>
            </motion.div>

            {/* Dr. Pooja Profile Card */}
            <motion.div variants={itemVariants} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-blue-900'} text-white shadow-lg`}>
              <div className="relative -top-16 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image src="/doctor.png" alt="Dr. Pooja Jhade" layout="fill" objectFit="cover" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-1">Dr. Pooja Jhade</h3>
                <p className="text-gray-300 text-base">Founder, CEO & Certified Posture Expert</p>
                <p className="mt-4 text-base leading-relaxed max-w-2xl mx-auto">
                  Dr. Pooja Jhade is India’s first Certified Posture Expert from the American Posture Institute, holding a dual PhD in Posture and Postural Neurology. With 13+ years of experience, she has treated thousands of patients and developed groundbreaking research on musculoskeletal collapse prevention.
                </p>
              </div>
            </motion.div>

            {/* Optional Detailed Information for Dr. Nataraj */}
            <motion.div variants={itemVariants} className="mt-10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-green-600 dark:text-green-400">More About Dr. Nataraj H M</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-500 mb-2">Field of Expertise</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {[
                        'Robotic knee replacement surgery',
                        'Computer navigated knee replacement',
                        'Arthroscopic surgeries for ACL and shoulder',
                        'Minimally invasive joint replacement',
                        'Keyhole surgeries for sports injuries',
                        'Shoulder rotator cuff and labrum repairs',
                        'Fracture and joint reconstructions',
                        'Regenerative therapy – PRP, stem cells',
                      ].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-500 mb-2">Achievements</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {[
                        'First in Southeast Asia to perform Zimmer-Biomet robotic knee surgery',
                        'India’s first computer navigated ACL using GRS protocol',
                        'Pioneer in 4K adjustable robotic planning and execution',
                        'First to perform arthroscopic procedures with "Vim Fix LR"',
                        'Innovator in Sureshtech meniscal repair device usage',
                      ].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-green-500 mb-2">Medical Education</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {[
                        'MBBS – KIMS, Bangalore',
                        'MS Orthopaedics – KSHEMA, Mangalore',
                        'MCh Orthopaedics – American Institute of Medicine, Seychelles',
                        'Fellowships: Italy, Singapore, South Korea (Robotics, Arthroscopy, Sports Medicine)',
                      ].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-500 mb-2">Professional Memberships</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      {[
                        'ISAKOS – International Society of Arthroscopy & Sports Orthopaedics',
                        'Indian Orthopaedic Association',
                        'Indian Society of Hip and Knee Surgeons',
                        'Bangalore Orthopaedic Society',
                        'Canara Orthopaedic Society',
                      ].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="mt-8 text-lg text-gray-700 dark:text-gray-300">Our founders’ vision drives the future of sports medicine with excellence and innovation.</motion.p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper className="bg-transparent">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-600 dark:text-green-400 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Have questions? Reach out to us! We're here to help you.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`rounded-xl shadow-lg p-6 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border p-3 rounded-md outline-none transition ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-green-500'}`}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full border p-3 rounded-md outline-none transition ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-green-500'}`}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full border p-3 rounded-md outline-none transition ${darkMode ? 'bg-gray-700 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-green-500'}`}
                  required
                ></textarea>
                <button
                  type="submit"
                  className={`w-full font-semibold py-3 rounded-md transition-all duration-300 ${darkMode ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-green-600 hover:bg-green-700 text-white'}`}
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h3 className="text-xl font-semibold mb-4 text-green-600 dark:text-green-400">Contact Details</h3>
              <p className="mb-6 text-sm text-gray-700 dark:text-gray-400">Our support team is available for queries and appointments.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <p className="text-gray-900 dark:text-gray-300">9353555855</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <p className="text-gray-900 dark:text-gray-300">fivesportshospital@gmail.com</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                  <p className="text-gray-900 dark:text-gray-300">Site No 40 & 41, 1st floor MPS Building, Ambedkar Nagar Mullur Sarjapur Road, Carmelram Bangalore, Karnataka - 560035 IN</p>
                </div>
                <div className="mt-6">
                  <iframe
                    title="5 Sports Hospital Location"
                    className="w-full h-48 rounded-xl shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.684747985418!2d77.7061535148219!3d12.927923990891082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a4e0c6b6b5%3A0x6b9b0c7e8c6e7f1a!2sSarjapur%20Main%20Rd%2C%20Carmelram%2C%20Bengaluru%2C%20Karnataka%20560035%2C%20India!5e0!3m2!1sen!2sus!4v1634567891234!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}