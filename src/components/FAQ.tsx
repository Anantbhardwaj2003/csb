import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const faqs = [
    {
      question: 'What are the visiting hours?',
      answer: 'Visiting hours are from 9:00 AM to 7:00 PM daily.',
    },
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment online or call us at (555) 123-4567.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance plans. Please call us for specific inquiries.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mt-2">
          Find answers to common questions about our services and policies.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-blue-200 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02] bg-white"
          >
            <button
              className="w-full text-left p-4  focus:outline-none flex justify-between items-center transition-colors"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium text-blue-900">{faq.question}</span>
              <span className="text-blue-600">
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="p-4 text-gray-700 text-base bg-blue-50 transition-opacity duration-300"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
