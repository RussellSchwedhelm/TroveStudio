'use client';

import React from 'react';
import './careers.css';

export default function CareersPage() {
  return (
    <div className="careers-page">
      <section className="page-header container">
        <h1 className="serif-title">Careers</h1>
        <p className="page-description">Join our small, passionate team in Pretoria.</p>
      </section>

      <section className="careers-content container">
        <div className="careers-intro">
          <h2 className="serif-subtitle">Working at Trôve Studio</h2>
          <p>
            Trôve Studio is a growing jewelry brand built on a foundation of minimalist design and artisanal craftsmanship. We are always looking for creative, dedicated individuals who share our vision and values.
          </p>
          <p>
            While we are a small team, we offer a collaborative and inspiring environment where every member plays a vital role in our growth.
          </p>
        </div>

        <div className="open-positions">
          <h3 className="section-label">Open Positions</h3>
          
          <div className="positions-empty">
            <p>We don&apos;t have any open positions at the moment, but we are always happy to hear from talented individuals.</p>
            <p>If you&apos;d like to be considered for future opportunities in design, production, or marketing, please send your CV and portfolio to <a href="mailto:careers@trovestudio.co.za">careers@trovestudio.co.za</a>.</p>
          </div>
        </div>

        <div className="culture-grid">
          <div className="culture-item">
            <h4>Craftsmanship</h4>
            <p>We value the art of making and the time it takes to create something truly special.</p>
          </div>
          <div className="culture-item">
            <h4>Minimalism</h4>
            <p>Our aesthetic is our guide, both in our designs and our approach to work.</p>
          </div>
          <div className="culture-item">
            <h4>Growth</h4>
            <p>We encourage continuous learning and the development of new skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
