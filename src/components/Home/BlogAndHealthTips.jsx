'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contex/ThemeContext'; // Import Theme Hook

const BlogAndHealthTips = () => {
  const { darkMode } = useTheme(); // Get Dark Mode State

  const articles = [
    {
      title: 'How to Prevent Sports Injuries',
      excerpt: 'Learn about common sports injuries and effective prevention strategies...',
      link: '/blog/prevent-sports-injuries',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRir33ChGwwbXJCK6lgKwexRX3k4SnXRzE2AQ&s'
    },
    {
      title: 'Best Diet Plan for Athletes',
      excerpt: 'Discover the optimal diet for peak athletic performance...',
      link: '/blog/athlete-diet',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRir33ChGwwbXJCK6lgKwexRX3k4SnXRzE2AQ&s'
    },
    {
      title: 'Latest Sports Medicine Research',
      excerpt: 'Stay updated on the cutting-edge advancements in sports medicine...',
      link: '/blog/sports-medicine-research',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRir33ChGwwbXJCK6lgKwexRX3k4SnXRzE2AQ&s'
    },
  ];

  const videos = [
    {
      title: 'Expert Interview: Injury Prevention',
      videoUrl: 'https://www.youtube.com/embed/Z3az3vZ7lO4',
      thumbnail: '/images/injury-prevention-thumbnail.jpg'
    },
    {
      title: "Athlete's Diet Tips",
      videoUrl: 'https://www.youtube.com/embed/BnYFSUkxevw',
      thumbnail: '/images/diet-tips-thumbnail.jpg'
    },
  ];

  return (
    <section className={`py-20 transition-colors duration-500 relative ${
      darkMode ? 'bg-gradient-to-b from-gray-800 via-black to-gray-800 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="container mx-auto px-6">
        

      


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3">
            {/* Brushstroke Background */}
            <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
              darkMode ? 'bg-green-600' : 'bg-green-500'
            }`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-2xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong>Blog & Health Tips</strong>
            </h2>
          </div>

          <p className={`w-full mx-auto mt-6 uppercase font-extrabold ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
             Stay updated with the latest **sports health insights** & expert recommendations.
          </p>
        </motion.div>




  



        {/* Articles Section */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">

        <div className="flex justify-center">
          <h3 className={`text-2xl font-semibold  px-6 py-3 shadow-lg mb-6 text-center uppercase ${
            darkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-gray-900'
          }`}>Articles & Tips</h3>

</div>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative group rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                  darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
                }`}
              >
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6 text-center">
                  <h4 className={`text-lg font-semibold ${
                    darkMode ? 'text-green-300' : 'text-green-700'
                  }`}>{article.title}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{article.excerpt}</p>
                  <a href={article.link} className="mt-4 inline-block bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-md">
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Blogs Section */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className={`text-2xl font-semibold text-center ${
            darkMode ? 'text-green-300' : 'text-green-700'
          }`}>Video Blogs & Interviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative group rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
                  darkMode ? 'bg-white/10 backdrop-blur-md border-gray-700' : 'bg-white border-gray-300'
                }`}
              >
                <div className="relative aspect-video">
                  <iframe width="100%" height="100%" src={video.videoUrl} title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                    className="absolute inset-0 rounded-t-2xl"></iframe>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className={`text-lg font-semibold ${
                    darkMode ? 'text-green-300' : 'text-green-700'
                  }`}>{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogAndHealthTips;
