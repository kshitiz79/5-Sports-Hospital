'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Volleyball, X } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook
import { FaBasketballBall } from 'react-icons/fa';

const navItems = [
  {
    name: 'Who We Are',
    href: '/about-page',
    submenu: [
      { name: 'About Us', href: '/about-page#team' },
      { name: 'Our Team', href: '/about-page#mission' },
      { name: 'Get In Touch', href: '/about-page#mission' },
    ],
  },
  {
    name: 'Athletes',
    href: '/',
    submenu: [
      { name: 'Injury', href: '/athletes/1' },
      { name: 'Performance Lab', href: '/athletes/2' },
      { name: 'Programmes', href: '/athletes/2' },
      { name: 'Sports Psychology', href: '/athletes/2' },
      { name: 'Sports Nutrition', href: '/athletes/2' },
    ],
  },
  {
    name: 'ORTHOPEDIC & SURGERY',
    href: '/Orthopedicss',
    submenu: [
      { name: 'Orthobiologicals & regenerative therapies', href: '/what-we-offer#treatments' },
      { name: 'Arthritis & joint preservation techniques', href: '/what-we-offer#surgeries' },
      { name: 'Robotic knee replacement ', href: '/what-we-offer#surgeries' },
      { name: 'Sports injuries and ligament surgery', href: '/what-we-offer#surgeries' },
      { name: 'Arthroscopy', href: '/what-we-offer#surgeries' },
      { name: 'Fracture management ', href: '/what-we-offer#surgeries' },
      { name: 'Surgical second opinion', href: '/what-we-offer#surgeries' },
    ],
  },
  {
    name: 'Programs',
    href: '/programs',
    submenu: [
      { name: 'Rehab Program', href: '/programs#rehab' },
      { name: 'Pain Management Program', href: '/programs#strength' },
      { name: 'Strength Enhancement Program', href: '/programs#strength' },
      { name: 'Athelete Development Program', href: '/programs#strength' },
    ],
  },
  {
    name: 'Testing',
    href: '/Testing',
    submenu: [
      { name: 'VO₂ MAX & LACTATE THRESHOLD', href: '/Vo2MaxTestSection' },
      { name: 'RESTING METABOLIC RATE & BODY COMPOSITION', href: '/Testing#Metabolic' },
      { name: 'MUSCLE OXYGEN MONITORING', href: '/programs#strength' },
    ,
    ],
  },
  {
    name: 'Cosmo Dental',
    href: '/contact-us',
    submenu: [
      { name: 'Cosmo Dental', href: '/beyond-sports#education' },
      { name: 'Sports', href: '/beyond-sports#careers' },
     
    ],
    submenuitems:[
      {name:FaBasketballBall},
      {name:Volleyball},
    ]
  },
];

export default function Header() {
  const { darkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full h-full transition-colors duration-500 py-2 ${
        darkMode
          ? 'bg-white backdrop-blur-md border-b border-gray-700'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img src="/nav.png" alt="Logo" className="h-16 m-2" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 flex-grow justify-center text-xl font-bold uppercase tracking-tighter leading-none text-black relative">
          {navItems.map((item, index) => (
            <div key={index} className="group relative">
              <div className="flex items-center gap-1 cursor-pointer transition hover:text-green-600 text-xl">
                <Link href={item.href}>{item.name}</Link>
                {item.submenu && (
                  <span className="transition-transform transform group-hover:rotate-180 text-sm">
                    ▼
                  </span>
                )}
              </div>

              {/* Dropdown */}
              {item.submenu && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block bg-white text-black shadow-md rounded-md w-48 z-50 text-xl">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="block px-4 py-2 text-lg hover:bg-gray-100"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact-us"
            className={`hidden md:block px-5 py-2 uppercase text-2xl font-archivo rounded-md font-bold transition ${
              darkMode
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-green-800 hover:bg-green-600 text-white'
            }`}
          >
            Call Us
          </Link>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="h-6 w-6 text-gray-300 align-item-left" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className={`md:hidden p-4 transition-all duration-300 ${
            darkMode ? 'bg-black/90 text-gray-300' : 'bg-white text-gray-800'
          }`}
        >
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
            className="block mt-4 px-4 py-2 text-center uppercase font-bold rounded-md transition shadow-md hover:shadow-lg"
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
