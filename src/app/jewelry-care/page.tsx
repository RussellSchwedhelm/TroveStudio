'use client';

import React from 'react';

export default function JewelryCarePage() {
  return (
    <div className="jewelry-care-page">
      <section className="page-header container">
        <h1 className="serif-title">Jewelry Care</h1>
        <p className="page-description">How to keep your Trôve Studio pieces beautiful for years to come.</p>
      </section>

      <section className="care-content container">
        <div className="care-grid">
          <div className="care-item">
            <h2 className="serif-subtitle">Solid Gold</h2>
            <p>Solid gold is a precious metal that does not oxidize or discolor. However, it can lose its luster over time due to exposure to oils and everyday wear.</p>
            <ul>
              <li>Clean with warm water, mild soap, and a soft brush.</li>
              <li>Dry thoroughly with a soft, lint-free cloth.</li>
              <li>Avoid contact with harsh chemicals like chlorine.</li>
            </ul>
          </div>

          <div className="care-item">
            <h2 className="serif-subtitle">Sterling Silver</h2>
            <p>Sterling silver naturally oxidizes (tarnishes) over time when exposed to air and moisture. Regular wear actually helps prevent tarnish by the friction of your skin.</p>
            <ul>
              <li>Store in an airtight bag when not in wear.</li>
              <li>Use a silver polishing cloth to restore shine.</li>
              <li>Remove before swimming or bathing.</li>
            </ul>
          </div>

          <div className="care-item">
            <h2 className="serif-subtitle">Gemstones</h2>
            <p>Different gemstones require different levels of care. Some are more porous than others and can be damaged by heat or chemicals.</p>
            <ul>
              <li>Avoid ultrasonic cleaners unless you are sure the stone is safe.</li>
              <li>Pearls and opals should be cleaned only with a soft, damp cloth.</li>
              <li>Apply perfumes and lotions before putting on your jewelry.</li>
            </ul>
          </div>

          <div className="care-item">
            <h2 className="serif-subtitle">Storage</h2>
            <p>Proper storage is essential to prevent scratches and tangles, especially for delicate chains.</p>
            <ul>
              <li>Store pieces individually in their original boxes or pouches.</li>
              <li>Keep chains fastened to avoid knotting.</li>
              <li>Store in a cool, dry place away from direct sunlight.</li>
            </ul>
          </div>
        </div>

        <div className="care-cta">
          <p>Questions about a specific piece?</p>
          <a href="/contact" className="underline-link">Contact our studio</a>
        </div>
      </section>

      <style jsx>{`
        .jewelry-care-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 100px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
          margin-bottom: 16px;
        }
        .page-description {
          font-size: 16px;
          color: var(--color-text-light);
          max-width: 500px;
          margin: 0 auto;
        }
        .care-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 100px;
        }
        .care-item {
          display: flex;
          flex-direction: column;
        }
        .serif-subtitle {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .care-item p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--color-text-light);
          margin-bottom: 24px;
        }
        .care-item ul {
          padding-left: 0;
        }
        .care-item li {
          font-size: 15px;
          color: var(--color-text);
          margin-bottom: 12px;
          position: relative;
          padding-left: 20px;
        }
        .care-item li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--color-border);
        }
        .care-cta {
          text-align: center;
          border-top: 1px solid var(--color-border);
          padding-top: 60px;
        }
        .care-cta p {
          font-size: 16px;
          color: var(--color-text-light);
          margin-bottom: 12px;
        }
        .underline-link {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .care-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .serif-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
