'use client';

import React from 'react';
import './journal.css';

const FEATURED_POST = {
  id: "1",
  label: "Editorial",
  title: "The Art of Wearing Less",
  subtitle: "In a world saturated with trend cycles and fast consumption, we explore what it means to dress with true intention — and why owning fewer, better things is the ultimate form of self-expression.",
  image: "/assets/images/trove_hero_2_1778846628465.png"
};

const JOURNAL_POSTS = [
  {
    id: "2",
    title: "Silver & Stone: A Materials Study",
    subtitle: "Process",
    image: "/assets/images/trove_hero_3_1778846644095.png"
  },
  {
    id: "3",
    title: "How to Build a Capsule Wardrobe",
    subtitle: "Style",
    image: "/assets/images/camel_coat.png"
  },
  {
    id: "4",
    title: "The Architects of Calm",
    subtitle: "Inspiration",
    image: "/assets/images/silk_blouse.png"
  },
  {
    id: "5",
    title: "On Texture, Touch & the Tactile",
    subtitle: "Craft",
    image: "/assets/images/cashmere_knit.png"
  },
  {
    id: "6",
    title: "Dressing for Yourself",
    subtitle: "Essay",
    image: "/assets/images/pleated_trousers.png"
  },
  {
    id: "7",
    title: "The Case for Leather",
    subtitle: "Material",
    image: "/assets/images/leather_bag.png"
  }
];

export default function JournalPage() {
  return (
    <div className="journal-page">
      <section className="page-header container">
        <h1 className="serif-title">Journal</h1>
        <p className="page-description">Stories, inspirations, and the lifestyle behind Trôve Studio.</p>
      </section>

      <section className="journal-featured container">
        <div className="featured-item">
          <div className="featured-image">
            <img src={FEATURED_POST.image} alt={FEATURED_POST.title} />
          </div>
          <div className="featured-content">
            <span className="journal-label">{FEATURED_POST.label}</span>
            <h2 className="featured-title">{FEATURED_POST.title}</h2>
            <p>{FEATURED_POST.subtitle}</p>
            <a href="#" className="read-story">Read Story</a>
          </div>
        </div>
      </section>

      <section className="journal-grid container">
        {JOURNAL_POSTS.map((post) => (
          <div key={post.id} className="journal-card">
            <div className="journal-card-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="journal-card-content">
              <h3 className="journal-card-title">{post.title}</h3>
              <p className="journal-card-subtitle">{post.subtitle}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
