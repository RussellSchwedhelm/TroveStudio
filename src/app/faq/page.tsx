'use client';

import React, { useState } from 'react';

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

      <style jsx>{`
        .faq-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
        }
        .faq-content {
          max-width: 800px;
        }
        .faq-category {
          margin-bottom: 80px;
        }
        .category-title {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 32px;
          font-weight: 500;
          color: var(--color-text-light);
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 12px;
        }
        .accordion {
          display: flex;
          flex-direction: column;
        }
        .accordion-item {
          border-bottom: 1px solid var(--color-border);
        }
        .accordion-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          text-align: left;
          font-size: 18px;
          font-family: var(--font-sans);
          transition: color 0.3s ease;
        }
        .accordion-header:hover {
          color: var(--color-text-light);
        }
        .accordion-header svg {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .vertical-line {
          transition: opacity 0.4s ease;
        }
        .accordion-item.is-open .vertical-line {
          opacity: 0;
        }
        .accordion-item.is-open .accordion-header svg {
          transform: rotate(90deg);
        }
        .accordion-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .accordion-item.is-open .accordion-content {
          max-height: 300px;
        }
        .accordion-inner {
          padding-bottom: 32px;
        }
        .accordion-inner p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-text-light);
        }

        @media (max-width: 768px) {
          .serif-title {
            font-size: 36px;
          }
          .accordion-header {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}
