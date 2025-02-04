import React from 'react';

const FAQ = () => {
  const faqs = [
    { question: "How long does sports injury recovery take?", answer: "Recovery time varies depending on the severity and type of injury." },
    { question: "What is sports physiotherapy, and how does it help?", answer: "Sports physiotherapy focuses on preventing, assessing, and treating injuries related to sports and exercise." },
    { question: "Do you offer special rehab programs for professional athletes?", answer: "Yes, we offer customized rehab programs tailored to the needs of professional athletes." },
    { question: "What are the consultation charges?", answer: "Please contact us for information on our consultation charges." },
  ];

  return (
    <section className="section-class">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;