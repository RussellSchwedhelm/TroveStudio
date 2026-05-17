'use client';

import React, { useState } from 'react';
import './faq.css';

const faqData = [
  {
    category: "Products & Sizing",
    questions: [
      {
        question: "How do I know if an item will fit me?",
        answer: "We provide detailed measurements for every garment, including shoulders, chest, waist, and length. Because vintage sizing varies greatly from modern standards, we recommend comparing these measurements to a piece of clothing you already own."
      },
      {
        question: "What condition are the garments in?",
        answer: "All items are carefully inspected, cleaned, and repaired if necessary. We classify our pieces as Excellent (like new), Very Good (minor signs of wear), or Good (visible wear). Any specific flaws will be detailed in the product description."
      },
      {
        question: "Where do you source your pieces?",
        answer: "Our collections are globally sourced from private collections, estate sales, and specialist vintage dealers. We focus on finding high-quality, unique pieces with exceptional tailoring."
      }
    ]
  },
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How often do you drop new collections?",
        answer: "We release new collections in seasonal capsule drops, usually quarterly. Subscribe to our newsletter to get early access to drop dates."
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
    category: "Garment Care",
    questions: [
      {
        question: "How should I clean my vintage pieces?",
        answer: "We recommend dry cleaning for structured pieces like blazers and coats. For silks and delicate cottons, hand washing in cold water with a gentle detergent is best. Always refer to the care card included with your purchase."
      },
      {
        question: "How should I store my vintage garments?",
        answer: "Store your pieces in a cool, dry place. Use padded or wooden hangers for coats and jackets to maintain their shape, and fold heavy knitwear to prevent stretching."
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
