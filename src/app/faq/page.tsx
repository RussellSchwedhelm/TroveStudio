'use client';

import React, { useState } from 'react';
import './faq.css';

const faqData = [
  {
    category: "Products & Sizing",
    questions: [
      {
        question: "How do I find my ring size?",
        answer: "We offer a downloadable size guide on our website. Alternatively, you can visit any local jeweler to have your fingers sized professionally. We follow standard UK/SA sizing (letters)."
      },
      {
        question: "What materials do you use?",
        answer: "We work primarily with solid 9ct and 18ct gold, and sterling silver. Some pieces feature ethically sourced precious and semi-precious gemstones. Material details are listed on each product page."
      },
      {
        question: "Are your pieces handmade?",
        answer: "Yes, every piece of Trôve Studio jewelry is handcrafted in our Pretoria studio. We pride ourselves on the artisanal quality and attention to detail that only manual production can provide."
      }
    ]
  },
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How long will my order take?",
        answer: "As many of our pieces are made to order, please allow 7-14 business days for production before shipping. Ready-to-ship items are processed within 2-3 business days."
      },
      {
        question: "Can I track my order?",
        answer: "Yes, once your order has been dispatched, you will receive a shipping confirmation email with a tracking number and a link to track your parcel."
      },
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. International shipping rates and times vary by location."
      }
    ]
  },
  {
    category: "Jewelry Care",
    questions: [
      {
        question: "How should I clean my jewelry?",
        answer: "We recommend using a soft, lint-free cloth or a dedicated jewelry polishing cloth. For a deeper clean, mild soap and warm water can be used on most pieces (excluding certain porous stones like opals or pearls)."
      },
      {
        question: "Can I wear my jewelry in the shower?",
        answer: "While solid gold is generally fine, we recommend removing all jewelry before showering, swimming, or exercising to avoid exposure to harsh chemicals and physical damage."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="faq-page">
      <section className="page-header container">
        <h1 className="serif-title">Frequently Asked Questions</h1>
      </section>

      <section className="faq-content container">
        {faqData.map((category, catIdx) => (
          <div key={catIdx} className="faq-category">
            <h2 className="category-title">{category.category}</h2>
            <div className="accordion">
              {category.questions.map((item, qIdx) => {
                const id = `${catIdx}-${qIdx}`;
                const isOpen = openIndex === id;
                return (
                  <div key={qIdx} className={`accordion-item ${isOpen ? 'is-open' : ''}`}>
                    <button 
                      className="accordion-header" 
                      onClick={() => toggleAccordion(id)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6 1V11" stroke="currentColor" strokeWidth="1.5" className="vertical-line" />
                      </svg>
                    </button>
                    <div className="accordion-content">
                      <div className="accordion-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
