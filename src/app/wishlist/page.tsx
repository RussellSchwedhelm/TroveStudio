'use client';

import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import './wishlist.css';

export default function WishlistPage() {
  return (
    <div className="wishlist-page">
      <section className="wishlist-header container">
        <h1 className="serif-title">Wishlist</h1>
        <p className="wishlist-subtitle">Your saved favourites</p>
      </section>

      <section className="wishlist-content container">
        <div className="wishlist-empty">
          <Heart size={64} strokeWidth={0.5} className="wishlist-icon" />
          <h2>Your wishlist is empty</h2>
          <p>Save your favourite pieces to revisit them later.</p>
          <Link href="/shop" className="wishlist-cta">
            Explore the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
