"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { searchAll, SearchResult } from '@/lib/search';
import { useCart } from '@/components/CartContext';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addItem } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      if (!isOpen) {
        setQuery('');
        setResults([]);
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim().length >= 2) {
        setIsLoading(true);
        const data = await searchAll(query);
        setResults(data);
        setIsLoading(false);
      } else {
        setResults([]);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const products = results.filter(r => r.type === 'product');
  const news = results.filter(r => r.type === 'news');
  const journals = results.filter(r => r.type === 'journal');

  if (!isOpen) return null;

  return (
    <div className={`search-overlay ${isOpen ? 'is-open' : ''}`}>
      <div className="search-container">
        <div className="search-header">
          <div className="search-input-wrapper">
            <Search className="search-icon-main" size={24} strokeWidth={1.5} />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for products, articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <button onClick={onClose} className="close-search" aria-label="Close search">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <div className="search-results-content">
          {isLoading ? (
            <div className="search-loading">Searching...</div>
          ) : query.trim().length < 2 ? (
            <div className="search-suggestions">
              <h3>Suggested Searches</h3>
              <ul>
                <li><button onClick={() => setQuery('Ring')}>Rings</button></li>
                <li><button onClick={() => setQuery('Chain')}>Chains</button></li>
                <li><button onClick={() => setQuery('Silver')}>Silver Collection</button></li>
                <li><button onClick={() => setQuery('Journal')}>Latest Journal</button></li>
              </ul>
            </div>
          ) : results.length === 0 ? (
            <div className="search-empty">
              No results found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="search-results-grid">
              {products.length > 0 && (
                <div className="search-result-section">
                  <div className="section-title">
                    <h4>Products</h4>
                    <Link href="/shop" onClick={onClose}>View All <ArrowRight size={12} /></Link>
                  </div>
                  <div className="search-products-list">
                    {products.map(product => (
                      <div key={product.id} className="search-product-item">
                        <Link href={product.url} onClick={onClose} className="product-image-small">
                          <Image 
                            src={product.image_url} 
                            alt={product.title} 
                            width={80} 
                            height={100} 
                          />
                        </Link>
                        <div className="product-details-small">
                          <Link href={product.url} onClick={onClose}>
                            <h5>{product.title}</h5>
                          </Link>
                          <p>R{product.price?.toLocaleString('en-ZA')}</p>
                          <button 
                            className="quick-add-btn"
                            onClick={() => addItem({
                              id: String(product.id),
                              name: product.title,
                              price: product.price || 0,
                              image: product.image_url,
                              quantity: 1
                            })}
                          >
                            <ShoppingBag size={14} /> Quick Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(news.length > 0 || journals.length > 0) && (
                <div className="search-result-section">
                  <div className="section-title">
                    <h4>Articles & News</h4>
                  </div>
                  <div className="search-articles-list">
                    {[...news, ...journals].map(item => (
                      <Link key={item.id} href={item.url} onClick={onClose} className="search-article-item">
                        <div className="article-image-small">
                          <Image 
                            src={item.image_url} 
                            alt={item.title} 
                            width={60} 
                            height={60} 
                          />
                        </div>
                        <div className="article-details-small">
                          <span className="article-type">{item.type}</span>
                          <h5>{item.title}</h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
