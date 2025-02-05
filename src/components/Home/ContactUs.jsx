'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white relative">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions? Reach out to us! We're here to help you with **appointments, consultations, and inquiries.**
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-green-300 mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 text-white border border-gray-600 p-3 rounded-md outline-none focus:border-green-400 transition"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 text-white border border-gray-600 p-3 rounded-md outline-none focus:border-green-400 transition"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-white/10 text-white border border-gray-600 p-3 rounded-md outline-none focus:border-green-400 transition"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-300 mb-4">Contact Details</h3>
            <p className="text-gray-400 mb-6">
              Our support team is available to help you with any queries or appointments.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-400" />
                <p className="text-gray-300">+1 (234) 567-890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-green-400" />
                <p className="text-gray-300">contact@sportsmed.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-green-400" />
                <p className="text-gray-300">123 Sports Avenue, New York, NY</p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-6">
              <iframe
                title="Google Maps Location"
                className="w-full h-56 rounded-xl shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799132815!2d-74.25986715568886!3d40.69767006778708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18fbbfbd%3A0x8c0b2a7d0b7b3c02!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1629289997811!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
