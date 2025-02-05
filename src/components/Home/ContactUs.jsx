'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const ContactUs = () => {
  const { darkMode } = useTheme();

  return (
    <section className={`py-20 relative transition-colors duration-500 ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-6">


  


  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3">
            {/* Brushstroke Background */}
            <span className={`absolute inset-0 ${darkMode ? 'bg-green-600' : 'bg-green-700'} w-full h-full rounded-lg skew-y-1`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-4xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Get in Touch</strong> 
            </h2>
          </div>

          <p className={`max-w-2xl mx-auto mt-5 uppercase font-extrabold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Have questions? Reach out to us! We're here to help you.
          </p>
        </motion.div>






        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`border rounded-xl shadow-lg p-8 transition-all duration-300 ${
              darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
            }`}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Send us a Message</h3>
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
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Contact Details</h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              Our support team is available for queries and appointments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>+1 (234) 567-890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>contact@sportsmed.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>123 Sports Avenue, NY</p>
              </div>

              <div className="mt-6">
              <iframe
                title="Google Maps Location"
                className="w-full h-56 rounded-xl shadow-lg"
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





