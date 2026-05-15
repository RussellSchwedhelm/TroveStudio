"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, User } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { supabase } from '@/lib/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';
import SearchOverlay from './SearchOverlay';

export default function Header() {
  const { openCart, cartCount } = useCart();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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
            <li>
              <button aria-label="Search" onClick={() => setIsSearchOpen(true)}>
                <Search size={20} strokeWidth={1.5} />
              </button>
            </li>
            <li>
              <Link href={user ? "/profile" : "/login"} aria-label={user ? "Profile" : "Login"} className="header-icon-link">
                {user ? (
                  <div className="user-status">
                    <User size={20} strokeWidth={1.5} />
                    <span className="user-dot"></span>
                  </div>
                ) : (
                  <User size={20} strokeWidth={1.5} />
                )}
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

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
}

