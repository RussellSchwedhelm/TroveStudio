'use client';

import React from 'react';

const JOURNAL_POSTS = [
  {
    id: 1,
    title: "A Morning in the Studio",
    subtitle: "Exploring the creative process",
    image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "The Art of Layering",
    subtitle: "How to style your collection",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Sustainable Luxury",
    subtitle: "Our commitment to the planet",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800"
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
            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=1200" alt="Featured Story" />
          </div>
          <div className="featured-content">
            <span className="journal-label">Editorial</span>
            <h2 className="featured-title">Modern Antiquity: Redefining Classics</h2>
            <p>Our journey through the archives of jewelry history and how it influences our modern silhouettes.</p>
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

      <style jsx>{`
        .journal-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 100px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 56px;
          font-weight: 400;
          margin-bottom: 24px;
        }
        .page-description {
          font-size: 16px;
          color: var(--color-text-light);
          max-width: 500px;
          margin: 0 auto;
        }

        .journal-featured {
          margin-bottom: 120px;
        }
        .featured-item {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 0;
          background-color: #F9F9F9;
          align-items: center;
        }
        .featured-image {
          aspect-ratio: 16/9;
          overflow: hidden;
        }
        .featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .featured-content {
          padding: 60px;
        }
        .journal-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-text-light);
          display: block;
          margin-bottom: 20px;
        }
        .featured-title {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .featured-content p {
          font-size: 15px;
          line-height: 1.6;
          color: var(--color-text-light);
          margin-bottom: 32px;
        }
        .read-story {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 500;
        }

        .journal-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        .journal-card {
          cursor: pointer;
        }
        .journal-card-image {
          aspect-ratio: 1;
          overflow: hidden;
          margin-bottom: 24px;
        }
        .journal-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        .journal-card:hover .journal-card-image img {
          transform: scale(1.05);
        }
        .journal-card-title {
          font-family: var(--font-serif);
          font-size: 20px;
          margin-bottom: 8px;
          font-weight: 400;
        }
        .journal-card-subtitle {
          font-size: 13px;
          color: var(--color-text-light);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1024px) {
          .featured-item {
            grid-template-columns: 1fr;
          }
          .journal-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .journal-grid {
            grid-template-columns: 1fr;
          }
          .serif-title {
            font-size: 40px;
          }
        }
      `}</style>
    </div>
  );
}
