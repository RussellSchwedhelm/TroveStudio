'use client';

import React from 'react';
import './archive-sale.css';

const ARCHIVE_PRODUCTS = [
  {
    id: 1,
    title: "Chunky Hoops",
    originalPrice: "R3,850",
    salePrice: "R2,695",
    discount: "30% OFF",
    image: "/assets/images/trove_hero_1_1778846613200.png"
  },
  {
    id: 2,
    title: "Statement Chain",
    originalPrice: "R6,400",
    salePrice: "R4,480",
    discount: "30% OFF",
    image: "/assets/images/trove_hero_2_1778846628465.png"
  },
  {
    id: 3,
    title: "The Classic Ring",
    originalPrice: "R2,650",
    salePrice: "R1,855",
    discount: "30% OFF",
    image: "/assets/images/trove_hero_3_1778846644095.png"
  },
  {
    id: 4,
    title: "Camel Coat",
    originalPrice: "R8,900",
    salePrice: "R6,230",
    discount: "30% OFF",
    image: "/assets/images/camel_coat.png"
  },
  {
    id: 5,
    title: "Cashmere Knit",
    originalPrice: "R4,200",
    salePrice: "R2,940",
    discount: "30% OFF",
    image: "/assets/images/cashmere_knit.png"
  },
  {
    id: 6,
    title: "Pleated Trousers",
    originalPrice: "R3,600",
    salePrice: "R2,520",
    discount: "30% OFF",
    image: "/assets/images/pleated_trousers.png"
  }
];

export default function ArchiveSalePage() {
  return (
    <div className="archive-page">
      <section className="archive-header container">
        <div className="header-badge">Limited Access</div>
        <h1 className="serif-title">Archive Sale</h1>
        <p className="archive-intro">
          A curated selection of past season favorites and archival pieces, available at special pricing for a limited time only.
        </p>
      </section>

      <section className="archive-grid container">
        <div className="product-grid">
          {ARCHIVE_PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <span className="sale-tag">{product.discount}</span>
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
