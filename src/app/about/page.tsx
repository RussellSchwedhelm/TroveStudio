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
              Trôve Studio is a high-end vintage retail destination focused on quality, curation, and uniqueness.
            </p>
            <p>
              Founded in 2024, our store caters to the modern woman who seeks distinctive vintage pieces but doesn't have the time to sift through traditional charity stores. Each piece is thoughtfully curated with a focus on form, fabric, and timelessness.
            </p>
            <p>
              We believe in quality over quantity, choosing to release carefully selected garments in seasonal and quarterly capsule drops. Our aesthetic is rooted in the intersection of modern minimalism and classic elegance.
            </p>
            <div className="philosophy-section">
              <h3>Our Philosophy</h3>
              <ul>
                <li>
                  <strong>Intentional Curation</strong>
                  <p>Every piece is selected to ensure a perfect balance of comfort, style, and condition.</p>
                </li>
                <li>
                  <strong>Honest Materials</strong>
                  <p>We focus on natural fibers, enduring fabrics, and exceptional tailoring.</p>
                </li>
                <li>
                  <strong>Lasting Beauty</strong>
                  <p>Our vintage pieces are meant to be worn, loved, and given a beautiful second life.</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <img
              src="/assets/images/studio_workspace.png"
              alt="Vintage studio workspace"
              className="studio-photo"
            />
          </div>
        </div>
      </section>

      <section className="about-values container">
        <div className="values-grid">
          <div className="value-item">
            <span className="value-number">01</span>
            <h4>Global Sourcing</h4>
            <p>Each piece is sourced internationally, discovering hidden gems with unique histories.</p>
          </div>
          <div className="value-item">
            <span className="value-number">02</span>
            <h4>Capsule Drops</h4>
            <p>We release our curated collections in seasonal capsules to maintain exclusivity and intention.</p>
          </div>
          <div className="value-item">
            <span className="value-number">03</span>
            <h4>Conscious Consumption</h4>
            <p>By extending the lifecycle of high-quality garments, we promote a more sustainable fashion model.</p>
          </div>
          <div className="value-item">
            <span className="value-number">04</span>
            <h4>Exceptional Quality</h4>
            <p>Every piece undergoes a rigorous inspection and care process before it reaches our store.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
