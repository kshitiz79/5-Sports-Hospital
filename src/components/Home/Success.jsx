'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaQuoteLeft, FaStar, FaRegStar, FaUserTie } from 'react-icons/fa';
import { useTheme } from '@/contex/ThemeContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'RAHUL SHARMA',
    designation: 'Athlete',
    image: '/placeholder.png',
    rating: 5,
    feedback:
      'Their expertise in sports medicine has transformed my recovery process. The personalized treatment helped me get back on track quickly! The attention to detail and tailored approach made all the difference in my rehabilitation journey.',
  },
  {
    name: 'PRIYA MEHTA',
    designation: 'Fitness Enthusiast',
    image: '/placeholder.png',
    rating: 4,
    feedback:
      'The team provided an incredible rehabilitation program that was tailored just for me, taking into account my unique needs and goals. The guidance, support, and expertise have significantly improved my overall fitness and well-being.',
  },
  {
    name: 'VIKAS SINGH',
    designation: 'Professional Runner',
    image: '/placeholder.png',
    rating: 5,
    feedback:
      'I received exceptional guidance and unwavering support throughout my training journey. The personalized coaching, attention to detail, and expert feedback have been invaluable in helping me achieve my personal bests.',
  },
  {
    name: 'ANANYA RAO',
    designation: 'Yoga Instructor',
    image: '/placeholder.png',
    rating: 4,
    feedback:
      'The posture correction program has made a remarkable difference in my mobility and flexibility. I no longer experience the discomfort I used to, and my overall movement has improved significantly, enhancing my yoga practice.',
  },
];

export default function SuccessStories() {
  const { darkMode } = useTheme();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section
    className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 opacity-10 ${
          darkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'
        }`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20zM40 40V20L20 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className=" mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`absolute inset-0 w-full h-full rounded-lg -skew-y-2 ${
                darkMode ? 'bg-green-500/30' : 'bg-green-500'
              }`}
            />
            <h2
              className={`relative text-4xl md:text-5xl font-extrabold uppercase tracking-tight drop-shadow-xl ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              What They Say About Us
            </h2>
          </div>
          <p
            className={`text-lg md:text-xl mt-4 max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Empower your game with insights from our satisfied clients.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          className="mx-auto px-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className={`relative p-6 rounded-2xl shadow-xl transition-all duration-300 ${
                  darkMode
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700'
                    : 'bg-white/90 border border-gray-200'
                }`}
              >
                {/* Quote Icon */}
                <FaQuoteLeft
                  className={`text-green-500 text-3xl absolute top-4 left-4 ${
                    darkMode ? 'opacity-70' : 'opacity-100'
                  }`}
                />

                {/* Rating */}
                <div className="flex text-yellow-400 mb-3 mt-8">
                  {[...Array(5)].map((_, i) =>
                    i < testimonial.rating ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>

                {/* Testimonial Text */}
                <p
                  className={`italic text-base md:text-lg mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  "{expanded === index
                    ? testimonial.feedback
                    : `${testimonial.feedback.slice(0, 100)}...`}"
                </p>
                {testimonial.feedback.length > 100 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleExpand(index)}
                    className={`text-sm font-semibold ${
                      darkMode ? 'text-green-400' : 'text-green-600'
                    }`}
                    aria-label={
                      expanded === index
                        ? 'Collapse testimonial'
                        : 'Expand testimonial'
                    }
                  >
                    {expanded === index ? 'Read Less' : 'Read More'}
                  </motion.button>
                )}

                {/* User Info */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 text-white text-2xl overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute flex items-center justify-center w-full h-full">
                      <FaUserTie />
                    </div>
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-lg ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p
                      className={`text-sm ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`}
                    >
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}