'use client';

import React from 'react';
import './news.css';

const NEWS_ITEMS = [
  {
    id: 1,
    category: "Collection",
    date: "May 12, 2026",
    title: "Introducing the Solstice Collection",
    excerpt: "Our newest series of hand-formed silver pieces draws from the quiet geometry of shadows cast at golden hour. Each piece is a study in restraint — where negative space becomes as intentional as the metal itself.",
    image: "/assets/images/trove_hero_3_1778846644095.png"
  },
  {
    id: 2,
    category: "Studio",
    date: "April 28, 2026",
    title: "Behind the Craft: A Day in the Studio",
    excerpt: "We open the doors to our Cape Town atelier, where every ring is hand-finished and every chain is inspected by the same hands that shaped it. A rare look at the process behind the pieces.",
    image: "/assets/images/trove_hero_1_1778846613200.png"
  },
  {
    id: 3,
    category: "Sustainability",
    date: "April 10, 2026",
    title: "Our Commitment to Responsible Sourcing",
    excerpt: "From ethically mined silver to recycled gold, we outline the exacting standards we hold ourselves to — and why we believe that beautiful jewelry should never come at the cost of people or planet.",
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
