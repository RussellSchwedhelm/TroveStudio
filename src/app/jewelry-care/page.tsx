'use client';

import React from 'react';
import './jewelry-care.css';

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
    </div>
  );
}
