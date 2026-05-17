'use client';

import React from 'react';
import './news.css';

const NEWS_ITEMS = [
  {
    id: 1,
    category: "Collection",
    date: "May 12, 2026",
    title: "Introducing the Autumn Capsule",
    excerpt: "Our newest curation of high-end vintage pieces draws from classic silhouettes and enduring fabrics. Each piece is a study in restraint — where timeless tailoring speaks louder than fleeting trends.",
    image: "/assets/images/trove_hero_3_1778846644095.png"
  },
  {
    id: 2,
    category: "Sourcing",
    date: "April 28, 2026",
    title: "The Art of the Find",
    excerpt: "We share our process of sourcing vintage treasures across the globe. From hidden estate sales to specialist dealers, discover how we curate pieces that meet our exacting standards.",
    image: "/assets/images/trove_hero_1_1778846613200.png"
  },
  {
    id: 3,
    category: "Sustainability",
    date: "April 10, 2026",
    title: "Our Commitment to Circular Fashion",
    excerpt: "By extending the lifecycle of beautifully crafted garments, we outline the exacting standards we hold ourselves to — and why we believe that luxury fashion should prioritize the planet.",
    image: "/assets/images/trove_hero_2_1778846628465.png"
  }
];

export default function NewsPage() {
  return (
    <div className="news-page">
      <section className="page-header container">
        <h3 className="section-subtitle">The Latest</h3>
        <h1 className="serif-title">News &amp; Updates</h1>
      </section>

      <section className="news-grid container">
        {NEWS_ITEMS.map((item) => (
          <article key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
              <span className="news-category">{item.category}</span>
            </div>
            <div className="news-content">
              <time className="news-date">{item.date}</time>
              <h2 className="news-title">{item.title}</h2>
              <p className="news-excerpt">{item.excerpt}</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
