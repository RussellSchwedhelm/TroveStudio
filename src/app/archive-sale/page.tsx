'use client';

import React from 'react';
import './archive-sale.css';

const ARCHIVE_PRODUCTS = [
  {
    id: 1,
    title: "Vintage Chain Bracelet",
    originalPrice: "R2,400",
    salePrice: "R1,680",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Sculptural Cuff",
    originalPrice: "R3,200",
    salePrice: "R2,240",
    image: "https://images.unsplash.com/photo-1535633302704-c02f4f7d53e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Petite Studs",
    originalPrice: "R950",
    salePrice: "R665",
    image: "https://images.unsplash.com/photo-1588444839799-eb00f490ad71?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ArchiveSalePage() {
  return (
    <div className="archive-page">
      <section className="archive-header container">
        <div className="header-badge">Limited Access</div>
        <h1 className="serif-title">Archive Sale</h1>
        <p className="archive-intro">
          A selection of past season favorites and archival pieces, available at special pricing for a limited time.
        </p>
      </section>

      <section className="archive-grid container">
        <div className="product-grid">
          {ARCHIVE_PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <span className="sale-tag">30% OFF</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <div className="price-container">
                  <span className="original-price">{product.originalPrice}</span>
                  <span className="sale-price">{product.salePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="archive-footer container">
        <div className="footer-notice">
          <p>Please note: All archive sale items are final sale and cannot be returned or exchanged.</p>
        </div>
      </section>
    </div>
  );
}
