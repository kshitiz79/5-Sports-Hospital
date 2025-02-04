import React from 'react';
import Image from 'next/image'; // If you're using next/image for optimized images

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/images/logo.png" // Replace with your logo path
            alt="5 Sports Hospital Logo"
            width={150} // Adjust width as needed
            height={50} // Adjust height as needed
            priority // Optional: Prioritize loading for above-the-fold content
          />
        </div>

        {/* Navigation Links (Optional) */}
        <div className="mb-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="/" className="text-gray-300 hover:text-white">Home</a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-white">About Us</a>
            </li>
            <li>
              <a href="/services" className="text-gray-300 hover:text-white">Services</a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-4 text-gray-400">
          <p>123 Main Street, Anytown, CA 91234</p>
          <p>Phone: +1 (555) 123-4567 | Email: info@5sports.com</p>
        </div>

        {/* Social Media Links (Optional) */}
        <div className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* Add your social media icons (e.g., Font Awesome, React Icons) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* ... (SVG path for Facebook, Twitter, etc.) */}
                </svg>
              </a>
            </li>
            {/* ... more social media links */}
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          &copy; {currentYear} 5 Sports Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;