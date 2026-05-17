'use client';

import React from 'react';
import './garment-care.css';

export default function GarmentCarePage() {
  return (
    <div className="garment-care-page">
      <section className="page-header container">
        <h1 className="serif-title">Garment Care</h1>
        <p className="page-description">How to keep your vintage pieces beautiful for years to come.</p>
      </section>

      <section className="care-content container">
        <div className="care-grid">
          <div className="care-item">
            <h2 className="serif-subtitle">Wool & Cashmere</h2>
            <p>Natural animal fibers are breathable and resilient, but require gentle handling to maintain their shape and softness.</p>
            <ul>
              <li>Dry clean only unless hand-washing is explicitly recommended.</li>
              <li>Fold heavy knits instead of hanging to prevent stretching.</li>
              <li>Use cedar blocks or lavender to naturally deter moths.</li>
            </ul>
          </div>

          <div className="care-item">
            <h2 className="serif-subtitle">Silk</h2>
            <p>Vintage silks are delicate and can be susceptible to water damage and color bleeding.</p>
            <ul>
              <li>Always dry clean structured silk garments.</li>
              <li>Keep away from direct sunlight when storing to prevent fading.</li>
              <li>Iron on the lowest setting with a pressing cloth, or steam carefully.</li>
            </ul>
          </div>

          <div className="care-item">
            <h2 className="serif-subtitle">Cotton & Linen</h2>
            <p>Plant-based fibers are durable but can shrink or lose their crispness over time if not cared for properly.</p>
            <ul>
              <li>Machine wash on a cold, gentle cycle, or hand wash.</li>
              <li>Air dry flat or on a well-padded hanger.</li>
              <li>Iron while slightly damp for the best results.</li>
            </ul>
          </div>

          <div className="care-item">
            <h2 className="serif-subtitle">Storage</h2>
            <p>Proper storage is essential to prolong the life of your vintage garments.</p>
            <ul>
              <li>Use padded or wooden hangers for jackets and coats.</li>
              <li>Store in a cool, dry place out of direct sunlight.</li>
              <li>Use breathable cotton garment bags for long-term storage, avoiding plastic.</li>
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
