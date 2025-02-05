'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Icons

const Footer = () => {
  const { darkMode } = useTheme(); // Retrieve Dark Mode State
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`transition-colors duration-500 py-10 ${
        darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Logo & Branding */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <Image
            src="/nav.png" // Replace with your logo
            alt="5 Sports Hospital Logo"
            width={180}
            height={60}
            priority
          />
          <p className={`text-center md:text-right mt-4 md:mt-0 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Your trusted partner in Sports Medicine & Rehabilitation
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-400">Home</a></li>
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/services" className="hover:text-green-400">Services</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="/services#sports-medicine" className="hover:text-green-400">Sports Medicine</a></li>
              <li><a href="/services#physiotherapy" className="hover:text-green-400">Physiotherapy</a></li>
              <li><a href="/services#nutrition" className="hover:text-green-400">Sports Nutrition</a></li>
              <li><a href="/services#rehab" className="hover:text-green-400">Rehabilitation</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <p>123 Main Street, Anytown, CA 91234</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: info@5sports.com</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-transform transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Credits */}
        <div className="text-center border-t border-gray-600 pt-6">
          <p className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            &copy; {currentYear} 5 Sports Hospital. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
