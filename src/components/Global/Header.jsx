'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const navItems = [

  { name: 'Who We Are', href: '/about-page' },
  { name: 'Athletes', href: '/services' },          
  { name: 'ORTHOPEDIC & SURGERY', href: '/what-we-offer' },   
  { name: 'Get in Touch', href: '/contact-us' },    
  { name: 'Cosmo dental', href: '/contact-us' },    
  { name: 'Beyond Sports', href: '/contact-us' },    
];
;

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-500 py-2 ${darkMode ? 'bg-white   backdrop-blur-md border-b border-gray-700' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-6  flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/nav.png" alt="Logo" className="h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 flex-grow justify-center font-bold uppercase tracking-tighter leading-none text-black">
  {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="transition hover:text-gray-300"
    >
      {item.name}
    </Link>
  ))}
</nav>


        {/* Theme Toggle & Contact Button */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
         

          {/* Contact Button (Hidden in Mobile) */}
          <Link
            href="/contact-us"
            className={`hidden md:block px-5 py-2  font-archivo rounded-md font-bold transition ${
              darkMode
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-green-800 hover:bg-green-600 text-white'
            }`}
          >
          Call Us
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className={`md:hidden p-4 transition-all duration-300 ${darkMode ? 'bg-black/90 text-gray-300' : 'bg-white text-gray-800'}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-center transition hover:text-green-400"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="block mt-4 px-4 py-2 text-center font-bold rounded-md transition shadow-md hover:shadow-lg"
            style={{
              backgroundColor: darkMode ? '#22C55E' : '#2563EB',
              color: '#FFFFFF',
            }}
          >
            Call Us
          </Link>
        </nav>
      )}
    </header>
  );
}
