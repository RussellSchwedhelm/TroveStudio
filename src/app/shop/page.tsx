'use client';

import React, { useState } from 'react';
import './shop.css';

const CATEGORIES = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Accessories"];

const PRODUCTS = [
  {
    id: "1",
    category: "Rings",
    title: "The Classic Ring",
    price: "R2,650",
    image: "/assets/images/trove_hero_3_1778846644095.png"
  },
  {
    id: "2",
    category: "Earrings",
    title: "Chunky Hoops",
    price: "R3,850",
    image: "/assets/images/trove_hero_1_1778846613200.png"
  },
  {
    id: "3",
    category: "Necklaces",
    title: "Statement Chain",
    price: "R6,400",
    image: "/assets/images/trove_hero_2_1778846628465.png"
  },
  {
    id: "4",
    category: "Accessories",
    title: "Camel Coat",
    price: "R8,900",
    image: "/assets/images/camel_coat.png"
  },
  {
    id: "5",
    category: "Accessories",
    title: "Cashmere Knit",
    price: "R4,200",
    image: "/assets/images/cashmere_knit.png"
  },
  {
    id: "6",
    category: "Accessories",
    title: "Leather Tote",
    price: "R11,500",
    image: "/assets/images/leather_bag.png"
  },
  {
    id: "7",
    category: "Accessories",
    title: "Leather Boots",
    price: "R7,800",
    image: "/assets/images/leather_boots.png"
  },
  {
    id: "8",
    category: "Accessories",
    title: "Pleated Trousers",
    price: "R3,600",
    image: "/assets/images/pleated_trousers.png"
  },
  {
    id: "9",
    category: "Accessories",
    title: "Silk Blouse",
    price: "R2,900",
    image: "/assets/images/silk_blouse.png"
  }
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="shop-page">
      <section className="shop-header container">
        <h1 className="serif-title">Shop All</h1>
        <div className="shop-filters">
          <ul className="category-list">
            {CATEGORIES.map((cat) => (
              <li key={cat} className={cat === activeCategory ? "active" : ""}>
                <button onClick={() => setActiveCategory(cat)}>{cat}</button>
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
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
                <button className="quick-add-btn">Quick Add</button>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <span className="product-price">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
