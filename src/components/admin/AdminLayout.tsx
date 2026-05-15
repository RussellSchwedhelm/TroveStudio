'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Products', href: '/admin/products' },
    { name: 'News', href: '/admin/news' },
    { name: 'Journal', href: '/admin/journal' },
    { name: 'Back to Site', href: '/' },
  ];

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          <Link href="/admin">Trôve Admin</Link>
        </div>
        <nav className="admin-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? 'active' : ''}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>{navItems.find((item) => item.href === pathname)?.name || 'Admin'}</h1>
        </header>
        <div className="admin-content">
          {children}
        </div>
      </main>

      <style jsx>{`
        .admin-container {
          display: flex;
          min-height: 100vh;
          background-color: #f9f9f9;
        }

        .admin-sidebar {
          width: 260px;
          background-color: #ffffff;
          border-right: 1px solid var(--color-border);
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
        }

        .admin-logo {
          padding: 0 30px;
          margin-bottom: 60px;
        }

        .admin-logo a {
          font-family: var(--font-serif);
          font-size: 24px;
          font-weight: 500;
          color: var(--color-text);
        }

        .admin-nav ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .admin-nav a {
          display: block;
          padding: 12px 30px;
          font-size: 14px;
          color: var(--color-text-light);
          transition: all 0.3s ease;
          border-left: 3px solid transparent;
        }

        .admin-nav a:hover {
          background-color: #f5f5f5;
          color: var(--color-text);
          opacity: 1;
        }

        .admin-nav a.active {
          background-color: #f5f5f5;
          color: var(--color-text);
          border-left-color: var(--color-text);
          font-weight: 500;
          opacity: 1;
        }

        .admin-main {
          flex: 1;
          margin-left: 260px;
          padding: 40px 60px;
        }

        .admin-header {
          margin-bottom: 40px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 20px;
        }

        .admin-header h1 {
          font-family: var(--font-serif);
          font-size: 32px;
          font-weight: 400;
        }

        .admin-content {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          padding: 40px;
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .admin-sidebar {
            width: 200px;
          }
          .admin-main {
            margin-left: 200px;
          }
        }

        @media (max-width: 768px) {
          .admin-container {
            flex-direction: column;
          }
          .admin-sidebar {
            width: 100%;
            height: auto;
            position: relative;
            padding: 20px 0;
          }
          .admin-main {
            margin-left: 0;
            padding: 20px;
          }
          .admin-logo {
            margin-bottom: 20px;
          }
          .admin-nav ul {
            flex-direction: row;
            padding: 0 20px;
            overflow-x: auto;
          }
          .admin-nav a {
            padding: 10px 15px;
            border-left: none;
            border-bottom: 3px solid transparent;
          }
          .admin-nav a.active {
            border-bottom-color: var(--color-text);
          }
        }
      `}</style>
    </div>
  );
}
