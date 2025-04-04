'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/contex/ThemeContext';

const FAQ = () => {
  const { darkMode } = useTheme();

  const faqs = [
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

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`py-20 relative transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative inline-block px-4 py-3">
            <span
              className={`absolute inset-0 w-full h-full rounded-lg skew-y-1 ${
                darkMode ? 'bg-green-600' : 'bg-green-500'
              }`}
            ></span>
            <h2 className="text-xl md:text-6xl font-extrabold uppercase drop-shadow-lg relative">
              <strong> Frequently Asked Questions</strong>
            </h2>
          </div>
          <p
            className={`w-full mx-auto mt-3 uppercase font-extrabold ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Everything you need to know about training, rehab, memberships, and recovery at 5 Sports Hospital.
          </p>
        </motion.div>

        {/* FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                darkMode
                  ? 'bg-white/10 backdrop-blur-md border border-gray-700'
                  : 'bg-white border border-gray-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-6 py-4 flex justify-between items-center text-lg font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-green-300 hover:text-green-400' : 'text-green-700 hover:text-green-800'
                }`}
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`px-6 pb-4 overflow-hidden ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
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
