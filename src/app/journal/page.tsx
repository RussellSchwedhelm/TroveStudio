'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function JournalPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data } = await supabase
        .from('journals')
        .select('*')
        .order('created_at', { ascending: false });
      
      setPosts(data || []);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="journal-page container" style={{ paddingTop: '80px', textAlign: 'center' }}>Loading...</div>;
  }

  const featuredPost = posts.find(p => p.is_featured) || posts[0];
  const otherPosts = featuredPost ? posts.filter(p => p.id !== featuredPost.id) : posts;

  return (
    <div className="journal-page">
      <section className="page-header container">
        <h1 className="serif-title">Journal</h1>
        <p className="page-description">Stories, inspirations, and the lifestyle behind Trôve Studio.</p>
      </section>

      {featuredPost && (
        <section className="journal-featured container">
          <div className="featured-item">
            <div className="featured-image">
              <img src={featuredPost.image_url} alt={featuredPost.title} />
            </div>
            <div className="featured-content">
              <span className="journal-label">Editorial</span>
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p>{featuredPost.subtitle}</p>
              <a href={`/journal/${featuredPost.id}`} className="read-story">Read Story</a>
            </div>
          </div>
        </section>
      )}

      <section className="journal-grid container">
        {otherPosts.length > 0 ? (
          otherPosts.map((post) => (
            <div key={post.id} className="journal-card">
              <div className="journal-card-image">
                <img src={post.image_url} alt={post.title} />
              </div>
              <div className="journal-card-content">
                <h3 className="journal-card-title">{post.title}</h3>
                <p className="journal-card-subtitle">{post.subtitle}</p>
              </div>
            </div>
          ))
        ) : !featuredPost && (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', color: 'var(--color-text-light)' }}>
            New stories coming soon.
          </p>
        )}
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
