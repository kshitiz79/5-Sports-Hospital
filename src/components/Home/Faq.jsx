'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext';

const FAQ = () => {
  const { darkMode } = useTheme();
  const [activeIndex, setActiveIndex] = useState(null);
  const [allCollapsed, setAllCollapsed] = useState(false);

  const faqs = [
    // Same FAQ data as before, omitted for brevity
    {
      question: 'Is my program individualized for me?',
      answer:
        'Yes. Every program is tailored to your unique needs based on the Elite Athlete GamePlan™ assessment.'
    },
    {
      question: 'How are my improvements measured?',
      answer:
        'We track performance continuously in training and through formal testing every five weeks. What doesn’t get measured, doesn’t get improved.'
    },
    {
      question: 'How many sessions do I need per week?',
      answer:
        'Depending on your background and goals, we recommend 2-3+ sessions weekly, personalized to your schedule and season.'
    },
    {
      question: 'Will I be supervised during training?',
      answer:
        'Yes, we maintain a 4:1 athlete-to-coach ratio in over 30 small-team sessions per week.'
    },
    {
      question: 'Do you work on speed and agility?',
      answer:
        'Yes. Our specific on-field sessions improve sprint mechanics, agility, and movement efficiency.'
    },
    {
      question: 'What is the minimum age to join?',
      answer:
        'You must be at least 16 years old. Younger athletes can join our Emerging Athlete Program.'
    },
    {
      question: 'I live far away. Can I still join?',
      answer:
        'Yes, we offer online coaching if you’re unable to attend in person. Remote athletes get full support and even gear options.'
    },
    {
      question: 'Can I train at home once a week?',
      answer:
        'Absolutely. We support hybrid schedules and provide equipment for at-home training when needed.'
    },
    {
      question: 'Why is the program one year long?',
      answer:
        'Because long-term development needs long-term commitment. Great athletes aren’t built in a day.'
    },
    {
      question: 'Can I join for a shorter duration?',
      answer:
        'Yes, in special cases (e.g., fly-in, fly-out pros), we offer 3–6 month blocks. Additional fees may apply.'
    },
    {
      question: 'What are the payment options?',
      answer:
        'You can prepay annually for a discount or pay weekly via Stripe (processing fees apply).'
    },
    {
      question: 'Do you offer online training?',
      answer:
        'Yes, for some remote athletes. We also refer local coaches where possible but can support online when suitable.'
    },
    {
      question: 'What’s the cost of joining?',
      answer:
        'The yearly cost for ADP is $5044 (approx. $97/week or $13/day). Weekly payment plans are available.'
    },
    {
      question: 'Do I get a discount for upfront payment?',
      answer:
        'Yes, upfront payment gets you an additional 10% off the weekly rate.'
    },
    {
      question: 'I don’t like direct debit. Are there alternatives?',
      answer:
        'Yes, you can prepay the full year if you prefer not to use direct debit.'
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setAllCollapsed(false); // Reset allCollapsed when toggling individual FAQs
  };

  const toggleAll = () => {
    if (allCollapsed) {
      // Expand all FAQs
      setActiveIndex(0); // Open the first FAQ (or use an array to open all)
      setAllCollapsed(false);
    } else {
      // Collapse all FAQs
      setActiveIndex(null);
      setAllCollapsed(true);
    }
  };
  return (
    <section
    className={`py-24 relative overflow-hidden transition-colors duration-500 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}
  >
    {/* Background Decorative Element */}
    <div
      className={`absolute inset-0 opacity-10 ${
        darkMode ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light'
      }`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20zM40 40V20L20 40z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2
          className={`text-4xl md:text-5xl font-extrabold uppercase tracking-tight drop-shadow-xl ${
            darkMode ? 'text-green-400' : 'text-green-600'
          }`}
        >
          Frequently Asked Questions
        </h2>
        <p
          className={`text-lg md:text-xl mt-4 max-w-3xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Everything you need to know about training, rehab, memberships, and recovery at 5 Sports Hospital.
        </p>
      </motion.div>

      {/* Collapse/Expand All Button */}
      <div className="flex justify-end mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleAll}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            darkMode
              ? 'bg-green-500 text-gray-900 hover:bg-green-400'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {allCollapsed ? 'Expand All' : 'Collapse All'}
        </motion.button>
      </div>

      {/* FAQ Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:shadow-2xl ${
              darkMode
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700'
                : 'bg-white/90 border border-gray-200'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
              className={`w-full text-left px-6 py-5 flex justify-between items-center text-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                darkMode
                  ? 'text-green-400 hover:text-yellow-300'
                  : 'text-green-700 hover:text-yellow-800'
              }`}
            >
              <span>{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className={`px-6 pb-5 text-base leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
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