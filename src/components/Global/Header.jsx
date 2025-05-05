'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext';

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
    href: '',
    submenu: [
      { name: 'Injury', href: '/Atheletes/injury' },
      { name: 'Performance Lab', href: '/Atheletes/performance-lab' },
      { name: 'Programmes', href: '/Atheletes/programmes' },
      { name: 'Sports Psychology', href: '/Atheletes/sports-pychology' },
      { name: 'Sports Nutrition', href: '/Atheletes/sports-nutrients' },
    ],
  },
  {
    name: 'ORTHOPEDIC & SURGERY',
    href: '/Orthopedicss',
    submenu: [
      { name: 'Orthobiologicals & regenerative therapies', href: '/Orthopedicss/orthobiological' },
      { name: 'Arthritis & joint preservation techniques', href: '/Orthopedicss/arthritis' },
      { name: 'Robotic knee replacement ', href: '/Orthopedicss/robotic' },
      { name: 'Sports injuries and ligament surgery', href: '/Orthopedicss/sports' },
      { name: 'Arthroscopy', href: '/Orthopedicss/arthroscopy' },
      { name: 'Fracture management ', href: '/Orthopedicss/fracture' },
      { name: 'Surgical second opinion', href: '/Orthopedicss/surgical' },
    ],
  },
  {
    name: 'Programs',
    href: '/programs',
    submenu: [
      { name: 'Sports Physio Program', href: '/programs/sports' },
      { name: 'Surgical Prehab & Rehab', href: '/programs/surgical' },
      { name: 'Emerging  Athelete Program', href: '/programs/emerging' },
      { name: 'Athelete Development Program', href: '/programs/athelete' },
    ],
  },
  {
    name: 'Testing',
    href: '/Testing',
    submenu: [
      { name: 'Sports Testing', href: '/Testing/gallery' },
      { name: 'VO₂ MAX & LACTATE THRESHOLD', href: '/Vo2MaxTestSection' },
      { name: 'RESTING METABOLIC RATE & BODY COMPOSITION', href: '/Testing#Metabolic' },
      { name: 'MUSCLE OXYGEN MONITORING', href: '/programs#strength' },
    ],
  },
  {
    name: 'Cosmo Dental',
    href: '/contact-us',
    submenu: [
      { name: 'Cosmo Dental', href: '/beyond-sports#education' },
      { name: 'Sports', href: '/beyond-sports#careers' },
    ],
  },
];

export default function Header() {
  const { darkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setExpandedMenu(expandedMenu === index ? null : index);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full py-3 transition-colors duration-500 ${
        darkMode
          ? 'bg-white border-b border-gray-300 shadow-md'
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo5.png" alt="Logo" className="h-14" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-semibold text-gray-800 uppercase text-base relative">
          {navItems.map((item, index) => (
            <div key={index} className="group relative">
              <Link
                href={item.href}
                className="hover:text-green-600 transition-colors duration-200 flex items-center gap-1"
              >
                {item.name}
                {item.submenu && (
                  <span className="text-sm group-hover:rotate-180 transition-transform">▼</span>
                )}
              </Link>

              {item.submenu && (
                <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white shadow-xl rounded-lg w-64 py-2 z-50 transition-all duration-300">
                  {item.submenu.map((sub, subIdx) => (
                    <Link
                      key={subIdx}
                      href={sub.href}
                      className="px-4 py-2 hover:bg-green-100 text-sm transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-4 pt-4 pb-6 transition-all duration-300 space-y-4 ${
            darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
          }`}
        >
          {navItems.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => toggleSubMenu(i)}
                className="w-full flex justify-between items-center py-2 font-medium"
              >
                {item.name}
                {item.submenu && (
                  expandedMenu === i ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )
                )}
              </button>
              {item.submenu && expandedMenu === i && (
                <div className="ml-4 text-sm space-y-1">
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      key={subIndex}
                      href={sub.href}
                      className="block hover:text-green-500 transition"
                    >
                      • {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact-us"
            className="block mt-4 bg-green-600 text-white text-center px-4 py-2 rounded-md uppercase font-bold"
          >
            Call Us
          </Link>
        </div>
      )}
    </header>
  );
}
