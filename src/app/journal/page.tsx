'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import './journal.css';

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
    </div>
  );
}
