'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about-page' },

  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog-page' },
  { name: 'Contact Us', href: '/contact-us' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo on the Left */}
        <Link href="/" className="flex-shrink-0">
          <img src="/nav.png" alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Nav Links in the Center */}
        <nav className="hidden md:flex gap-6 flex-grow justify-center font-montserrat-bold ">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-blue-500 transition font-montserrat-bold "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button on the Right */}
        <div className="hidden md:flex flex-shrink-0">
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-800 hover:text-blue-500 transition"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600 transition"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}