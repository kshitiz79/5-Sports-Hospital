'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const ContactUs = () => {
  const { darkMode } = useTheme();

  return (
    <section 
      className={`py-16 px-4 md:px-8 relative transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="container mx-auto max-w-4xl"> 
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="relative inline-block px-3 py-2">
            <span className={`absolute inset-0 ${darkMode ? '' : 'bg-green-500'} w-full h-full rounded-lg skew-y-1`}></span>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Get in Touch</strong> 
            </h2>
          </div>
          <p  className={`text-3xl md:font-size-1.5rem mx-auto mt-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
            Have questions? Reach out to us! We're here to help you.
          </p>
        </motion.div>

        {/* Contact Form & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`border rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 w-full ${
              darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
            }`}
          >
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-500' : 'text-green-700'}`}>
              Send us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full border p-3 rounded-md outline-none transition ${
                  darkMode ? 'bg-white/10 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-400 focus:border-green-500'
                }`}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full border p-3 rounded-md outline-none transition ${
                  darkMode ? 'bg-white/10 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-400 focus:border-green-500'
                }`}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className={`w-full border p-3 rounded-md outline-none transition ${
                  darkMode ? 'bg-white/10 text-white border-gray-600 focus:border-green-400' : 'bg-gray-50 text-gray-900 border-gray-400 focus:border-green-500'
                }`}
                required
              ></textarea>
              <button
                type="submit"
                className={`w-full font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-md ${
                  darkMode
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-green-500' : 'text-green-700'}`}>
              Contact Details
            </h3>
            <p className={`mb-6 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Our support team is available for queries and appointments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>9353555855</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>fivesportshospital@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className={`w-12 h-12 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>Site No 40 & 41, 1st floor MPS Building, Ambedkar Nagar Mullur Sarjapur Road, Carmelram Bangalore, Karnataka - 560035 IN</p>
              </div>

              {/* Google Maps */}
              <div className="mt-6 w-full">
                <iframe
                  title="Google Maps Location"
                  className="w-full h-40 sm:h-48 md:h-56 rounded-xl shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799132815!2d-74.25986715568886!3d40.69767006778708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18fbbfbd%3A0x8c0b2a7d0b7b3c02!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629289997811!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;



