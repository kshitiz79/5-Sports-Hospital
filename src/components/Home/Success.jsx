"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft, FaStar, FaRegStar, FaUserTie } from "react-icons/fa";
import { useTheme } from '@/contex/ThemeContext';
import { motion } from 'framer-motion';
const testimonials = [
  {
    name: "RAHUL SHARMA",
    designation: "Athlete",
    image: "/placeholder.png",
    rating: 5,
    feedback:
      "Their expertise in sports medicine has transformed my recovery process. The personalized treatment helped me get back on track quickly!",
  },
  {
    name: "PRIYA MEHTA",
    designation: "Fitness Enthusiast",
    image: "/placeholder.png",
    rating: 4,
    feedback:
      "The team provided an incredible rehabilitation program that was tailored just for me, taking into account my unique needs and goals. The guidance, support, and expertise ",
  },
  {
    name: "VIKAS SINGH",
    designation: "Professional Runner",
    image: "/placeholder.png",
    rating: 5,
    feedback:
      "I received exceptional guidance and unwavering support throughout my training journey. The personalized coaching, attention to detail, and expert feedback have been invaluable.",
  },
  {
    name: "ANANYA RAO",
    designation: "Yoga Instructor",
    image: "/placeholder.png",
    rating: 4,
    feedback:
      "The posture correction program has made a remarkable difference in my mobility and flexibility. I no longer experience the discomfort I used to, and my overall movement has improved significantly.",
  },
];













export default function SuccessStories() {

  const { darkMode } = useTheme();
  return (
    <>
 <section
      className={`py-20 transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-800 via-black to-black text-white'
          : 'bg-gray-100 text-gray-900'
      } relative`}
    >
      <div className=" px-10 mt-20 md:mt-0">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3 mb-4">
            <span
              className={`absolute inset-0 w-full h-full rounded-lg ${
                darkMode ? 'bg-green-600' : 'bg-green-500'
              }`}
            ></span>
           <h2 className="text-xl md:text-5xl font-extrabold uppercase drop-shadow-lg relative">
  What They Say About Us
</h2>

          </div>
          <p
            className={`max-w-2xl mx-auto text-sm md:text-base font-extrabold uppercase ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Empower your game with insights provided 
          </p>
        </motion.div>




      {/* Testimonials Carousel */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2} // Ensures partial second card visibility on mobile
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView:   1   }, // Show 2 cards on tablets and larger screens
          1024: { slidesPerView: 2.5 },
        }}
        className="mx-auto px-4 "
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-900 p-6 rounded-lg text-left shadow-lg">
              {/* Quote Icon */}
              <FaQuoteLeft className="text-green-500 text-3xl absolute top-4 left-4 mb-8" />

              {/* Rating */}
              <div className="flex text-yellow-400 mb-3 mt-8">
                {[...Array(5)].map((_, i) =>
                  i < testimonial.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>

              {/* Testimonial Text */}
              <p className="italic text-gray-300 mb-4">"{testimonial.feedback}"</p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-700 text-white text-2xl">
                  <FaUserTie />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-green-500">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      </div>
    </section>
  
    </>
  );
}













