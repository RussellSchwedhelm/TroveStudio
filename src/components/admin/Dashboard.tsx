'use client';

import React from 'react';
import Link from 'next/link';

interface DashboardProps {
  stats: {
    products: number;
    news: number;
    journals: number;
  };
}

export default function Dashboard({ stats }: DashboardProps) {
  const cards = [
    { title: 'Products', count: stats.products, href: '/admin/products', label: 'Items in Shop' },
    { title: 'News', count: stats.news, href: '/admin/news', label: 'Articles Posted' },
    { title: 'Journal', count: stats.journals, href: '/admin/journal', label: 'Stories Written' },
  ];

  return (
    <div className="dashboard-grid">
      {cards.map((card) => (
        <Link href={card.href} key={card.title} className="stat-card">
          <div className="stat-title">{card.title}</div>
          <div className="stat-count">{card.count}</div>
          <div className="stat-label">{card.label}</div>
        </Link>
      ))}

      <style jsx>{`
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .stat-card {
          border: 1px solid var(--color-border);
          padding: 30px;
          border-radius: 4px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-color: var(--color-text);
        }

        .stat-title {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-light);
          margin-bottom: 15px;
        }

        .stat-count {
          font-family: var(--font-serif);
          font-size: 48px;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 13px;
          color: var(--color-text-light);
        }

        @media (max-width: 768px) {
          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
