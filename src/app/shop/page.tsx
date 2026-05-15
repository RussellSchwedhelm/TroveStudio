'use client';

import React from 'react';

const PRODUCTS = [
  {
    id: 1,
    title: "Aurelia Hoop Earrings",
    price: "R1,850",
    image: "https://images.unsplash.com/photo-1535633302704-c02f4f7d53e3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Luna Pendant Necklace",
    price: "R2,200",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Minimalist Band Ring",
    price: "R1,450",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Serpentine Bracelet",
    price: "R3,100",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Onyx Signet Ring",
    price: "R2,800",
    image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    title: "Pearl Drop Earrings",
    price: "R1,950",
    image: "https://images.unsplash.com/photo-1588444839799-eb00f490ad71?auto=format&fit=crop&q=80&w=800"
  }
];

const CATEGORIES = ["All", "Necklaces", "Earrings", "Rings", "Bracelets"];

export default function ShopPage() {
  return (
    <div className="shop-page">
      <section className="shop-header container">
        <h1 className="serif-title">Shop All</h1>
        <div className="shop-filters">
          <ul className="category-list">
            {CATEGORIES.map((cat) => (
              <li key={cat} className={cat === "All" ? "active" : ""}>
                <button>{cat}</button>
              </li>
            ))}
          </ul>
          <div className="sort-filter">
            <button>Sort By: Featured</button>
          </div>
        </div>
      </section>

      <section className="shop-products container">
        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .shop-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .shop-header {
          margin-bottom: 60px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 40px;
          font-weight: 400;
          margin-bottom: 40px;
        }
        .shop-filters {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 20px;
        }
        .category-list {
          display: flex;
          gap: 30px;
        }
        .category-list li button {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--color-text-light);
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;
        }
        .category-list li.active button {
          color: var(--color-text);
          border-bottom-color: var(--color-text);
        }
        .sort-filter button {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 60px 40px;
        }
        .product-card {
          cursor: pointer;
        }
        .product-image {
          aspect-ratio: 4/5;
          overflow: hidden;
          background-color: #F7F7F7;
          margin-bottom: 20px;
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
        .product-info {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }
        .product-title {
          font-size: 14px;
          font-weight: 400;
        }
        .product-price {
          font-size: 14px;
          color: var(--color-text-light);
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
          .category-list {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
