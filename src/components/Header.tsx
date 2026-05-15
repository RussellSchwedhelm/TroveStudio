"use client";

import React from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, User } from 'lucide-react';
import { useCart } from '@/components/CartContext';

export default function Header() {
  const { openCart, cartCount } = useCart();

  return (
    <header className="site-header" id="header">
      <div className="header-inner">
        <nav className="header-nav-left">
          <ul>
            <li><Link href="/news">News</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/archive-sale">Archive Sale</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
        
        <h1 className="header-logo">
          <Link href="/">TRÔVE STUDIO</Link>
        </h1>
        
        <nav className="header-nav-right">
          <ul>
            <li><button aria-label="Search"><Search size={20} strokeWidth={1.5} /></button></li>
            <li>
              <Link href="/profile" aria-label="Profile">
                <User size={20} strokeWidth={1.5} />
              </Link>
            </li>
            <li><button aria-label="Wishlist"><Heart size={20} strokeWidth={1.5} /></button></li>
            <li>
              <button aria-label="Cart" onClick={openCart} className="cart-trigger">
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </button>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-toggle" aria-label="Menu">
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
}

