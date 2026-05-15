'use client';

import React from 'react';

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

      <style jsx>{`
        .archive-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .archive-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .header-badge {
          display: inline-block;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
          border: 1px solid var(--color-text);
          padding: 4px 12px;
          margin-bottom: 24px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
          margin-bottom: 24px;
        }
        .archive-intro {
          font-size: 16px;
          color: var(--color-text-light);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 40px;
        }
        .product-card {
          cursor: pointer;
          position: relative;
        }
        .product-image {
          aspect-ratio: 4/5;
          overflow: hidden;
          background-color: #F7F7F7;
          margin-bottom: 20px;
          position: relative;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .product-card:hover .product-image img {
          transform: scale(1.03);
        }
        .sale-tag {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--color-text);
          color: white;
          font-size: 10px;
          padding: 4px 8px;
          letter-spacing: 1px;
        }
        .product-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .product-title {
          font-size: 14px;
          font-weight: 400;
        }
        .price-container {
          display: flex;
          gap: 12px;
          font-size: 14px;
        }
        .original-price {
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .sale-price {
          color: #B22222; /* A subtle dark red for sale */
          font-weight: 500;
        }

        .archive-footer {
          margin-top: 100px;
          text-align: center;
        }
        .footer-notice {
          border-top: 1px solid var(--color-border);
          padding-top: 40px;
          font-size: 12px;
          color: var(--color-text-light);
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: repeat(1, 1fr);
          }
          .serif-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
}
