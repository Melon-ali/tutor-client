"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqData = [
  {
    category: "Tutoring",
    questions: [
      {
        question: "How do I Find a Tutor?",
        answer: "You Can Search for Tutors Using Filters Like Subject, Experience, and Rating on Our Platform.",
      },
      {
        question: "Can I Schedule a Session in Advance?",
        answer: "Yes, You Can Book a Session in Advance by Selecting a time Slot That Works for You.",
      },
    ],
  },
  {
    category: "Payments",
    questions: [
      {
        question: "How are payments processed?",
        answer: "Payments are Securely Processed Through Stripe or SSLCommerz. You Can Pay Using Cards or Digital Wallets.",
      },
      {
        question: "Can I Get a Refund if I Cancel a Session?",
        answer: "Refund Policies Vary. Please Check the Terms Before Booking a Session.",
      },
    ],
  },
  {
    category: "Account Management",
    questions: [
      {
        question: "How do I reset my password?",
        answer: "Go to the Login Page and Click 'Forgot Password' to Receive a Reset Link Via Email.",
      },
      {
        question: "Can I Change my Registered Email?",
        answer: "Yes, You can Update Your Email From the Account Settings Page.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-16 text-[#001B61]">
      <h2 className="text-3xl font-bold text-center mb-8 py-4">Frequently Asked Questions</h2>

      {faqData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h3 className="text-xl font-semibold border-b pb-2">{section.category}</h3>

          {section.questions.map((faq, index) => {
            const isOpen = openIndex === sectionIndex * 10 + index;
            return (
              <div key={index} className="border rounded-lg my-3">
                <button
                  onClick={() => toggleFAQ(sectionIndex * 10 + index)}
                  className="w-full flex justify-between items-center p-4 text-left text-lg font-medium focus:outline-none"
                >
                  {faq.question}
                  <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="p-4 text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
