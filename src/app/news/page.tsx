import React from 'react';
import { createClient } from '@/lib/supabase-server';

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

      <style jsx>{`
        .news-page {
          padding-top: 80px;
          padding-bottom: 120px;
        }
        .page-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .section-subtitle {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-text-light);
          margin-bottom: 16px;
        }
        .serif-title {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 400;
        }
        .news-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 80px;
          max-width: 900px !important;
        }
        .news-card {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .news-image {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }
        .news-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s ease;
        }
        .news-card:hover .news-image img {
          transform: scale(1.05);
        }
        .news-category {
          position: absolute;
          top: 20px;
          left: 20px;
          background: white;
          padding: 6px 12px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }
        .news-date {
          display: block;
          font-size: 12px;
          color: var(--color-text-light);
          margin-bottom: 12px;
        }
        .news-title {
          font-family: var(--font-serif);
          font-size: 28px;
          margin-bottom: 20px;
          font-weight: 400;
        }
        .news-excerpt {
          font-size: 16px;
          line-height: 1.6;
          color: var(--color-text-light);
          margin-bottom: 24px;
        }
        .read-more {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-decoration: underline;
          text-underline-offset: 4px;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .news-card {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .serif-title {
            font-size: 32px;
          }
        }
      `}</style>
    </div>
  );
}
