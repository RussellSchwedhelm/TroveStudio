import React from 'react';
import { createClient } from '@/lib/supabase-server';
import './news.css';

export default async function NewsPage() {
  const supabase = await createClient();
  
  const { data: newsItems } = await supabase
    .from('news')
    .select('*')
    .order('created_at', { ascending: false });

  // Fallback to empty array if no news
  const items = newsItems || [];

  return (
    <div className="news-page">
      <section className="page-header container">
        <h3 className="section-subtitle">The Latest</h3>
        <h1 className="serif-title">News & Updates</h1>
      </section>

      <section className="news-grid container">
        {items.length > 0 ? (
          items.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image_url} alt={item.title} />
                <span className="news-category">{item.category}</span>
              </div>
              <div className="news-content">
                <time className="news-date">{item.date}</time>
                <h2 className="news-title">{item.title}</h2>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href={`/news/${item.id}`} className="read-more">Read More</a>
              </div>
            </article>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', color: 'var(--color-text-light)' }}>
            Stay tuned for our latest updates and announcements.
          </p>
        )}
      </section>
    </div>
  );
}
