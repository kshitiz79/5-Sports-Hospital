'use client'

import React from 'react';
import { motion } from 'framer-motion';

const BlogAndHealthTips = () => {
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
    <section className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white relative">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-400">Blog & Health Tips</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest **sports health insights** & expert recommendations.
          </p>
        </motion.div>

        {/* Articles Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-green-300 mb-6 text-center">Articles & Tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6 text-center">
                  <h4 className="text-lg font-semibold text-green-300">{article.title}</h4>
                  <p className="text-gray-400">{article.excerpt}</p>
                  <a
                    href={article.link}
                    className="mt-4 inline-block bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-md"
                  >
                    Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Blogs Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-green-300 mb-6 text-center">Video Blogs & Interviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group bg-white/10 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.videoUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 rounded-t-2xl"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-green-300">{video.title}</h4>
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
