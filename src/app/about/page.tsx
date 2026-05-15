'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-header container">
        <h1 className="serif-title">Our Story</h1>
      </section>

      <section className="about-content container">
        <div className="about-grid">
          <div className="about-text">
            <p className="lead">
              Trôve Studio was born out of a desire for timeless, minimalist jewelry that speaks to a sense of casual elegance.
            </p>
            <p>
              Founded in 2024, our studio focuses on creating pieces that are not just accessories, but companions for your daily life. Each piece is thoughtfully designed with a focus on form, material, and the way it interacts with the wearer.
            </p>
            <p>
              We believe in quality over quantity, choosing to produce limited collections that prioritize craftsmanship and ethical sourcing. Our aesthetic is rooted in the intersection of traditional techniques and modern minimalism.
            </p>
            <div className="philosophy-section">
              <h3>Our Philosophy</h3>
              <ul>
                <li>
                  <strong>Intentional Design</strong>
                  <p>Every curve and line is considered to ensure a perfect balance of comfort and style.</p>
                </li>
                <li>
                  <strong>Honest Materials</strong>
                  <p>We work with solid gold, sterling silver, and ethically sourced gemstones.</p>
                </li>
                <li>
                  <strong>Lasting Beauty</strong>
                  <p>Our jewelry is made to be worn, loved, and passed down through generations.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder" style={{ 
              aspectRatio: '4/5', 
              backgroundColor: '#F7F7F7', 
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: '#999'
            }}>
              [ Studio Image ]
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .page-header {
          margin-bottom: 80px;
          text-align: center;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 100px;
          align-items: start;
        }
        .about-text {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .lead {
          font-size: 24px;
          line-height: 1.4;
          color: var(--color-text);
          font-family: var(--font-serif);
        }
        .about-text p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--color-text-light);
        }
        .philosophy-section {
          margin-top: 48px;
        }
        .philosophy-section h3 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 32px;
          font-weight: 500;
        }
        .philosophy-section ul {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .philosophy-section li strong {
          display: block;
          font-size: 16px;
          margin-bottom: 8px;
          color: var(--color-text);
          font-weight: 500;
        }
        .philosophy-section li p {
          font-size: 14px;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-image {
            order: -1;
          }
          .serif-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
