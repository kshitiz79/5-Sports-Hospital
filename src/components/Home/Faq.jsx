'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext'; // Make sure your ThemeContext is set up and provided globally

const FAQ = () => {
  const { darkMode } = useTheme(); // Access the global darkMode state
  const faqs = [
    { 
      question: "How long does sports injury recovery take?", 
      answer: "Recovery time varies depending on the severity and type of injury." 
    },
    { 
      question: "What is sports physiotherapy, and how does it help?", 
      answer: "Sports physiotherapy focuses on preventing, assessing, and treating injuries related to sports and exercise." 
    },
    { 
      question: "Do you offer special rehab programs for professional athletes?", 
      answer: "Yes, we offer customized rehab programs tailored to the needs of professional athletes." 
    },
    { 
      question: "What are the consultation charges?", 
      answer: "Please contact us for information on our consultation charges." 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`py-20 relative transition-colors duration-500 ${darkMode ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
     



 <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3">
            {/* Brushstroke Background */}
            <span className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
              darkMode ? 'bg-green-600' : 'bg-green-700'
            }`}></span>
            
            {/* Text with Shadow */}
            <h2 className="text-xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong> Frequently Asked Questions</strong>
            </h2>
          </div>

          <p className={`w-full mx-auto mt-3 uppercase font-extrabold ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
                       Have questions? We’ve got answers. Discover everything you need to know about our services and processes.
          </p>
        </motion.div>










        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${darkMode ? 'bg-white/10 backdrop-blur-md border border-gray-700' : 'bg-white border border-gray-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-6 py-4 flex justify-between items-center text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-green-300 hover:text-green-400' : 'text-green-700 hover:text-green-800'}`}
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-6 pb-4 overflow-hidden ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
