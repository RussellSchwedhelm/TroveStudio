'use client';

import React from 'react';
import './about.css';

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
    </div>
  );
}
