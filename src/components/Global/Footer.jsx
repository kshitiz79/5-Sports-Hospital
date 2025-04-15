'use client';

import React from 'react';

import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  const { darkMode } = useTheme(); // Retrieve Dark Mode State
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`transition-colors duration-500 py-10 relative border-t ${darkMode
          ? 'bg-gradient-to-b from-white via-white to-gray-200 text-white border-gray-700'
          : 'bg-gradient-to-b from-white via-gray-200 to-gray-300 text-gray-900 border-gray-300'
        }`}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 py-10 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/nav.png" alt="Logo" className="h-20 w-40" />
          <p className="mt-4 text-gray-400 max-w-md">
            A peak multidisciplinary excellence center for sports medicine, orthopedics,
            posture correction, and injury rehabilitation, including 11
            sub-specialties of advanced sports science.
          </p>
          <div className="flex space-x-4 mt-4 text-green-500 text-xl ">
            <a href="https://www.facebook.com/share/1BM9NaA5Th/" className="hover:text-yellow-600  transition-all"><FaFacebook /></a>
            <a href="https://www.linkedin.com/posts/5-sports-hospital_the-article-focuses-on-how-the-right-sports-activity-7308700337408811008-OGTp?utm_source=share&utm_medium=member_android&rcm=ACoAADpCLGQBwJLWvKUCfUEXskNd5ckGyVBLtgQ" className="hover:text-yellow-600  transition-all"><FaLinkedin /></a>
            <a href="https://www.instagram.com/5sportshospital?igsh=MXB2YnQ5d2wxcDNtYg==" className="hover:text-yellow-600  transition-all"><FaInstagram /></a>
            <a href="https://www.youtube.com/@5SportsHospital" className="hover:text-yellow-600 transition-all"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-500 font-bold text-lg">QUICK LINKS</h3>
          <div className="h-1 w-16 bg-green-500 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2 text-black">
            <FooterLink href="/" label="Home" />
            <FooterLink href="/about" label="About Us" />
            <FooterLink href="/services" label="Services" />
            <FooterLink href="/pricing" label="Pricing Plan" />
            <FooterLink href="/contact" label="Contact Us" />
            <FooterLink href="/privacy" label="Privacy & Policy" />
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-green-500 font-bold text-lg">PROGRAMS</h3>
          <div className="h-1 w-16 bg-green-500 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-2 text-black">
            <FooterLink href="#" label="Basic Exercise" />
            <FooterLink href="#" label="Advanced Exercises" />
            <FooterLink href="#" label="Bodybuilding" />
            <FooterLink href="#" label="Regular Workout" />
            <FooterLink href="#" label="Stretching Workout" />
            <FooterLink href="#" label="Crossfit" />
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-green-500 font-bold text-lg">CONTACT US</h3>
          <div className="h-1 w-16 bg-green-500 mt-2 mb-4 mx-auto md:mx-0"></div>
          <ul className="space-y-4 max-w-md text-black">
            <ContactItem
              icon={<MdLocationOn />}
              text="Site No 40 & 41, 1st floor MPS Building, Ambedkar Nagar Mullur Sarjapur Road, Carmelram Bangalore, Karnataka - 560035 IN"
              type="location"
              className="text-black h-12 w-12"
            />
            <ContactItem
              icon={<MdEmail />}
              text="fivesportshospital@gmail.com"
              type="email"
            />
            <ContactItem
              icon={<MdPhone />}
              text="9353555755 9353555855"
              type="phone"
            />
          </ul>

        </div>
      </div>




      {/* Copyright */}
      <div className="text-center text-black-500 mt-12 border-t border-gray-800 pt-4 flex justify-between">
        <h2 className='text-left ml-6 text-green-500'>Copyright © 2025 5Sports Hospital. All Rights Reserved.</h2>

        <a href="https://rbshstudio.com/" target="_blank" rel="noopener noreferrer">
          <h2 className="text-right mr-6 text-black">
            Powered by <span className="text-yellow-500">RBSH STUDIO</span>
          </h2>
        </a>




      </div>





    </footer>
  );
};

export default Footer;





const FooterLink = ({ href, label }) => (
  <li>
    <Link href={href} className="hover:text-green-500 transition-all">
      {label}
    </Link>
  </li>
);

const ContactItem = ({ icon, text, type }) => {
  let content;

  // Check type and render accordingly
  if (type === "email") {
    content = <a href={`mailto:${text}`} className="text-black hover:text-green-400">{text}</a>;
  } else if (type === "phone") {
    content = <a href={`tel:${text}`} className="text-black hover:text-green-400">{text}</a>;
  } else if (type === "location") {
    content = <a href={`https://www.google.com/maps/search/?q=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" className="text-black hover:text-green-400">{text}</a>;
  } else {
    content = <span>{text}</span>;
  }

  return (
    <li className="flex items-center justify-center md:justify-start space-x-2">
      <span className="text-green-500 text-xl hoven:text-yellow-500">{icon}</span>
      <span>{content}</span>
    </li>
  );
};


