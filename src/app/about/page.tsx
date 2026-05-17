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
            <img
              src="/assets/images/studio_workspace.png"
              alt="Trôve Studio workspace with silver jewelry and tools on linen"
              className="studio-photo"
            />
          </div>
        </div>
      </section>

      <section className="about-values container">
        <div className="values-grid">
          <div className="value-item">
            <span className="value-number">01</span>
            <h4>Cape Town Made</h4>
            <p>Each piece is crafted by hand in our Cape Town atelier by skilled local artisans.</p>
          </div>
          <div className="value-item">
            <span className="value-number">02</span>
            <h4>Limited Editions</h4>
            <p>We produce in small batches to ensure quality, reduce waste, and maintain exclusivity.</p>
          </div>
          <div className="value-item">
            <span className="value-number">03</span>
            <h4>Ethical Sourcing</h4>
            <p>All materials are responsibly sourced, with full traceability from mine to studio.</p>
          </div>
          <div className="value-item">
            <span className="value-number">04</span>
            <h4>Lifetime Care</h4>
            <p>Every piece comes with our lifetime cleaning and repair promise at no cost.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
