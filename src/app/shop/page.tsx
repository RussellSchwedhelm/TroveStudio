import React from 'react';
import { createClient } from '@/lib/supabase-server';
import './shop.css';

const CATEGORIES = ["All", "Tailoring", "Knitwear", "Tops", "Trousers", "Accessories", "Shoes", "Jewelry"];

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
    </div>
  );
}
