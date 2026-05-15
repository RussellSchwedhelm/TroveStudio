import React from 'react';
import { createClient } from '@/lib/supabase-server';

const CATEGORIES = ["All", "Necklaces", "Earrings", "Rings", "Bracelets"];

export default async function ShopPage() {
  const supabase = await createClient();
  
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  const items = products || [];

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
          {items.length > 0 ? (
            items.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image_url} alt={product.title} />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                  <span className="product-price">R {product.price.toLocaleString()}</span>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1/-1', color: 'var(--color-text-light)' }}>
              No products found. Please check back later.
            </p>
          )}
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
